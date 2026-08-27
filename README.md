# Shadowrocket Rules

Personal Shadowrocket rules for routing. This repo is meant to be updated over
time whenever a new app, website, or routing preference needs to be added.

## Subscription URL

Use this URL in Shadowrocket as the daily remote config:

```text
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/shadowrocket-auto.conf
```

YAML version of the same main rules:

```text
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/shadowrocket-auto.yaml
```

Legacy AnyNetGo / sing-box route config (not a standalone AnyNetGo profile):

```text
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/anynetgo.json
```

AnyNetGo custom binary rule sets:

```text
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/rulesets/geosite-jaff-direct.srs
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/rulesets/geosite-jaff-hk.srs
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/rulesets/geosite-jaff-us.srs
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/rulesets/geosite-jaff-reject.srs
```

Assign `jaff-direct` to `DIRECT`, `jaff-hk` and `jaff-us` to `PROXY`, and
`jaff-reject` to `REJECT` in AnyNetGo. AnyNetGo currently exposes one generic
proxy action for custom rules, so the HK and US sets use the currently selected
proxy node rather than separate regional auto-test groups.

Legacy Futu troubleshooting profile:

```text
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/shadowrocket-futu-strict.conf
```

Legacy balanced Futu troubleshooting profile:

```text
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/shadowrocket-futu-balanced.conf
```

Main maintained config:

- `shadowrocket-auto.conf`
- `shadowrocket-auto.yaml` for YAML-compatible clients
- `anynetgo.json` for AnyNetGo / sing-box-compatible routing
- `shadowrocket-futu-strict.conf` for legacy Futu strict mode
- `shadowrocket-futu-balanced.conf` for legacy Futu balanced mode

Older/alternate configs are kept in the repo for reference, but the URL above is
the one to use day to day.

## Current Routing Policy

- Home routers and private/local network services bypass the tunnel and connect directly
- Streaming services through the fastest available Hong Kong node
- Common YouTube and Google ad-serving domains rejected
- Overseas social apps through the fastest available Hong Kong node
- AI services through the fastest available US node
- Futu / Futubull / Moomoo directly
- Futu-related cloud/CDN endpoints directly
- WeChat, Tencent, and common mainland China apps directly
- WeChat mini program and video media resources directly
- Tencent Video, Tencent Sports, and related media traffic directly
- Meituan, Dianping, Xianyu, Alipay, Didi, and mainland stock apps directly
- Mainland China bank apps and websites directly
- HSBC HK app and HSBC websites directly
- Hong Kong iAM Smart and government authentication services directly
- Common mainland China cloud and CDN providers directly
- Mainland China `.cn` domains and China GeoIP traffic directly
- Other traffic through the fastest available node group

## Policy Groups

The main config defines three automatic speed groups:

- `HK_AUTO`: tests Hong Kong nodes and uses the fastest available one
- `US_AUTO`: tests US nodes and uses the fastest available one
- `FAST_AUTO`: tests common available nodes and uses the fastest one

The legacy AnyNetGo JSON is generated from the same routing policy. It compacts the
Shadowrocket rules into grouped sing-box route blocks and keeps the same group
names: `HK_AUTO`, `US_AUTO`, and `FAST_AUTO`. It does not include node
credentials; those still need to come from the AnyNetGo account/subscription or
be merged by the provider/client.

Do not paste `anynetgo.json` into AnyNetGo's rule-set download source. That
field expects a directory of compiled `.srs` files. Use the four binary rule-set
URLs above through AnyNetGo's custom Geo rule-set interface instead.

For AnyNetGo, unmatched traffic uses `DIRECT`. This lets WeChat and other
mainland apps connect immediately even when their first requests use an IP,
QUIC, or an existing connection that cannot be classified by domain. Explicit
streaming, AI, and overseas social rules still use `HK_AUTO`, `US_AUTO`, or the
narrower `FAST_AUTO` group as configured.

The AnyNetGo profile uses IPv4-only DNS answers and DNS reverse mapping. This
avoids slow startup on unreliable IPv6 paths and helps Tencent/WeChat video CDN
connections retain their domain identity when they are routed to `DIRECT`.

If your existing Shadowrocket config already has a final rule such as `FINAL` or `MATCH`, keep only one final rule and make it:

```ini
FINAL,FAST_AUTO
```

## Rule Order Principles

Keep specific rules above broad fallback rules:

1. Local/private network direct rules
2. YouTube / Google ad rejection
3. Futu / Moomoo
4. Streaming
5. AI
6. Overseas social apps
7. WeChat / Tencent and common mainland China direct rules
8. Mainland China `.cn` and `GEOIP,CN` direct rules
9. `FINAL,FAST_AUTO`

YouTube in-stream ads may share `googlevideo.com` with normal videos. The config
does not reject that domain because doing so would break playback, so domain-level
filtering cannot guarantee removal of every in-stream ad.

The Futu / Futubull / Moomoo rules must stay above all mainland direct rules so
they continue to use `DIRECT`.

## How To Request Updates

When asking for a new rule update, provide any of the following:

- App or website name
- Preferred route: `DIRECT`, `HK_AUTO`, `US_AUTO`, or `FAST_AUTO`
- Any domain shown in Shadowrocket logs
- What feels wrong: slow loading, wrong region, login risk, payment issue, video buffering

Example:

```text
Add Xiaohongshu image/video domains as DIRECT.
```

After each update:

1. Edit `shadowrocket-auto.conf`
2. Regenerate `shadowrocket-auto.yaml` and `anynetgo.json`
3. Keep specific rules above broad rules
4. Check for duplicate domains
5. Commit and push to GitHub
6. Verify the raw URLs

See `UPDATE_REQUEST.md` for a copyable request template and `CHANGELOG.md` for
the update history.
