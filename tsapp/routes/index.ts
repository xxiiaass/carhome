const router = require('koa-router')()
import DB from "../service/db"
import * as pinyin from "pinyin"

router.get('/cars', async (ctx, next) => {
  let cars = await DB('car').find({ type: ctx.query.type_id });
  for (let car of cars) {
    car.brand = await DB('brand').findOne({ autokid: car.brand });
    car.type = await DB('type').findOne({ autokid: car.type });
  }
  ctx.body = cars;
})

router.get('/brands', async (ctx, next) => {
  ctx.body = await DB('brand').find();
})

router.get('/types', async (ctx, next) => {
  ctx.body = await DB('type').find({ brand: ctx.query.id });
})

router.get('/type', async (ctx, next) => {
  ctx.body = await DB('type').find({ brand: ctx.query.id });
})


export default router;
