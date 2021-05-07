exports.up = function (knex) {
  return knex.schema.createTable('values', (tbl) => {
    tbl.increments();
    tbl.text('value', 256).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('values');
};
