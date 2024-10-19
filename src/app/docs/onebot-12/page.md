---
title: OneBot 12 实现情况
nextjs:
  metadata:
      title: OneBot 12 实现情况
      description: OneBot 12 实现情况.
---

参见 [OneBot 12 接口定义](https://12.onebot.dev/interface/)。

以下为本项目目前实现的事件和动作。

---

## 事件（Events）

- `meta.connect` 连接
- `meta.heartbeat` 心跳
- `meta.status_update` 状态更新
- `message.private` 私聊消息
- `message.group` 群消息

## 动作（Actions）

- `get_supported_actions` 获取支持的动作列表
- `get_status` 获取运行状态
- `get_version` 获取版本信息
- `send_message` 发送消息
