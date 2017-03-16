import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import convert from 'koa-convert'
import cors from 'koa-cors'
import json from 'koa-json'
import devLogger from 'koa-logger'
import logger from './lib/logger'

const app = module.exports = new Koa()

// Global Error Handler
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    ctx.body = e
    ctx.status = e.status || 500
  }
})

// Compress response size and Gzip
app.use(compress({
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))

// Set CORS *convert can make legacy middleware useable in Koa2
app.use(convert(cors()))

// Perrty-printed response json
app.use(convert(json()))

// Development style logger
app.use(convert(devLogger()))

app.use(bodyParser())

require('./config/routes')(app)

app.listen(4030)
logger.info('servser started at 4030')
