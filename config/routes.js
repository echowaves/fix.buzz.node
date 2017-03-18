import Router from 'koa-router'

import indexController from '../src/controllers/index'
import AuthenticationController from '../src/controllers/authentication'

module.exports = function (app) {
  const router = new Router()

  router
    .get('/', indexController.helloWorld)

    .post('/signup', AuthenticationController.signup)


  app.use(router.routes())
}
