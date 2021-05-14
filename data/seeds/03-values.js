exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('values')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        { value: 'Adventure' },
        { value: 'Balance' },
        { value: 'Compassion' },
        { value: 'Community' },
        { value: 'Creativity' },
        { value: 'Curiosity' },
        { value: 'Faith' },
        { value: 'Fame' },
        { value: 'Friendship' },
        { value: 'Fun' },
        { value: 'Growth' },
        { value: 'Happiness' },
        { value: 'Inner Harmony' },
        { value: 'Justice' },
        { value: 'Kindness' },
        { value: 'Knowledge' },
        { value: 'Leadership' },
        { value: 'Love' },
        { value: 'Peace' },
        { value: 'Prosperity' },
        { value: 'Security' },
        { value: 'Spirituality' },
        { value: 'Stability' },
        { value: 'Success' },
        { value: 'Wealth' },
        { value: 'Wisdom' },
      ]);
    });
};
