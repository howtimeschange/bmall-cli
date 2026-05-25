# Bmall Brand Groups

生成时间：2026-05-25 14:40:56 CST

来源命令：

```bash
bmall company groups --json
```

来源上下文：`profile=semir-report`，`env=prod`，`accountType=iam`。

## 快速切换

优先用人可读品牌名或编码：

```bash
bmall company switch-group --brand 巴拉 --json
bmall company switch-group --brand C328 --json
```

如果品牌名匹配不唯一，再用精确 `groupId`：

```bash
bmall company switch-group --group-id <groupId> --json
```

## 可用品牌组

| groupName | groupCode | groupId | 常用识别词 |
| --- | --- | --- | --- |
| 巴拉巴拉 | C328 | `0` | 巴拉、巴拉巴拉、bala、balabala、C328 |
| MOP | C361 | `30963c13eeb04c9a8b21f141e3a188ea` | MOP、mop、C361 |
| 森马 | C326 | `5540c8f30a114bf8992c555cc57d9b26` | 森马、semir、C326 |
| ASICS | C333 | `667243d205974f779f3a9ceb364acdd9` | ASICS、asics、亚瑟士、C333 |
| PUMAKIDS | C335 | `85126a2658ba4d0b9b7f40e4d40bd2b9` | PUMAKIDS、pumakids、PUMA、puma、C335 |
| MiniBala | C323 | `c4613ad70ac649f389baf3b8793946f1` | MiniBala、minibala、迷你巴拉、C323 |
| 森马儿童 | C325 | `f931567b8752484e8e9ffbc35bc57cea` | 森马儿童、semirkids、C325 |

## 注意事项

- 这份清单来自当前账号可见品牌组，不代表所有系统品牌全集。
- 巴拉巴拉的 IAM `groupId` 当前是字符串 `0`，不要把它当成缺失值。
- 切换品牌后，CLI 会清空 profile 中旧的 `companyId/companyName`；需要操作具体门店时，再执行 `bmall company list --json` 和 `bmall company switch --company-id <companyId> --json`。
