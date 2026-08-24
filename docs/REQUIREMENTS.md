# Duskbloods Archive 需求与设计研究报告

> 版本：v1.1
> 研究日期：2026-08-24
> 目标市场：美国，英语
> 项目目录：`/Users/guojian/project/duskbloods`

## 1. 结论

这个站值得做，而且应当正面覆盖其他独立站已经做过的核心主题。竞品出现不等于这些词不能做；真正需要判断的是对方是否已经形成难以追赶的流量、内容和品牌优势。

用户补充的 AITDK 图表显示：三个站都很新，只有 `duskbloodswiki.com` 被估算出约 1.39K 月访问，其余两个站暂时为 0。它们证明了市场已经开始抢位，但没有证明赛道已经被垄断。

建议定位为：

**Duskbloods Archive — 面向美国玩家的完整游戏指南、测试后资料档案与实时状态站。**

核心承诺：

- 给出当前有效的信息，而不是重复预告片内容。
- 每条重要事实标记来源与最后核对日期。
- 明确区分“官方确认”“网络测试观察”“玩家报告”“未经证实”。
- 正面覆盖主词、发售日期、玩法、角色、网络测试等核心需求。
- 在相同主题上提供更直接的答案、更完整的官方规则和更快的更新。
- 同一搜索意图只做一个强页面，不为了抢词把同义词拆成多个薄页。

建议品牌名：**Duskbloods Archive**。初步查询时，`duskbloodsarchive.com` 没有返回已注册记录，但这不等于注册商最终保证可购买，购买前仍需再次确认。

## 2. 为什么现在做

### 2.1 美国搜索需求

Google Ads 关键词规划工具的设置为 United States、English，数据范围为 2025-08 至 2026-07。由于账号没有正在投放的广告，搜索量只显示区间，不能当作精确数字。

| 主题 | 美国月均搜索区间 | 最近三个月 | 同比 | 判断 |
| --- | ---: | ---: | ---: | --- |
| duskbloods | 10K–100K | 0% | 0% | 已形成稳定大盘，不是刚起量的新词 |
| the duskbloods | 10K–100K | 0% | 0% | 与主词属于同一页面，不单独建页 |
| duskbloods network test | 1K–10K | 新增爆发 | 新增爆发 | 当前最强时效入口 |
| duskbloods release date | 1K–10K | -90% | 0% | 需求仍大，但波动明显 |
| duskbloods characters | 100–1K | 0% | 0% | 可持续扩展的资料页 |
| duskbloods gameplay | 100–1K | 0% | 0% | 官方玩法指南发布后内容空间扩大 |
| duskbloods switch 2 | 100–1K | -90% | 0% | 与平台、独占、在线要求合并处理 |
| duskbloods multiplayer | 10–100 | 0% | 0% | 不单独建薄页，归入玩法总览 |
| duskbloods weapons | 10–100 | 0% | 0% | 先做栏目，等正式资料增长后拆分 |

注意：Google Ads 显示的“竞争低”只代表广告主竞争，不代表自然搜索容易。哥飞 SEO Agent 对主词给出的难度约为 49.6，属于中等；而目前搜索结果已经比早期更加拥挤。

### 2.2 用户补充的竞品图表

三张图来自 AITDK 的 2026 年 7 月流量估算页。它们适合判断竞品年龄和发展方向，但不是竞品自己的访问统计。

| 域名 | 图表显示的建站日期 | 图表显示的站龄 | 估算月访问 | 可用信号 |
| --- | --- | ---: | ---: | --- |
| duskbloodswiki.com | 2026-05-20 | 95 天 | 1.39K | 估算访问从 5 月到 7 月连续上涨 |
| duskbloodsguide.com | 2026-08-08 | 15 天 | 0 | 站点太新，工具还没有检测到流量 |
| duskbloods.net | 2026-08-20 | 3 天 | 0 | 刚上线，尚不能据此判断失败或成功 |

`duskbloodswiki.com` 图表还列出 `duskbloods` 77K、`the duskbloods` 67K、`duskbloods release date` 9K，但对应的 Traffic 一栏均为 0。这些词量可作为市场方向参考，不能直接理解为该站已经从这些词获得流量，也不能替代我们在 Google Ads 中限定“美国 + 英语”得到的数据。

这组图表带来的新判断：

1. 三个对手都是新站，尚未形成明显的时间和品牌壁垒。
2. `duskbloodswiki.com` 已出现上升信号，说明现在需要加快，而不是退让。
3. 0 访问可能代表工具尚未采集到数据，不能等同于真实无人访问。
4. 我们可以抢相同主题，但必须用更好的页面完成度和内部连接去抢，而不是简单换标题重写一遍。

### 2.3 当前事件窗口

官方网络测试于美国时间 2026-08-21 至 2026-08-23 分五场进行，最多八名玩家同场。首场测试出现登录和连接问题，随后形成了大量关于服务器状态、登录失败、测试是否延期、错误如何上报的搜索需求。

因此首发不能只写“如何报名”。报名已经结束，真正需要的是：

1. 测试发生了什么。
2. 哪些问题是官方承认的。
3. 玩家现在还能做什么。
4. 正式版已经确认了哪些规则。
5. 哪些发布日期说法已被否认。

## 3. 官方已确认的产品事实

以下内容可以作为网站的事实底座：

- 游戏由 FromSoftware 开发，计划于 2026 年推出。
- 目前确认是 Nintendo Switch 2 独占。
- 核心是最多八人的在线多人战斗。
- 玩家扮演 Bloodsworn，通过探索、击败敌人、与其他玩家对抗或暂时结盟来积累 Virtue。
- 比赛分阶段推进，最终由领先玩家进入结局对决。
- 网络测试包含 Standard、No Alliances、Bloodbound Alliances 三种匹配规则。
- 可与 Kin 建立契约；网络测试版本包含八种 Kin。
- 官方玩法指南确认了 Alliances、Sigils、Powers of Blood、区域事件、武器强化、Kin 成长、即时移动等系统。
- 正式版准确发售日尚未公布；“2026-09-24”已经被 Nintendo 否认，不能写成确定日期。

首版所有事实页面都应回链至 Nintendo、FromSoftware 或官方测试页面。

## 4. 美国玩家的核心需求

### 4.1 第一类：现在就要答案

- 网络测试是否结束、下一场是否存在。
- Failed to log in 错误发生了什么。
- 官方有没有回应、是否需要继续重试。
- 如何提交崩溃或连接问题。
- 测试数据是否会继承到正式版。
- 是否还能报名或取得下载码。

### 4.2 第二类：了解游戏是否适合自己

- 是否只有多人模式。
- 是否支持单人内容。
- 是否必须购买 Nintendo Switch Online。
- 是否真的是 Switch 2 独占。
- PvPvE 一局如何进行。
- 是合作、对抗，还是两者都有。

### 4.3 第三类：准备正式版

- 已确认的 Bloodsworn、能力和武器。
- Kin、Virtue、Sigil、Alliance 分别是什么。
- 每种规则怎样获胜。
- 发售日期与预购状态。
- 正式版更新、补丁、服务器状态。

## 5. 竞品盘面与竞争策略

### 5.1 已出现的主要独立站

#### duskbloodsguide.com

图表信号：2026-08-08 建站，约 15 天，AITDK 暂未估算出访问量。

优点：

- 已覆盖首页、网络测试、玩法、角色、武器、Boss、流程、发售日期等主题。
- 明确标注官方来源和核对日期。
- 不轻易虚构尚未公开的 Boss、武器数据。

弱点：

- 内容核对日期仍停留在 2026-08-14，未充分承接网络测试实际发生后的变化。
- 结构偏静态资料库，对服务器事故、官方回应、测试结果的快速更新不足。

#### duskbloodswiki.com

图表信号：2026-05-20 建站，约 95 天，AITDK 估算月访问约 1.39K，并呈上升趋势。这是三个站中目前最值得持续观察的对手。

优点：

- 页面范围广，覆盖故事、角色、地图、武器、新闻和投稿。
- 具备百科式扩展结构。

弱点：

- 混入估价、推测、未证实名称和较多笼统描述。
- 信息密度大，但“事实可信度”和“当前是否有效”不够清楚。

#### duskbloods.net

图表信号：2026-08-20 建站，约 3 天，AITDK 暂未估算出访问量。

优点：

- 域名短，首页视觉和基础信息完整。
- 覆盖玩法、角色、图片、测试、发售日期和常见问题。

弱点：

- 偏宣传式首页，实时状态和来源追踪不够突出。
- 部分说法需要进一步核对，容易把访谈、推测和正式确认混在一起。

### 5.2 哪些内容正面竞争

以下主题即使竞品已经做过，我们也必须做，而且要争取成为更好的答案：

- `duskbloods` / `the duskbloods`：统一由首页承接。
- `duskbloods release date`：做官方状态、误传澄清和变化时间线。
- `duskbloods gameplay`：把官方长篇规则整理为易理解的一局流程。
- `duskbloods characters`：使用搜索者熟悉的 Characters 命名，同时解释 Bloodsworn。
- `duskbloods network test`：测试结果、时间、问题、官方回应和后续影响。
- `duskbloods weapons`：覆盖官方确认的武器、强化和 Powers of Blood，不虚构数值。
- Switch 2、多人、单人、会员要求：合并为购买前判断页。

竞争方式不是避开关键词，而是做到：答案更快出现、事实更新时间更近、结构更清楚、来源更容易检查、相关页面连接更完整。

### 5.3 仍然不做什么

- 不制作没有实质内容的 Boss、地图、武器页面等待未来填充。
- 不把预告片画面猜测写成角色名称或数值。
- 不发布泄露素材或复述未经确认的发布日期。
- 不复制官方图片库做“壁纸站”。
- 不把 `duskbloods` 和 `the duskbloods` 拆成两个互相竞争的页面。
- 不给同一个问题批量制作轻微改写的页面。

### 5.4 真正的差异化

我们不靠避开竞品来差异化，而是在完整覆盖核心主题的基础上，增加一个持续更新的 **Current Status Desk**：

- 当前官方状态。
- 最近一次已确认更新。
- 网络测试问题时间线。
- 下一件值得关注的官方事件。
- 事实变化记录。

每篇页面顶部固定显示：

- Status：Confirmed / Test-build only / Player-reported / Unconfirmed。
- Last checked：最后核对时间。
- Primary source：主要来源。
- What changed：本次更新内容。

这是一层质量和信任优势，不是内容范围限制。首页既要承接大词，也要把用户送往玩法、角色、发售日期、网络测试和系统说明等完整内容。

## 6. 首发信息架构

### 6.1 必须上线的 10 个页面

| 路径建议 | 页面标题 | 核心任务 | 优先级 |
| --- | --- | --- | --- |
| `/` | The Duskbloods: Confirmed Details After the Network Test | 承接主词，展示当前状态并分流 | P0 |
| `/network-test/` | The Duskbloods Network Test: Results, Schedule and What Happened | 覆盖测试时间、结果、官方回应 | P0 |
| `/network-test/errors/` | Duskbloods Login and Server Errors: What Is Confirmed | 解决登录失败、连接问题和上报方式 | P0 |
| `/gameplay/` | How The Duskbloods Works: Phases, Virtue, Alliances and Final Battle | 用清晰流程解释官方规则 | P0 |
| `/release-date/` | The Duskbloods Release Date: Confirmed 2026 Status | 只呈现官方状态，并解释被否认的日期 | P1 |
| `/characters/` | The Duskbloods Characters: Bloodsworn, Skills and Abilities | 正面承接 characters，同时解释 Bloodsworn | P0 |
| `/weapons-and-powers/` | The Duskbloods Weapons, Upgrades and Powers of Blood | 覆盖已确认武器系统与能力，不编造数据 | P1 |
| `/kin/` | The Duskbloods Kin Guide: Summoning, Types and Upgrades | 解释八种测试版 Kin 与三类召唤圈 | P1 |
| `/systems/` | Virtue, Alliances and Sigils in The Duskbloods | 合并三个强相关系统，避免拆成薄页 | P1 |
| `/switch-2/` | Is The Duskbloods Only on Switch 2? Online and Solo Details | 覆盖独占、会员、多人和单人问题 | P1 |

### 6.2 第二阶段页面

- `/rules/`：当三种匹配规则获得更多独立搜索后，从玩法页拆出。
- `/tips/`：只基于实际测试和官方规则写可验证技巧。
- `/updates/`：官方更新日志与事实变化记录。
- `/lore/`：当官方故事资料足够支撑独立页面后创建。
- `/faq/`：只有在常见问题超过各主题页可自然容纳的范围后再创建。

### 6.3 暂缓页面

- Boss 列表。
- 完整地图。
- 正式版流程攻略。
- 最佳角色排行。
- 最强武器排行。
- Build 生成器。
- 倒计时页面。

这些内容目前缺少可靠资料，提前做只会形成薄页面或错误信息。

## 7. 机会评分

因为这是新站，目前没有自己的 Google Search Console 数据，以下评分主要依赖美国关键词工具、当前搜索结果、官方资料和事件时效性。上线后必须用真实曝光与点击重新排序。

| 主题 | 需求证据 | 进入机会 | 与站点匹配 | 内容空位 | 时效价值 | 扣分 | 总分 | 决策 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 网络测试结果与状态 | 1 | 3 | 5 | 4 | 5 | -3 | 15 | 立即创建 |
| 登录和服务器错误 | 1 | 3 | 5 | 5 | 4 | -3 | 15 | 立即创建并持续更新 |
| 官方玩法规则解释 | 1 | 2 | 5 | 4 | 4 | 0 | 16 | 立即创建 |
| 发售日期与被否认传闻 | 1 | 2 | 5 | 4 | 4 | 0 | 16 | 创建一个权威状态页 |
| Bloodsworn 与能力 | 1 | 2 | 5 | 4 | 4 | 0 | 16 | 创建并逐步扩展 |
| Kin、Virtue、Sigils | 1 | 3 | 5 | 4 | 4 | 0 | 17 | 首发覆盖，但按意图合并 |
| 武器、强化与 Powers | 1 | 2 | 5 | 4 | 3 | 0 | 15 | 首发创建一个完整页面 |
| Switch 2、在线与单人 | 1 | 2 | 5 | 4 | 3 | 0 | 15 | 合并为购买前判断页 |
| 泛主词首页 | 1 | 2 | 5 | 4 | 4 | 0 | 16 | 正面竞争，并承担全站分流 |
| 空 Boss/地图/Build 页 | 0 | 1 | 3 | 1 | 2 | -5 | 2 | 拒绝 |

## 8. 页面设计要求

### 8.1 首页首屏

目标：五秒内回答“这是什么站、现在发生了什么、哪里能看到可靠信息”。

建议英文文案：

- 品牌：`DUSKBLOODS ARCHIVE`
- H1：`The Duskbloods: What We Know After the Network Test`
- 说明：`Confirmed details, test findings, and the road to release—without rumor presented as fact.`
- 主按钮：`Read the network test recap`
- 次入口：`Explore confirmed game details`
- 免责声明：`Unofficial fan guide · Sources linked on every page`

首屏下方立即出现三个事实：

- Platform — Nintendo Switch 2
- Developer — FromSoftware
- Release — 2026

不要放虚构访问量、倒计时、评分、社群人数或“最完整攻略”等无法证明的口号。

### 8.2 Current Status Desk

首页第二屏必须包含：

- 当前状态：Network test concluded / official follow-up pending。
- 最近更新：日期、事件、来源。
- 已知问题：登录失败、连接不稳定、官方上报入口。
- 下一步：等待官方测试总结、补测或正式发售信息。

状态要用文字和颜色双重表达，不能只靠红绿颜色。

### 8.3 文章页

每篇文章采用统一结构：

1. 直接答案。
2. 当前状态框。
3. 已确认事实。
4. 仍未知的内容。
5. 时间线或步骤。
6. 官方来源。
7. 变化记录。
8. 相关页面。

文章不使用大段背景故事拖延答案。

## 9. 视觉方向

建议风格：**暗色编辑档案，而不是仿官方游戏官网。**

- 背景：近黑色，轻微纸张或石墨颗粒。
- 正文：骨白色，保证长文阅读清晰。
- 强调色：克制的暗血红，只用于主要操作和重要状态。
- 分隔：细银灰线，少用圆角卡片。
- 标题：高对比衬线字体，像高级游戏杂志。
- 正文与界面：清晰的无衬线字体。
- 布局：大留白、开放式分区、时间线和表格优先，不堆卡片墙。
- 图片：后续优先制作原创氛围图；如使用官方截图，必须确认使用方式并标明来源。

禁止：

- 模仿官方标志。
- 复制官方首页布局。
- 霓虹网格、过度发光、廉价血滴装饰。
- 每个内容块都套大圆角卡片。
- 用 AI 图冒充游戏截图。

原计划使用视觉生成服务制作完整设计稿，但 2026-08-24 连续三次返回服务错误。报告阶段不受影响；正式实现前必须补齐首页首屏、状态区和文章模板三张设计稿，再开始编码。

## 10. 内容规则

### 10.1 四级证据标签

1. **Confirmed**：Nintendo、FromSoftware、官方活动站明确发布。
2. **Test-build only**：网络测试版官方指南确认，但不保证正式版不变。
3. **Player-reported**：多位玩家或媒体一致报告，但官方未确认。
4. **Unconfirmed**：泄露、推测、单一消息源；默认不进入标题和摘要。

### 10.2 更新要求

- 时效页面在测试期间每天至少核对两次。
- 常规事实页每周核对一次。
- 重要变化当天更新，并记录旧说法为何被替换。
- 发布日期页面不得把商店占位日期、媒体误报或泄露写成确定日期。
- 任何“最佳”“全部”“完整”标题必须有足够材料支持。

## 11. 功能需求

### 首版必须有

- 清晰的桌面和手机导航。
- 页面最后核对日期。
- 事实状态标签。
- 来源列表。
- 更新历史。
- 相关文章链接。
- 可被搜索引擎发现的站点地图和页面说明。
- About、Contact、Privacy、Editorial Policy、Corrections 页面。
- 无障碍键盘操作、清晰焦点、足够文字对比度。

### 首版不需要

- 用户账号。
- 评论系统。
- 论坛。
- 数据库后台。
- 复杂全文搜索。
- 自动抓取其他站内容。
- 广告位。

先把内容可信度和页面速度做好，再考虑社区与商业化。

## 12. 项目完成标准

研究阶段完成标准：

- 美国需求与关键词范围已核对。
- 官方产品事实与网络测试规则已核对。
- 主要独立竞品及用户补充的第三方流量图表已检查。
- 正面竞争范围、质量差异、首发页面、内容边界和视觉方向已确定。
- 风险和后续测量方案已写清楚。

首版网站未来的完成标准：

- 10 个首发页面都有真实内容，不存在“coming soon”薄页。
- 所有关键事实可追溯到来源。
- 手机和桌面页面都完整可读。
- 导航、内部链接、来源链接全部实际点击检查。
- 页面标题、摘要、主标题和地址互不冲突。
- 本地检查、代码提交、部署和线上验证分别确认，不能混为一谈。

## 13. 14 / 28 / 60 天观察计划

### 第 14 天

- 检查首页和 10 个首发页面是否被发现和收录。
- 检查是否出现 `network test error`、`gameplay guide`、`release date` 等第一批曝光。
- 修正未被发现的页面链接和站点地图问题。

### 第 28 天

- 按美国查询词重新排序内容优先级。
- 对有曝光但点击低的页面改进标题和开头答案。
- 只对已经出现真实搜索需求的主题新增页面。

### 第 60 天

- 判断网络测试内容是否已衰退。
- 把有效流量承接到玩法、Bloodsworn、Kin、规则和发售状态等长期页面。
- 合并没有曝光的薄内容，不为了页面数量继续扩张。

## 14. 风险

| 风险 | 影响 | 应对 |
| --- | --- | --- |
| 同类独立站已经上线 | 核心词需要正面竞争 | 完整覆盖相同主题，用更新速度、事实质量和内部连接胜出 |
| 第三方流量估算失真 | 错判竞品强弱 | 只把 AITDK 当方向信号，上线后以自己的真实搜索数据为准 |
| 测试热度快速消退 | 短期页面流量下降 | 从测试页导向长期玩法资料 |
| 官方信息随时变化 | 旧内容误导玩家 | 显示核对日期并维护更新记录 |
| 发布日期传闻 | 容易获得点击但损害信任 | 只写官方 2026 状态，专门解释被否认日期 |
| 官方图片和商标 | 可能引发版权或混淆 | 明确非官方身份，优先原创视觉，谨慎使用截图 |
| 首发页面增加到 10 个 | 可能形成空页和重复内容 | 每页必须有独立意图和足够官方材料，不达标就合并而非硬发 |

## 15. 建议实施顺序

1. 再次确认并购买域名。
2. 补齐三张视觉设计稿：首页首屏、状态区、文章模板。
3. 建立网站基础结构与设计系统。
4. 第一批完成首页、网络测试、错误页、玩法和发售日期。
5. 第二批完成 Characters、Weapons and Powers、Kin、Systems、Switch 2 页面。
6. 对 10 个页面做重复意图检查，必要时合并。
7. 做手机与桌面检查。
8. 上线后提交站点地图并记录第 0 天数据。

## 16. 主要证据来源

### 官方来源

- [Nintendo of America 产品页](https://www.nintendo.com/us/store/products/the-duskbloods-switch-2/)
- [The Duskbloods 官方网络测试页（美国英语）](https://campaign.theduskbloods.jp/p/event/networktest/?region=the_americas&locate=US&lang=en)
- [官方网络测试玩法指南](https://campaign.theduskbloods.jp/p/event/networktest/gameplayguide/?region=the_americas&locate=US&lang=en)
- [Nintendo of America 网络测试报名错误支持页](https://en-americas-support.nintendo.com/app/answers/detail/a_id/71792/~/error-received-while-applying-to-the-duskbloods-network-test)
- [FromSoftware 首次公布说明](https://www.fromsoftware.jp/ww/pressrelease/20250402_theduskbloods_debut.html)

### 当前事件与搜索结果核对

- [Eurogamer：Nintendo 否认 9 月 24 日发售日期](https://www.eurogamer.net/the-duskbloods-release-date-nintendo-denied)
- [Video Games Chronicle：首场网络测试登录问题](https://www.videogameschronicle.com/news/from-software-responds-as-the-duskbloods-first-network-test-session-is-marred-by-failed-to-log-in-errors/)
- [Eurogamer：网络测试连接问题与提前结束](https://www.eurogamer.net/the-duskbloods-network-test-connection-problems-fromsoftware)

### 竞品

- [duskbloodsguide.com](https://duskbloodsguide.com/)
- [duskbloodswiki.com](https://duskbloodswiki.com/)
- [duskbloods.net](https://duskbloods.net/)

### 用户补充的第三方图表

- [AITDK：duskbloodswiki.com，2026-07](evidence/aitdk-duskbloodswiki-com-2026-07.png)
- [AITDK：duskbloodsguide.com，2026-07](evidence/aitdk-duskbloodsguide-com-2026-07.png)
- [AITDK：duskbloods.net，2026-07](evidence/aitdk-duskbloods-net-2026-07.png)

---

最终建议：**继续做，并正面抢主词、发售日期、玩法、角色、网络测试、武器和平台等核心内容。三个对手都很新，尚未形成不可追赶的优势。Duskbloods Archive 的差异不应是“少做内容”，而应是“同样的主题做得更完整、更及时、更容易核对”。首版规划 10 个有独立需求的高质量页面，同时保留实时状态、事实标签和更新记录作为全站质量标准。**
