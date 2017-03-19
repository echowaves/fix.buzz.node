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
  return await User.findOne({
    where: {
      email: email
    }
  })
}



export default User
