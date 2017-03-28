import Router from 'koa-router'

import indexController from '../src/react/index'
import AuthenticationController from '../src/api/controllers/authentication'

require('./passportStrategies')

// const passport = require('koa-passport')
const passport = require('./passportStrategies')

const requireAuth = passport.authenticate('jwt', {session: false})
const requireSignin = passport.authenticate('local', {session: false})

module.exports = function (app) {
  const router = new Router()
  app.use(passport.initialize())

  router
    .get('/', indexController)
    .post('/api/signin', requireSignin,     AuthenticationController.signin)
    .post('/api/signup',                    AuthenticationController.signup)

  app.use(router.routes())
}
