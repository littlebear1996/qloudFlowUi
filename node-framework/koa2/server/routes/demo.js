const router = require('koa-router')();
const requestModule = require('../request/request');
const baseUrl = require('../request/baseUrl');
router.prefix('/demo');
router.get('/get', async (ctx, next) => {
  ctx.body = ctx.request.query
});
router.post('/post', async (ctx, next) => {
  ctx.body = ctx.request.body
});


module.exports = router;