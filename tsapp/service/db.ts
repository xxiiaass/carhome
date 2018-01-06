import { getManager, Repository } from "typeorm";
import { Car } from "./entity/Car";
import { Type } from "./entity/Type";
import { Brand } from "./entity/Brand";

let map = {
  car: Car,
  type: Type,
  brand: Brand
}

let DB = function (name: string): Repository<any> {
  if (!map[name]) {
    throw Error('数据库调用错误')
  }
  let repository = getManager().getRepository(map[name]);
  return repository;
}

export default DB;