# Shadowrocket Rules

Personal Shadowrocket rules for routing. This repo is meant to be updated over
time whenever a new app, website, or routing preference needs to be added.

## Subscription URL

Use this URL in Shadowrocket as the remote config:

```text
https://raw.githubusercontent.com/Jafflin/shadowrocket-rules/main/shadowrocket-auto.conf
```

Main maintained config:

- `shadowrocket-auto.conf`

Older/alternate configs are kept in the repo for reference, but the URL above is
the one to use day to day.

## Current Routing Policy

- Streaming services through the fastest available Hong Kong node
- Common YouTube and Google ad-serving domains rejected
- Overseas social apps through the fastest available Hong Kong node
- AI services through the fastest available US node
- Futu / Futubull / Moomoo through a dedicated Hong Kong-only test group
- WeChat, Tencent, and common mainland China apps directly
- WeChat mini program and video media resources directly
- Tencent Video, Tencent Sports, and related media traffic directly
- Meituan, Dianping, Xianyu, Alipay, Didi, and mainland stock apps directly
- Common mainland China cloud and CDN providers directly
- Mainland China `.cn` domains and China GeoIP traffic directly
- Other traffic through the fastest available node group

## Policy Groups

The config defines four `url-test` policy groups:

- `FUTU_HK`: tests only the four explicit Hong Kong lines against a lightweight Futu HK endpoint; excludes the ambiguous overseas-direct node
- `HK_AUTO`: tests Hong Kong nodes and uses the fastest available one
- `US_AUTO`: tests US nodes and uses the fastest available one
- `FAST_AUTO`: tests common available nodes and uses the fastest one

If your existing Shadowrocket config already has a final rule such as `FINAL` or `MATCH`, keep only one final rule and make it:

```ini
FINAL,FAST_AUTO
```

## Rule Order Principles

Keep specific rules above broad fallback rules:

1. YouTube / Google ad rejection
2. Futu / Moomoo
3. Streaming
4. AI
5. Overseas social apps
6. WeChat / Tencent and common mainland China direct rules
7. Mainland China `.cn` and `GEOIP,CN` direct rules
8. `FINAL,FAST_AUTO`

YouTube in-stream ads may share `googlevideo.com` with normal videos. The config
does not reject that domain because doing so would break playback, so domain-level
filtering cannot guarantee removal of every in-stream ad.

The Futu / Futubull / Moomoo rules must stay above all mainland direct rules so
they continue to use `FUTU_HK`.

## How To Request Updates

When asking for a new rule update, provide any of the following:

- App or website name
- Preferred route: `DIRECT`, `FUTU_HK`, `HK_AUTO`, `US_AUTO`, or `FAST_AUTO`
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
