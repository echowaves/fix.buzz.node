import Sequelize from 'sequelize'
import config from '../../config/consts'

var User = config.DB.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
})

export default User



// export async function findOne(params) {
//   try {
//     let foundUser = await db.users.findOne(params)
//
//   } catch (err) {
//
//   }
// }
