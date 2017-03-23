const passport = require('koa-passport')

import User from '../src/models/user'

import {Strategy, ExtractJwt} from 'passport-jwt'
import logger from '../lib/logger'

// Setup options for JWT Strategy

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.FBUZZ_JWT_SECRET
}

// Create JWT Strategy
const jwtLogin = new Strategy(jwtOptions, function(payload, done) {
  logger.debug("payload: ", payload)
  done(null, false)
})



  // async (payload, done) => {
  // logger.debug("payload: ", payload)
  // return done(null, false)
// })
//   logger.debug("payload: ", payload)
//   // See if the user email in the payload exists in our database
//   // If it does, call 'done' with that user
//   //Otherwise, call dobe without a user object
//
//   logger.debug("payload.sub: ", payload.sub)
//
//   try {
//     let user = await User.findByEmail(payload.sub)
//     if (user) {
//       return done(null, user)
//     } else {
//       return done(null, false)
//     }
//   } catch (err) {
//     logger.error("failed JWT Strategy: ", err)
//     return done(err)
//   }
// })

// Tell passport to use this Strategy
passport.use('jwt', jwtLogin)
// export default jwtLogin
