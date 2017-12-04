import * as Koa from "koa";
const app = new Koa()
import * as views from "koa-views";
import * as json from "koa-json";
import * as onerror from "koa-onerror";
import * as bodyparser from "koa-bodyparser";
import * as logger from "koa-logger";
import index from "./routes/index"

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/../public'))

app.use(views(__dirname + '/../views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start:any = new Date()
  await next()
  const end:any = new Date()
  const ms = end - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handlin
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

export default app
