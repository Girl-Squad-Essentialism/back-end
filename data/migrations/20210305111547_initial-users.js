exports.up = function (knex) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl.text('username', 64).notNullable();
    tbl.text('password', 64).notNullable();
    tbl.text('first_name', 64).notNullable();
    tbl.text('last_name', 64).notNullable();
    tbl.text('email', 64).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
