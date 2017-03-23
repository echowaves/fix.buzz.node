import Router from 'koa-router'

import indexController from '../src/controllers/index'
import AuthenticationController from '../src/controllers/authentication'

require('./passportStrategies')

const passport = require('koa-passport')

const requireAuth = passport.authenticate('jwt', {session: false})

module.exports = function (app) {
  const router = new Router()

  app.use(passport.initialize())

  router
    .get('/', requireAuth, indexController.helloWorld)

    .post('/signup', AuthenticationController.signup)


  app.use(router.routes())
}
