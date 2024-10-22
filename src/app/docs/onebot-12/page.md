---
title: OneBot 12 实现情况
nextjs:
  metadata:
      title: OneBot 12 实现情况
      description: OneBot 12 实现情况.
---

事件和动作的详细规范，参见 [OneBot 12 接口定义](https://12.onebot.dev/interface/)。

因为 Matrix 没有对应概念，本项目没有实现两级群组接口（Guild-Channel）。

---

## 事件（Events）

### 元事件

- ✅ `meta.connect` 连接
- ✅ `meta.heartbeat` 心跳
- ✅ `meta.status_update` 状态更新

### 消息事件

- ✅ `message.private` 私聊消息
- ✅ `message.group` 群消息

### 通知事件

- ❌ `notice.friend_increase` 好友增加
- ❌ `notice.friend_decrease` 好友减少
- ❌ `notice.private_message_delete` 私聊消息删除
- ✅ `notice.group_member_increase` 群成员增加
- ✅ `notice.group_member_decrease` 群成员减少
- ❌ `notice.group_message_delete` 群消息删除


## 动作（Actions）

### 元动作

- ❌ `get_latest_events` 获取最新事件列表
- ✅ `get_supported_actions` 获取支持的动作列表
- ✅ `get_status` 获取运行状态
- ✅ `get_version` 获取版本信息

### 消息动作

- ✅ `send_message` 发送消息
- ✅ `delete_message` 删除消息

### 用户动作

- ✅ `get_self_info` 获取机器人自身信息
- ✅ `get_user_info` 获取用户信息
- ✅ `get_friend_list` 获取好友列表

### 群动作

- ❌ `get_group_info` 获取群信息
- ❌ `get_group_list` 获取群列表
- ❌ `get_group_member_info` 获取群成员信息
- ❌ `get_group_member_list` 获取群成员列表
- ❌ `set_group_name` 设置群名称
- ❌ `leave_group` 退出群
