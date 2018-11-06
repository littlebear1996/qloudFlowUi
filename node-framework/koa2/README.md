## koa2文件说明
- 模版引擎采用ejs模版
- 已经配置好热更新，修改代码无需重启
- 默认启动端口为3000，如要修改，请前往bin目录的www文件
- 已经解除掉了跨域权限，如果修改，请在app.js 修改
- 默认的静态资源目录为public
- 已配置了根据不同指令启动不同环境代码,详细请查看server/request/baseUrl.js文件
- 支持pm2（建议生产环境使用）
```
// 建议启动指令如下
npm run dev // 开发or测试环境
npm run start  // 生产环境 没有pm2的情况下
npm run prod  // 生产环境 有pm2的情况下
// 如果配置更多自定义请参考 package.json文件
```