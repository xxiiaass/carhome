import * as Koa from "koa";
import * as Debug from "debug"
import * as http from "http"
import * as views from "koa-views";
import * as json from "koa-json";
import * as onerror from "koa-onerror";
import * as bodyparser from "koa-bodyparser";
import * as logger from "koa-logger";
import index from "./routes/index"
let debug = Debug('demo:server')
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Car } from "./service/entity/Car";
import { Type } from "./service/entity/Type";
import { Brand } from "./service/entity/Brand";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "kevin",
  password: "123456",
  database: "carhome",
  entities: [
    Car,
    Type,
    Brand
  ],
  synchronize: true,
  logging: false
}).then(async connection => {

  const app = new Koa()
  // error handler
  onerror(app)

  // middlewares
  app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
  }))
  app.use(json())
  app.use(logger())
  app.use(require('koa-static')(__dirname + '/../public'))

  app.use(views(__dirname + '/../views', {
    extension: 'ejs'
  }))

  // logger
  app.use(async (ctx, next) => {
    const start: any = new Date()
    await next()
    const end: any = new Date()
    const ms = end - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })

  // routes
  app.use(index.routes())

  // error-handlin
  app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
  });


  var port = normalizePort(process.env.PORT || '3000');
  // app.set('port', port);

  /**
   * Create HTTP server.
   */

  var server = http.createServer(app.callback());

  /**
   * Listen on provided port, on all network interfaces.
   */

  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

  /**
   * Normalize a port into a number, string, or false.
   */

  function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

  /**
   * Event listener for HTTP server "error" event.
   */

  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */

  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }

}).catch(error => console.log("TypeORM connection error: ", error));