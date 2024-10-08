/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */

// @ts-ignore
exports.up = (pgm) => {
  pgm.createTable('contacts', {
    id: 'id',
    name: {type: 'varchar(100)', notNull: true },
    firstname: {type: 'varchar(100)', notNull: true },
    email: { type: 'varchar(255)', notNull: true, unique: true},
    phone: { type: 'varchar(20)', notNull: true},
    message: {type: 'text'},
    created_at: { type: 'timestamp', default: pgm.func('current_timestamp')}
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable('contacts');
};
