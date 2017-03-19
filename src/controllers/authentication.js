import User from '../models/user'
import logger from '../../lib/logger'

exports.signup = async ctx => {
  const email = ctx.request.body.email
  const password = ctx.request.body.password

  // See if a user with a given email exists
  let user = await User.findByEmail(email)

  // If a user does exists, return an Error
  if(user) {
    logger.debug("found user with email: ", user.email)
    ctx.response.status = 422
    ctx.body = { error: 'Email is in use'}
    return
  }

  // If a user with email does NOT exits, create and safe record
  let newUser = await User.create({email, password})
  logger.debug("new user created: ", newUser.email)

  // Resond to request indicating the user was created
  ctx.body = ctx.request.body
}
