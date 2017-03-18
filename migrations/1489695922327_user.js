exports.up = function(pgm) {
  pgm.createTable(
    'users',
    {
      id: 'id',
      email: {type: 'string', notNull: true },
      password: {type: 'string', notNull: true }
    })
  pgm.sql(
    'CREATE UNIQUE INDEX users_email_key ON users (lower(email));'
  )
}

exports.down = function(pgm) {
  pgm.dropTable('users')
};
