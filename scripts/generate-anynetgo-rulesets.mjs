import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = await readFile(join(root, "shadowrocket-auto.conf"), "utf8");
const outputDir = join(root, "rulesets");

const policyNames = {
  DIRECT: "jaff-direct",
  HK_AUTO: "jaff-hk",
  US_AUTO: "jaff-us",
  REJECT: "jaff-reject",
};

const fieldNames = {
  DOMAIN: "domain",
  "DOMAIN-SUFFIX": "domain_suffix",
  "DOMAIN-KEYWORD": "domain_keyword",
  "DOMAIN-REGEX": "domain_regex",
  "IP-CIDR": "ip_cidr",
  "IP-CIDR6": "ip_cidr",
};

const sets = Object.fromEntries(
  Object.values(policyNames).map((name) => [name, new Map()]),
);

for (const rawLine of source.split(/\r?\n/)) {
  const line = rawLine.trim();
  if (!line || line.startsWith("#")) continue;

  const [type, value, policy] = line.split(",");
  const name = policyNames[policy];
  const field = fieldNames[type];
  if (!name || !field || !value) continue;

  const fields = sets[name];
  if (!fields.has(field)) fields.set(field, new Set());
  fields.get(field).add(value);
}

await mkdir(outputDir, { recursive: true });

for (const [name, fields] of Object.entries(sets)) {
  const rule = Object.fromEntries(
    [...fields.entries()].map(([field, values]) => [field, [...values].sort()]),
  );
  const ruleSet = { version: 3, rules: [rule] };
  await writeFile(
    join(outputDir, `geosite-${name}.json`),
    `${JSON.stringify(ruleSet, null, 2)}\n`,
  );
}
