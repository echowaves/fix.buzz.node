import Router from 'koa-router'

import indexController from '../src/controllers/index'

module.exports = function (app) {
  const router = new Router()

  router
    .get('/', indexController.helloWorld)


  app.use(router.routes())
}
