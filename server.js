import Koa from 'koa'

// import middleware from 'koa-webpack'
import config from './webpack.config.js'

import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import convert from 'koa-convert'
import cors from 'koa-cors'
import json from 'koa-json'
import devLogger from 'koa-logger'
import logger from './lib/logger'
import html from './index.html.js'
import serve from 'koa-static'

import dotenv from 'dotenv'
dotenv.config()

const app = module.exports = new Koa()

// serve static files e.g. bundle.js
app.use(serve('./build'))


// Global Error Handler
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    ctx.body = e
    ctx.status = e.status || 500
  }
})

// app.use(middleware({
//   config: config
// }))

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

require('./api/config/routes')(app)

const port = process.env.PORT || 3000


// set the initial content
app.use(async (ctx, next) => {
  ctx.body = html('hello')
})


app.listen(port)
logger.info(`servser started at ${port}`)
