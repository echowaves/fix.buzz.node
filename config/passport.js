import passport from 'passport'
import User from '../src/models/user'
import config from './config'
import JwtStrategy from ('passport-jwt').Strategy
import ExtractJwt from ('passport-jwt').ExtractJwt

// Setup options for JWT Strategy
const jwtOptions = {}

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // See if the user email in the payload exists in our database
  // If it does, call 'done' with that user
  //Otherwise, call dobe without a user object

})

// Tell passport to use this Strategy
