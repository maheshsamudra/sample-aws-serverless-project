const connection = require("./db/connection");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql2",
  pool: {
    min: 1,
    max: 1,
  },
  connection,
  migrations: {
    directory: `${__dirname}/db/migrations`,
    tableName: "knex_migrations",
  },
};
