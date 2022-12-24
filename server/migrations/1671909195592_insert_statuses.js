/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`INSERT INTO statuses (name) VALUES('CLOSED')`);
  pgm.sql(`INSERT INTO statuses (name) VALUES('ACTIVE')`);
};

exports.down = pgm => {};
