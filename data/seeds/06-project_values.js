exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project_values')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('project_values').insert([
        { pid: 1, vid: 23 },
        { pid: 2, vid: 16 },
        { pid: 3, vid: 26 },
        { pid: 4, vid: 26 },
      ]);
    });
};
