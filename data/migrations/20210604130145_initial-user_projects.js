exports.up = function (knex) {
  return knex.schema.createTable('user_projects', (tbl) => {
    tbl.increments();
    tbl.integer('uid', 10).notNullable();
    tbl.integer('pid', 10).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_projects');
};
