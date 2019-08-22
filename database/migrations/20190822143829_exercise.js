
exports.up = function(knex) {
    return knex.schema.createTable('exercise', exercise => {
        users.increments(); 
        users.string('exercise_name', 255).notNullable();
        users.text('description').notNullable();
        users.string('level', 255).notNullable();
        users.string('video', 255).notNullable();
        users.string('picture_one', 255).notNullable();
        users.string('picture_two', 255).notNullable();
        users.string('type', 255).notNullable();
        users.string('muscles', 255).notNullable();
        users.string('equipment', 255).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('exercise');
};
