# Shadowrocket Rules

Personal Shadowrocket rules for routing:

- Streaming services through Hong Kong nodes
- AI services through the selected US node
- Futu / Futubull / Moomoo through Hong Kong nodes
- Mainland China websites and IPs directly
- Other traffic through the fastest available node group

## Usage

Import `shadowrocket.conf` as a remote config URL, or paste the `[Rule]` section into an existing Shadowrocket config.

Current policy names:

- `Xray VMess：IEPL-香港01 - 解锁流媒体`: Hong Kong node
- `SS-Rust：IEPL | 美国01-解锁流媒体`: US node
- `SS-Rust：IEPL | 美国01-解锁流媒体`: current fastest fallback node

If your existing Shadowrocket config already has a final rule such as `FINAL` or `MATCH`, keep only one final rule and make it:

```ini
FINAL,SS-Rust：IEPL | 美国01-解锁流媒体
```

## Rule Order

Keep specific rules above the final rule:

1. Futu / Moomoo
2. Streaming
3. AI
4. Mainland China direct rules
5. `FINAL,SS-Rust：IEPL | 美国01-解锁流媒体`
