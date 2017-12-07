import "reflect-metadata";
import { createConnection } from "typeorm";
import { Car } from "./entity/Car";

let DB = async function (cb) {
  let connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "kevin",
    password: "123456",
    database: "carhome",
    entities: [
      Car
    ],
    synchronize: true,
    logging: false
  });

  return await cb(connection)
}

export default DB;