exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user_projects').insert([
        { uid: 1, pid: 1 },
        { uid: 1, pid: 2 },
        { uid: 3, pid: 3 },
        { uid: 4, pid: 4 },
      ]);
    });
};
