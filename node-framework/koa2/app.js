const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const cors = require('koa2-cors');
const path = require('path');
const demo = require('./server/routes/demo');
const pages = require('./pages-router/page');
const router = require('koa-router')();
// error handler
onerror(app);
app.use(cors()); // 放开跨域请求权限
app.use(koaBody());
app.use(json());
app.use(logger());
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

// routes
app.use(pages.routes(), pages.allowedMethods());
// server
app.use(demo.routes(), demo.allowedMethods());
// 静态资源
app.use(require('koa-static')(__dirname + '/public'));
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
