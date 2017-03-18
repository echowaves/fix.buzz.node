exports.signup = async ctx => {
  console.log(ctx.request.body)
  // See if a user with a given email exists

  // If a user does exists, return an Error

  // If a user with email does NOT exits, create and safe record

  // Resond to request indicating the user was created
ctx.body = ctx.request.body
}
