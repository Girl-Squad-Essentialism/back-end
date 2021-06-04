exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          title: 'Purchase a House',
          description: 'We are trying to find a house by the end of 2021',
          completed: false,
        },
        {
          title: 'Finish Lambda',
          description: 'Complete the web dev program at Lambda',
          completed: true,
        },
        {
          title: 'Create Neighborhood Library',
          description:
            'Creating a library for the neighborhood people to be able to access. Allows people to leave a book and take a book to increase their knowledge',
          completed: false,
        },
        {
          title: 'Capture an Owl',
          description: 'Owls hold all the wisdom in the world.',
          completed: false,
        },
      ]);
    });
};
