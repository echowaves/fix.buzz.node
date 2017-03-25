const passport = require('koa-passport')
import logger from '../lib/logger'
import User from '../src/models/user'

var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

// import logger from '../lib/logger'


const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: process.env.FBUZZ_JWT_SECRET

}

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, async(payload, done) => {
  logger.debug("payload: ", payload)
  // See if the user email in the payload exists in our database
  // If it does, call 'done' with that user
  //Otherwise, call dobe without a user object
  logger.debug("payload.sub: ", payload.sub)

  try {
    let user = await User.findByEmail(payload.sub)
    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  } catch (err) {
    logger.error("failed JWT Strategy: ", err)
    return done(err)
  }
})

// Tell passport to use this Strategy
passport.use('jwt', jwtLogin)
// export default jwtLogin
module.exports = passport
