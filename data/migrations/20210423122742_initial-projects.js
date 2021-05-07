exports.up = function (knex) {
  return knex.schema.createTable('projects', (tbl) => {
    tbl.increments();
    tbl.text('title', 64).notNullable();
    tbl.text('description', 256).notNullable();
    tbl.bool('completed').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects');
};
