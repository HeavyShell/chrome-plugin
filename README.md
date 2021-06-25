### 自动填充密码器
### 这是一款登录页面，自动填充密码chrome浏览器插件

#### 直接下载，可使用，By Heavy

#### 实现逻辑：
1 进入或刷新登录页面，可以是任何网站

2 插件自动调取接口API获取到用户名和密码(见background.js)

3 插件自动识别出页面中type="password"的输入框作和它的前一个type="text"的输入框，分别作为目标输入框

4 插件自动向目标输入框中填充用户名和密码


#### 要点：
1 插件开发技术

2 background和content消息通信技术

3 识别html元素技术


#### chrome浏览器插件开发实现，可见manifest.js 详细文档可网上查阅


### 使用方法：
1 chrome浏览器输入：chrome://extensions/ 打开界面，也可重设置中进入：设置=》更多工具=》拓展程序

2 打开开发者模式，如图：
![image](https://user-images.githubusercontent.com/14215192/123385623-4f90d780-d5c8-11eb-8714-4ff39dae9072.png)

3 加载对应文件目录即可，如图：
![image](https://user-images.githubusercontent.com/14215192/123385687-659e9800-d5c8-11eb-9c90-7fcf5e9c0eec.png)

![image](https://user-images.githubusercontent.com/14215192/123385772-80710c80-d5c8-11eb-8379-03743704efba.png)

4 安装成功视图：
![image](https://user-images.githubusercontent.com/14215192/123385935-b1e9d800-d5c8-11eb-9e8e-681d351cee2e.png)

![image](https://user-images.githubusercontent.com/14215192/123385978-bdd59a00-d5c8-11eb-931a-25ce775576db.png)


### 演示效果：

![image](https://user-images.githubusercontent.com/14215192/123385194-df825180-d5c7-11eb-8ae0-072e98a7f8b3.png)

![image](https://user-images.githubusercontent.com/14215192/123385230-e8732300-d5c7-11eb-8997-2a7c7b683d25.png)

![image](https://user-images.githubusercontent.com/14215192/123385259-ee690400-d5c7-11eb-9e6d-035a29daad4f.png)

