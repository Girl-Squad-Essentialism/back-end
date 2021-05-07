exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'barbara',
          password:
            '$2a$08$KT1IUGNXye6/.CUpDWkE1ezTy05F9D8S61cfx8G1TROOBd9uFeruq',
          first_name: 'Barbara',
          last_name: 'Moore',
          email: 'barbara@essentialism.com',
        },
        {
          username: 'danielle',
          password:
            '$2a$08$Q253wpnuumaFceRv5RiYPOyK9LaXVV3BftiGyn6a6hI6lZh4Mrlu2',
          first_name: 'Danielle',
          last_name: 'Koduru',
          email: 'danielle@essentialism.com',
        },
        {
          username: 'jessica',
          password:
            '$2a$08$O0SqHH0azm7vE8SI4QiinOh/.XYXzIYS7tgxSfOnQ4rcvMWB75XS6',
          first_name: 'Jessica',
          last_name: 'Duell',
          email: 'jessica@essentialism.com',
        },
        {
          username: 'clare',
          password:
            '$2a$08$c87yan.3aFAEeiDT4cdO3.q3a2WNRGyfPVxB41TXrwCNabWHWU3nK',
          first_name: 'Clare',
          last_name: 'Jackson',
          email: 'clare@essentialism.com',
        },
      ]);
    });
};
