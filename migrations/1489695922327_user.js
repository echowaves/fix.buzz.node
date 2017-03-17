exports.up = function(pgm) {
  pgm.createTable(
    'users',
    {
      id: 'id',
      email: {type: 'string', notNull: true, unique: true },
      password: {type: 'string', notNull: true }
    })
}

exports.down = function(pgm) {
  pgm.dropTable('users')
};
