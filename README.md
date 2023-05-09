# 复旦评教-问卷自动填写机器
FDU评教脚本。本工具仅用于技术学习与交流，**请同学们重视评教任务，认真完成评教。**



### 使用方法

#### 1. 登录评教系统，选择一个任务并打开

完成这一步之后，你应该处在问卷填写的页面。你应该可以看到题目并选择答案。（例如：1、本课程清晰地说明了需要学习的知识和掌握的技能。）



#### 2. 打开浏览器开发者工具-控制台

一般浏览器中打开控制台的方法为：先按`F12`**或**`Ctrl+Shift+J`**或**在页面空白处右键->选择`检查(Inspect)`打开**开发者工具**，然后选择**控制台(Console)面板**。



#### 3. 复制以下代码到控制台，按下回车执行

```
var js_src="//cdn.jsdelivr.net/gh/catlessfish/ce-fudan/ce.fudan.js";var src_node = document.createElement("script");src_node.type = "text/javascript";src_node.src = js_src;document.getElementsByTagName("head")[0].appendChild(src_node);
```



#### 4. 完成

若脚本执行成功，页面会弹出提示表明选择完成。



------

本项目的实现参考了@[KevinWang15/fdty: 复旦体育理论考试 自动做题器 (github.com)](https://github.com/KevinWang15/fdty)，使用方法也与之类似，特此说明并致意
