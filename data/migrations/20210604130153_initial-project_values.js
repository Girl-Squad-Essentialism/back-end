exports.up = function (knex) {
  return knex.schema.createTable('project_values', (tbl) => {
    tbl.increments();
    tbl.integer('pid', 10).notNullable();
    tbl.integer('vid', 10).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('project_values');
};
