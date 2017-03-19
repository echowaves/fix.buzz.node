import Sequelize from 'sequelize'

export default Object.freeze({
    DB: new Sequelize(`postgres://${process.env.FBUZZ_DB_USER}:${process.env.FBUZZ_DB_PASS}@${process.env.FBUZZ_DB_HOST}:5432/${process.env.FBUZZ_DB_NAME}`)
})
