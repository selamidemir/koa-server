const Koa = require('koa');
const { get } = require('koa/lib/response');
const koaRouter = require("koa-router");

const app = new Koa();
const router = new koaRouter();

// // response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

router.get("home", "/", (ctx) => {
    ctx.body = "<h1>HOME</h1>";
});

router.get("hakkimda", "/about", (ctx) => {
    ctx.body = "<h1>ABOUT US</h1>";
});

router.get("contact", "/contact", (ctx) => {
    ctx.body = "<h1>CONTACT US</h1>";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);