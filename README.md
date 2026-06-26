# Shadowrocket Rules

Personal Shadowrocket rules for routing. This repo is meant to be updated over
time whenever a new app, website, or routing preference needs to be added.

## Subscription URL

Use this URL in Shadowrocket as the daily remote config:

```text
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/shadowrocket-auto.conf
```

Use this stricter URL only when testing or using Futu / Futubull / Moomoo:

```text
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/shadowrocket-futu-strict.conf
```

Use this balanced Futu URL when you want Futu protection while keeping core
mainland apps like WeChat, Alipay, maps, Meituan, Dianping, and Didi direct:

```text
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/shadowrocket-futu-balanced.conf
```

Main maintained config:

- `shadowrocket-auto.conf`
- `shadowrocket-futu-strict.conf` for Futu strict mode
- `shadowrocket-futu-balanced.conf` for Futu balanced mode

Older/alternate configs are kept in the repo for reference, but the URL above is
the one to use day to day.

## Current Routing Policy

- Home routers and private/local network services bypass the tunnel and connect directly
- Streaming services through the fastest available Hong Kong node
- Common YouTube and Google ad-serving domains rejected
- Overseas social apps through the fastest available Hong Kong node
- AI services through the fastest available US node
- Futu / Futubull / Moomoo through a dedicated non-Hong-Kong overseas fallback group
- Optional Futu strict mode sends all non-local traffic through the same overseas group
- Optional Futu balanced mode keeps a small set of essential mainland apps direct
- Futu-related overseas cloud/CDN endpoints stay above Tencent direct rules
- WeChat, Tencent, and common mainland China apps directly
- WeChat mini program and video media resources directly
- Tencent Video, Tencent Sports, and related media traffic directly
- Meituan, Dianping, Xianyu, Alipay, Didi, and mainland stock apps directly
- HSBC apps and websites directly
- Common mainland China cloud and CDN providers directly
- Mainland China `.cn` domains and China GeoIP traffic directly
- Other traffic through the fastest available node group

## Policy Groups

The config defines one stability-first Futu group and three automatic speed groups:

- `FUTU_OVERSEAS`: uses `fallback` across explicit non-Hong-Kong overseas nodes; this favors a stable overseas exit and avoids frequent latency-based switching
- `HK_AUTO`: tests Hong Kong nodes and uses the fastest available one
- `US_AUTO`: tests US nodes and uses the fastest available one
- `FAST_AUTO`: tests common available nodes and uses the fastest one

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
they continue to use `FUTU_OVERSEAS`. Likely overseas Tencent Cloud and COS
domains used by Futu-like traffic also stay above the broader Tencent direct block.

If Futu still reports mainland China in the daily config, switch to
`shadowrocket-futu-strict.conf`. Strict mode keeps only LAN/private network
traffic direct and sends everything else through `FUTU_OVERSEAS`, which avoids
leakage through shared mainland direct rules. It is not meant for normal daily
use because mainland apps may become slower.

`shadowrocket-futu-balanced.conf` is the middle ground: it keeps local networks,
WeChat, Alipay, maps, Meituan, Dianping, and Didi direct, while sending all
other traffic through `FUTU_OVERSEAS`. It intentionally does not direct broad
cloud domains such as `myqcloud.com`, `qcloud.com`, or `tencentyun.com`.

## How To Request Updates

When asking for a new rule update, provide any of the following:

- App or website name
- Preferred route: `DIRECT`, `FUTU_OVERSEAS`, `HK_AUTO`, `US_AUTO`, or `FAST_AUTO`
- Any domain shown in Shadowrocket logs
- What feels wrong: slow loading, wrong region, login risk, payment issue, video buffering

Example:

```text
Add Xiaohongshu image/video domains as DIRECT.
```

After each update:

1. Edit `shadowrocket-auto.conf`
2. Keep specific rules above broad rules
3. Check for duplicate domains
4. Commit and push to GitHub
5. Verify the raw URL

See `UPDATE_REQUEST.md` for a copyable request template and `CHANGELOG.md` for
the update history.
