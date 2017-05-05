import logger from './lib/logger'

import Sequelize from 'sequelize'

export var sequelize = new Sequelize(`postgres://${process.env.FBUZZ_DB_USER}:${process.env.FBUZZ_DB_PASS}@${process.env.FBUZZ_DB_HOST}:5432/${process.env.FBUZZ_DB_NAME}`)

sequelize
  .authenticate()
  .then(function(err) {
    logger.info('Connection to database has been established successfully.')
  })
  .catch(function (err) {
    logger.info('Unable to connect to the database:', err)
  })