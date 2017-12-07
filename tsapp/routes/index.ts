const router = require('koa-router')()
import DB from "../service/db"
import { Car } from "../service/entity/Car"

router.get('/', async (ctx, next) => {
  let a = await DB(async cn => {
    return await cn.manager.find(Car);
  })
  ctx.body = a;
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

export default router;
