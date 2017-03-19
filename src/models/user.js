import Sequelize from 'sequelize'
import config from '../../config/consts'
import logger from '../../lib/logger'

var User = config.DB.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
})


// Adding a class level method
User.findByEmail = async email => {
  let foundUser
  try {
    foundUser= await User.findAll({
      where: {
        email: email
      }
    })
  } catch (err) {
    logger.error("error looking for email", err)
  }
  return foundUser
}


//
// // Adding an instance level method
// User.prototype.instanceLevelMethod = function() {
//   return 'bar';
// }

export default User
