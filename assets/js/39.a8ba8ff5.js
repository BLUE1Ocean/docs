(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{419:function(v,_,l){"use strict";l.r(_);var i=l(29),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"应用观察者模式思想"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#应用观察者模式思想"}},[v._v("#")]),v._v(" 应用观察者模式思想")]),v._v(" "),l("blockquote",[l("p",[v._v("本文的目标对象，是已经有一定地图工坊编写经验的朋友。如果你并不熟悉，建议你阅读其他教程。")])]),v._v(" "),l("h2",{attrs:{id:"引言​"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#引言​"}},[v._v("#")]),v._v(" 引言​")]),v._v(" "),l("p",[v._v("相对于一门编程语言来说，地图工坊的功能其实非常基础。它没有函数，更别提类了。不过，不知道你是否注意到，持续事件有一个特性：它可以持续等待，直到条件为真。")]),v._v(" "),l("p",[v._v("编程里面有一个“设计模式”，叫做“观察者模式”。它的意思是：当一个对象变化时，会自动通知依赖它的对象。")]),v._v(" "),l("p",[v._v("看到这里，不知道你有没有觉得，持续事件和观察者模式是有一定相似之处的：它们都是在“等”一个东西。")]),v._v(" "),l("h2",{attrs:{id:"简化规则"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#简化规则"}},[v._v("#")]),v._v(" 简化规则")]),v._v(" "),l("p",[v._v("这个东西有什么用？我们可以借此来简化规则的编写。例如，我们要做一个等级系统，当经验达到100的时候就升一级，死亡的时候就掉50%经验，如果经验是负了，就掉一级。")]),v._v(" "),l("p",[v._v("我们的经验来源可能不止一种，例如在RPG模式里，我们击杀敌人可以获得经验，摧毁防御塔也可以获得经验。当我们用传统办法写规则的时候，我们就需要：")]),v._v(" "),l("ul",[l("li",[v._v("击杀敌人：增加经验，如果经验>100，增加等级，修改等级BUFF")]),v._v(" "),l("li",[v._v("摧毁防御塔：增加经验，如果经验>100，增加等级，修改等级BUFF")]),v._v(" "),l("li",[v._v("死亡：减少经验，如果经验<0，减少等级，修改等级BUFF")])]),v._v(" "),l("p",[v._v("你有没有觉得，这是一个繁琐的过程？当你需要修改等级BUFF的时候，你需要修改很多条规则。")]),v._v(" "),l("p",[v._v("我们再分析一下我们的逻辑：实际上，等级什么时候会增加，增加会有什么效果，这并不是我们的“死亡”事件该处理的。")]),v._v(" "),l("p",[v._v("正确的做法是：有一个东西在“看着”经验，当它大于100时，就代表升级了。当它小于100时，就代表降级了。我们将其解耦后，规则就变成了：")]),v._v(" "),l("ul",[l("li",[v._v("击杀敌人：增加经验")]),v._v(" "),l("li",[v._v("摧毁防御塔：增加经验")]),v._v(" "),l("li",[v._v("死亡：减少经验")]),v._v(" "),l("li",[v._v("观察者1：如果经验>100，增加等级，修改等级BUFF")]),v._v(" "),l("li",[v._v("观察者2：如果经验<0，减少等级，修改等级BUFF")])]),v._v(" "),l("p",[v._v("换做游戏内规则，即是：（假设用玩家变量A表示等级，玩家变量B表示经验）")]),v._v(" "),l("ul",[l("li",[v._v("击杀敌人：修改玩家变量(事件玩家, B, 加, 50)")]),v._v(" "),l("li",[v._v("摧毁防御塔：修改玩家变量(事件玩家, B, 加, 30)")]),v._v(" "),l("li",[v._v("死亡：修改玩家变量(事件玩家, B, 减, 50)")])]),v._v(" "),l("p",[l("strong",[v._v("观察者1")])]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 每名玩家")]),v._v(" "),l("li",[v._v("条件：玩家变量(事件玩家, B) >= 100")]),v._v(" "),l("li",[v._v("动作：\n"),l("ul",[l("li",[v._v("修改玩家变量(事件玩家, B, 减, 100)")]),v._v(" "),l("li",[v._v("修改玩家变量(事件玩家, A, 加, 1)")]),v._v(" "),l("li",[v._v("// 这里写等级变化的逻辑")]),v._v(" "),l("li",[v._v("等待(0.016, 无视条件)")]),v._v(" "),l("li",[v._v("如条件为“真”则循环")])])])]),v._v(" "),l("p",[l("strong",[v._v("观察者2")])]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 每名玩家")]),v._v(" "),l("li",[v._v("条件：玩家变量(事件玩家, B) < 0")]),v._v(" "),l("li",[v._v("动作：\n"),l("ul",[l("li",[v._v("修改玩家变量(事件玩家, B, 加, 100)")]),v._v(" "),l("li",[v._v("修改玩家变量(事件玩家, A, 减, 1)")]),v._v(" "),l("li",[v._v("// 这里写等级变化的逻辑")]),v._v(" "),l("li",[v._v("等待(0.016, 无视条件)")]),v._v(" "),l("li",[v._v("如条件为“真”则循环")])])])]),v._v(" "),l("p",[v._v("注意：")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("一定要注意逻辑设计上不能存在死循环，例如上面的例子里，观察者2的条件不能写“玩家变量 <= 100”。因为当玩家经验=100时，观察者1会将其变为0，就会触发观察者2。而观察者2又会再次触发观察者1。这就导致了死循环的出现。")])]),v._v(" "),l("li",[l("p",[v._v("我们在两个观察者最后都加上了循环，目的是打破条件满足的情况。考虑这种情况：当我们一次性给玩家增加300点经验时，按理来说，应该让玩家升3级，但因为我们没有循环，玩家升了一级就结束了，并且后续增加经验，也不会再触发升级。只有当条件满足被打破时，条件再次满足，才会再次触发该规则。")])])]),v._v(" "),l("h2",{attrs:{id:"模拟函数调用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#模拟函数调用"}},[v._v("#")]),v._v(" 模拟函数调用")]),v._v(" "),l("p",[v._v("编程总是免不了函数，但目前为止OW中没有函数。但是，我们可以使用上面的方法，来模拟函数。")]),v._v(" "),l("p",[v._v("还是用上面的例子。你会发现我们的等级变化逻辑还是写了两遍。我们能不能再将其独立成一个规则？当然是可以的。我们变化的目标是玩家，因此我们需要使用一个玩家变量，来标记我们需不需要对此玩家执行等级变化逻辑。假设我们使用玩家变量C。")]),v._v(" "),l("p",[v._v("首先，在游戏初始化的时候，将其设置为假。我们的规则就可以变成：")]),v._v(" "),l("p",[l("strong",[v._v("观察者1")])]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 每名玩家")]),v._v(" "),l("li",[v._v("条件：玩家变量(事件玩家, B) >= 100")]),v._v(" "),l("li",[v._v("动作：\n"),l("ul",[l("li",[v._v("修改玩家变量(事件玩家, B, 减, 100)")]),v._v(" "),l("li",[v._v("修改玩家变量(事件玩家, A, 加, 1)")]),v._v(" "),l("li",[v._v("等待(0.016, 无视条件)")]),v._v(" "),l("li",[v._v("如条件为“真”则循环")]),v._v(" "),l("li",[v._v("设置玩家变量(事件玩家, C, 真)")])])])]),v._v(" "),l("p",[l("strong",[v._v("观察者2")])]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 每名玩家")]),v._v(" "),l("li",[v._v("条件：玩家变量(事件玩家, B) < 0")]),v._v(" "),l("li",[v._v("动作：\n"),l("ul",[l("li",[v._v("修改玩家变量(事件玩家, B, 加, 100)")]),v._v(" "),l("li",[v._v("修改玩家变量(事件玩家, A, 减, 1)")]),v._v(" "),l("li",[v._v("等待(0.016, 无视条件)")]),v._v(" "),l("li",[v._v("如条件为“真”则循环")]),v._v(" "),l("li",[v._v("设置玩家变量(事件玩家, C, 真)")])])])]),v._v(" "),l("p",[l("strong",[v._v("等级变化规则")])]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 每名玩家")]),v._v(" "),l("li",[v._v("条件：玩家变量(事件玩家, C) == 真")]),v._v(" "),l("li",[v._v("动作：\n"),l("ul",[l("li",[v._v("// 这里写等级变化的逻辑")]),v._v(" "),l("li",[v._v("设置玩家变量(事件玩家, C, 假)")])])])]),v._v(" "),l("p",[v._v("注意：这里只是模拟函数调用，但实际上它比函数还是少很多东西。因此，并不是所有情况都适合这样写。")]),v._v(" "),l("h2",{attrs:{id:"延伸-地图适配"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#延伸-地图适配"}},[v._v("#")]),v._v(" 延伸：地图适配")]),v._v(" "),l("p",[v._v("有的代码明明用到了地图坐标，但还是可以兼容很多张地图，怎么做到的呢？判断地图的代码在"),l("a",{attrs:{href:"https://www.owmod.net/work/view/44",target:"_blank",rel:"noopener noreferrer"}},[v._v("owmod.net/44"),l("OutboundLink")],1),v._v("。但是，当我知道是什么地图后，怎么做后面的事呢？当然是借鉴上面的方法了。例如，我们希望给几张地图放上一些“道具”：")]),v._v(" "),l("p",[l("strong",[v._v("地图检测（最新代码请参见上面的链接）")])]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 全局")]),v._v(" "),l("li",[v._v("条件：无")]),v._v(" "),l("li",[v._v("动作：\n"),l("ul",[l("li",[v._v("设置全局变量(A, 取整(X方向分量(最近的可行走位置(矢量(100, 100, 100))), 上))")]),v._v(" "),l("li",[v._v("根据条件跳过(比较(目标位置(0), ==, 无), 1)")]),v._v(" "),l("li",[v._v("修改全局变量(A, 加, 加(取整(X方向分量(目标位置(0)), 上), 300))")]),v._v(" "),l("li",[v._v("设置全局变量(B, 空数组)")]),v._v(" "),l("li",[v._v("设置全局变量(C, 假)")])])])]),v._v(" "),l("p",[l("strong",[v._v("阿育陀耶")])]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 全局")]),v._v(" "),l("li",[v._v("条件：全局变量(A) == 42")]),v._v(" "),l("li",[v._v("动作：\n"),l("ul",[l("li",[v._v("修改全局变量(B, 添加至数组, 矢量(0, 0, 0))")]),v._v(" "),l("li",[v._v("修改全局变量(B, 添加至数组, 矢量(10, 10, 10))")]),v._v(" "),l("li",[v._v("修改全局变量(B, 添加至数组, 矢量(20, 20, 20))")]),v._v(" "),l("li",[v._v("设置全局变量(C, 真)")])])])]),v._v(" "),l("p",[l("strong",[v._v("黑森林")])]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 全局")]),v._v(" "),l("li",[v._v("条件：全局变量(A) == 37")]),v._v(" "),l("li",[v._v("动作：\n"),l("ul",[l("li",[v._v("修改全局变量(B, 添加至数组, 矢量(1, 1, 1))")]),v._v(" "),l("li",[v._v("修改全局变量(B, 添加至数组, 矢量(11, 11, 11))")]),v._v(" "),l("li",[v._v("修改全局变量(B, 添加至数组, 矢量(21, 21, 21))")]),v._v(" "),l("li",[v._v("设置全局变量(C, 真)")])])])]),v._v(" "),l("p",[l("strong",[v._v("创建一些效果")])]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 全局")]),v._v(" "),l("li",[v._v("条件：全局变量(C) == 真")]),v._v(" "),l("li",[v._v("动作：\n"),l("ul",[l("li",[v._v("创建效果(所有玩家(所有队伍), 球体, 红色, 数组中的值(全局变量(B), 0))")]),v._v(" "),l("li",[v._v("创建效果(所有玩家(所有队伍), 球体, 红色, 数组中的值(全局变量(B), 1))")]),v._v(" "),l("li",[v._v("创建效果(所有玩家(所有队伍), 球体, 红色, 数组中的值(全局变量(B), 2))")])])])]),v._v(" "),l("h2",{attrs:{id:"总结"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),l("p",[v._v("本文其实并没有用什么很稀奇古怪的技术，但本文的难点是思路的转变：你需要将几个本来不相同的逻辑，找出他们的共同点，并巧妙的将其拆分成多个逻辑，然后用规则来实现。")]),v._v(" "),l("p",[v._v("到底要不要使用这种方式来设计规则？你需要考虑它的优缺点。它的优点有：")]),v._v(" "),l("ul",[l("li",[v._v("将重复的内容独立出来，减少工作量。")]),v._v(" "),l("li",[v._v("方便以后的修改（不仅需要修改的地方少了，漏改的可能性也更小了）")])]),v._v(" "),l("p",[v._v("它也有缺点：")]),v._v(" "),l("ul",[l("li",[v._v("增加了规则数量。")]),v._v(" "),l("li",[v._v("增加了逻辑上的复杂度。")]),v._v(" "),l("li",[v._v("运行效率稍低。")])]),v._v(" "),l("p",[v._v("个人认为，"),l("strong",[v._v("适当")]),v._v("的使用这种思路来设计规则，可以减少你的工作量和维护难度。但并不代表这种方式一定就是最好的，你应当"),l("strong",[v._v("考虑你的实际情况")]),v._v("。")])])}),[],!1,null,null,null);_.default=t.exports}}]);