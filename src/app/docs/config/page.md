---
title: 配置
nextjs:
  metadata:
      title: 配置
      description: Matrix OneBot 示例配置文件.
---

未来程序更完善后会有详细配置教程

---

```toml
full_user_id = "@username:example.org" # 帐号
password = 'your_password' # 密码
server_domain = "" # 服务器地址，留空将使用 full_user_id 的地址
lang_file = "zh-cn.toml"

[onebot]
query_self_event_interval_secs = 1

[meta]
log_level = "info" # 日志级别，可选：trace, debug, info, warn, error
log_path = "" # 日至文件保存路径

[onebot_conn]
# http = []
# http_webhook = []
websocket = []
websocket_rev = []

[[onebot_conn.http]]
host = "127.0.0.1"
port = 5700
access_token = "token" # 默认为空
event_enable = true # 是否推送事件
event_buffer_size = 16 # 事件推送缓存区大小

[[onebot_conn.http_webhook]]
url = "http://127.0.0.1:5701/"
access_token = "token" # 默认为空
timeout = 4

# [[onebot.websocket]]
# host = "127.0.0.1"
# port = 8844
# access_token = "token" # 默认为空

# [[onebot.websocket_rev]]
# url = "ws://127.0.0.1:8844"
# access_token = "token" # 默认为空
# reconnect_interval = 4

[onebot_conn.heartbeat]
enabled = true
interval = 4
```
