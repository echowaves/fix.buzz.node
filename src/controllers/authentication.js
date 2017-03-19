import User from '../models/user'
import logger from '../../lib/logger'

exports.signup = async ctx => {
  const email = ctx.request.body.email
  const password = ctx.request.body.password
  logger.debug("email1: ", email)

  // See if a user with a given email exists
  let user
  try {
    user = await User.findByEmail(email)
  } catch (err) {
    logger.error("error validating email exists", err)
  }

  logger.debug("email2: ", user.email)


  // If a user does exists, return an Error

  // If a user with email does NOT exits, create and safe record

  // Resond to request indicating the user was created
ctx.body = ctx.request.body
}
