# Shadowrocket Rules

Personal Shadowrocket rules for routing:

- Streaming services through Hong Kong nodes
- AI services through US nodes
- Futu / Futubull / Moomoo through Hong Kong nodes
- Other traffic through the fastest available node group

## Usage

Import or paste `shadowrocket.conf` into Shadowrocket rules.

Before using it, replace these policy names with the names in your own subscription:

- `HK`: your Hong Kong node or Hong Kong policy group
- `US`: your US node or US policy group
- `FAST`: your auto / url-test / fastest policy group

If your existing Shadowrocket config already has a final rule such as `FINAL` or `MATCH`, keep only one final rule and make it:

```ini
FINAL,FAST
```

## Rule Order

Keep specific rules above the final rule:

1. Futu / Moomoo
2. Streaming
3. AI
4. `FINAL,FAST`

