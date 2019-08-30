const db = require('../../data/dbConfig');

function exerciseSets(sets) {
  return db('sets').insert(sets);
}

module.exports = {
  exerciseSets,
};
