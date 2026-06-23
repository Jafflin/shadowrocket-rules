# Update Request Template

Use this template when asking for routing changes.

```text
App or website:
What I want:
Preferred route:
Symptoms:
Domains from Shadowrocket logs:
Notes:
```

## Preferred Routes

- `DIRECT`: Mainland China apps, payment, shopping, food delivery, maps, ride hailing, domestic video, domestic CDN
- `FUTU_OVERSEAS`: Futu / Futubull / Moomoo only; uses a stability-first non-Hong-Kong overseas fallback group
- `HK_AUTO`: Overseas streaming and social services that should appear in Hong Kong
- `US_AUTO`: ChatGPT, Gemini, Claude, Perplexity, Poe, Copilot, and other AI services
- `FAST_AUTO`: General fallback for traffic that does not need a fixed region

## Examples

```text
App or website: Tencent Video
What I want: Make playback and login direct
Preferred route: DIRECT
Symptoms: Video starts slowly
Domains from Shadowrocket logs: qqlive.com, video.qq.com
Notes:
```

```text
App or website: Futu
What I want: Always use a non-mainland overseas exit
Preferred route: FUTU_OVERSEAS
Symptoms: App says I am in mainland China
Domains from Shadowrocket logs: futunn.com
Notes: Do not let GEOIP,CN,DIRECT override it
```
