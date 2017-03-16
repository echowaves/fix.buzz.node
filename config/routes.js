import Router from 'koa-router'

import indexController from '../src/controllers/index'

module.exports = function (app) {
  const index = new Router()

  index.get('/', indexController.helloWorld)

  app.use(index.routes())
}
