exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_values')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user_values').insert([
        {
          uid: 1,
          vid: 23,
          priority: true,
          description:
            'Stability is important because it is an essential part of starting a family.',
        },
        { uid: 1, vid: 16, priority: false, description: '' },
        {
          uid: 3,
          vid: 26,
          priority: true,
          description:
            'Wisdom is important because it enriches your life and is something that no one else can take away from you.',
        },
        { uid: 3, vid: 1, priority: false, description: '' },
        {
          uid: 4,
          vid: 6,
          priority: true,
          description:
            'Curiosity is what drives my desire to move through life along the path of least resistance, as chosen for me by Love.',
        },
        { uid: 4, vid: 26, priority: false, description: '' },
      ]);
    });
};
