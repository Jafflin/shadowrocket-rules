# Shadowrocket Rules

Personal Shadowrocket rules for routing:

- Streaming services through the fastest available Hong Kong node
- AI services through the fastest available US node
- Futu / Futubull / Moomoo through Hong Kong nodes
- WeChat, Tencent, and common mainland China apps directly
- WeChat mini program and video media resources directly
- Tencent Video, Tencent Sports, and related media traffic directly
- Common mainland China cloud and CDN providers directly
- Mainland China `.cn` domains and China GeoIP traffic directly
- Other traffic through the fastest available node group

## Usage

Import `shadowrocket-auto.conf` as a remote config URL.

The config defines three `url-test` policy groups:

- `HK_AUTO`: tests Hong Kong nodes and uses the fastest available one
- `US_AUTO`: tests US nodes and uses the fastest available one
- `FAST_AUTO`: tests common available nodes and uses the fastest one

If your existing Shadowrocket config already has a final rule such as `FINAL` or `MATCH`, keep only one final rule and make it:

```ini
FINAL,FAST_AUTO
```

## Rule Order

Keep specific rules above the final rule:

1. Futu / Moomoo
2. Streaming
3. AI
4. WeChat / Tencent and common mainland China direct rules
5. Mainland China `.cn` and `GEOIP,CN` direct rules
6. `FINAL,FAST_AUTO`
