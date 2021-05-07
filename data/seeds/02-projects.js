exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { title: '1', description: 'rowValue1', completed: false },
        { title: '2', description: 'rowValue2', completed: false },
        { title: '3', description: 'rowValue3', completed: false },
      ]);
    });
};
