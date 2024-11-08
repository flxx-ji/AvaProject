/**
 This files define a migration for creating the 'contacts' table in our database.
 Migrations help us apply and undo changes to the database in consistent way
 */

// 'up' function is calles when we want to apply this migration, creating the table.
exports.up = (pgm) => {
  pgm.createTable('contacts', {
    // 'id': A unique indentifier for each contact, auto-incremented
    id: 'id',
    //'name': Is the last name of the contact, max 100 characters, cannot be empty.
    name: {type: 'varchar(100)', notNull: true },

    //'firstname': Is the first name of the contact, max 100 characters, cannot be empty.
    firstname: {type: 'varchar(100)', notNull: true },

    //'email': Is the email address of the contact, must be unique and cannot be empty
    email: { type: 'varchar(255)', notNull: true, unique: true},

    //'phone': Is the contact's phone number, max 20 characters, cannot be empty
    phone: { type: 'varchar(20)', notNull: true},

    // 'message': A message from the contact, no specific length limit.
    message: {type: 'text'},

    //'created'_at': date and time when this contact was created, automatically set to now.
    created_at: { type: 'timestamp', default: pgm.func('current_timestamp')}
  });
};

    // 'down' function is called if we want to undo this migration , deleting the table.
exports.down = (pgm) => {
  pgm.dropTable('contacts');
};
