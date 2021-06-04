exports.up = function (knex) {
  return knex.schema.createTable('user_values', (tbl) => {
    tbl.increments();
    tbl.integer('uid', 10).notNullable();
    tbl.integer('vid', 10).notNullable();
    tbl.bool('priority').notNullable();
    tbl.text('description');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_values');
};
