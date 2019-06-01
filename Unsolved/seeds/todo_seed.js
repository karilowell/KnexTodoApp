
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {text: 'travel to Germany'},
        {text: 'play', completed: true},
        {text: 'buy car'}
      ]);
    });
};
