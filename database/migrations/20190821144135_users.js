
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments(); 
        users.string('username', 255).notNullable().unique();
        users.string('password', 255).notNullable();
        users.string('email', 255).notNullable().unique();
        users.string('gender', 20);
        users.boolean('push_notification').defaultTo(false);
        users.boolean('email_notification').defaultTo(false);
        users.integer('body_weight').defaultTo(0);
        users.integer('body_height').defaultTo(0);
        users.string('user_level', 255);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
