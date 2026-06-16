# Changelog

## 2026-06-16

- Created and published the maintained Shadowrocket remote config.
- Added `HK_AUTO`, `US_AUTO`, and `FAST_AUTO` url-test policy groups.
- Routed Netflix, Disney+, Prime Video, and other streaming services through `HK_AUTO`.
- Routed ChatGPT, Gemini, Claude, Perplexity, Poe, and Copilot through `US_AUTO`.
- Routed Futu / Futubull / Moomoo through `HK_AUTO`.
- Added mainland China direct routing for `.cn` and `GEOIP,CN`.
- Added direct routing for WeChat, Tencent, WeChat mini programs, WeChat video resources, Tencent Video, and Tencent Sports.
- Added direct routing for common mainland apps: Meituan, Dianping, Xianyu, Alipay, Didi, JD, Taobao, Baidu, Douyin, Bilibili, Xiaohongshu, Weibo, Zhihu, and others.
- Added direct routing for mainland cloud/CDN providers: Tencent Cloud, Alibaba Cloud, Huawei Cloud, Qiniu, UpYun, Kingsoft Cloud, Volcengine, Wangsu, and related CDN domains.
- Added direct routing for mainland stock/finance apps while keeping Futu / Futubull / Moomoo on `HK_AUTO`.
- Added this changelog and an update request template so the repo can be maintained as an ongoing project.
