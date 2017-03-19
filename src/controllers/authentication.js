import User from '../models/user'

exports.signup = async ctx => {
  const email = ctx.request.body.email
  const password = ctx.request.body.password
  console.log("email1: ", email)

  // See if a user with a given email exists
  let user = await User.findOne({ where: {email: email} })

  console.log("email2: ", user.email)



  // If a user does exists, return an Error

  // If a user with email does NOT exits, create and safe record

  // Resond to request indicating the user was created
ctx.body = ctx.request.body
}
