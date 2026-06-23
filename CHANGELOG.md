# Changelog

## 2026-06-23

- Added extra Futu-family domains and Hong Kong Tencent Cloud / COS endpoints to `FUTU_HK`, above the broader Tencent direct rules, to reduce Futu region misclassification.

## 2026-06-22

- Added tunnel exclusions and top-priority `DIRECT` rules for private LAN ranges, including `192.168.0.0/16`, so home routers and internal services remain reachable while Shadowrocket is connected.
- Added direct handling for `.local`, `.lan`, and `home.arpa` local names, plus link-local, CGNAT/overlay, and multicast ranges.
- Added a dedicated `FUTU_HK` url-test group for Futu / Futubull / Moomoo.
- Restricted `FUTU_HK` to four explicit Hong Kong lines and removed the ambiguous `Overseas Direct | Hong Kong` node from Futu selection.
- Changed the Futu test target to a 66-byte endpoint on the official Futu Hong Kong website and shortened the test interval to five minutes.
- Routed every Futu / Futubull / Moomoo domain and keyword rule through `FUTU_HK`.

## 2026-06-18

- Added `REJECT` rules for common YouTube and Google advertising domains.
- Kept YouTube playback domains such as `googlevideo.com` unblocked to avoid breaking normal videos.
- Documented the limitation that domain-level filtering cannot reliably distinguish every YouTube in-stream ad from normal video traffic.

## 2026-06-17

- Added Hong Kong routing for overseas social apps: WhatsApp, Facebook, LinkedIn, LINE, Telegram, Meta Horizon, Instagram, Kickstarter, Signal, Discord, and X/Twitter/XChat-related domains.
- Kept AI-oriented domains such as `x.ai` and `meta.ai` out of the Hong Kong social block so AI services continue to use `US_AUTO` where configured.

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
