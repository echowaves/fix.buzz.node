import Router from 'koa-router'

import indexController from '../src/controllers/index'
import AuthenticationController from '../src/controllers/authentication'

require('./passportStrategies')

// const passport = require('koa-passport')
const passport = require('./passportStrategies')

const requireAuth = passport.authenticate('jwt', {session: false})
const requireSignin = passport.authenticate('local', {session: false})

module.exports = function (app) {
  const router = new Router()
  app.use(passport.initialize())

  router
    .get('/', requireAuth, indexController.helloWorld)
    .post('/signin', requireSignin, AuthenticationController.signin)
    .post('/signup', AuthenticationController.signup)

  app.use(router.routes())
}
