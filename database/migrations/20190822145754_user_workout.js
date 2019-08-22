
exports.up = function(knex) {
    return knex.schema.createTable('exercise', exercise => {
        users.increments(); 
        table.foreign('user_id').references('id').inTable('users');
        table.foreign('user_id').references('id').inTable('workout');
    })
};

exports.down = function(knex) {
  
};
