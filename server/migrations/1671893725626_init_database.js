/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('users', {
    id: 'id',
    email: { type: 'varchar(1000)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.createTable('statuses', {
    id: 'id',
    name: { type: 'varchar(1000)', notNull: true, unique: true },
  });

  pgm.createTable('stories', {
    id: 'id',
    title: { type: 'varchar(1000)', notNull: true },
    description: { type: 'varchar(1000)', notNull: true },
    statusId: {
      type: 'integer',
      notNull: true,
      references: '"statuses"',
      onDelete: 'restrict',
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.createTable('story_users', {
    id: 'id',
    userId: {
      type: 'integer',
      notNull: true,
      references: '"users"',
      onDelete: 'restrict',
    },
    userId: {
      type: 'integer',
      notNull: true,
      references: '"users"',
      onDelete: 'cascade',
    },
    storyId: {
      type: 'integer',
      notNull: true,
      references: '"stories"',
      onDelete: 'cascade',
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.createTable('boards', {
    id: 'id',
    title: { type: 'varchar(1000)', notNull: true },
    storyId: {
      type: 'integer',
      notNull: true,
      references: '"stories"',
      onDelete: 'cascade',
    },
    statusId: {
      type: 'integer',
      notNull: true,
      references: '"statuses"',
      onDelete: 'restrict',
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.createTable('projects', {
    id: 'id',
    title: { type: 'varchar(1000)', notNull: true },
    userId: {
      type: 'integer',
      notNull: true,
      references: '"users"',
      onDelete: 'restrict',
    },
    boardId: {
      type: 'integer',
      notNull: true,
      references: '"boards"',
      onDelete: 'cascade',
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = pgm => {};
