const { Model } = require("objection");
const Knex = require("knex");
const models = require("../models");
const connection = require("../db/connection");

module.exports = () => {
  const customMiddlewareBefore = async (handler) => {
    const knexConfig = Knex({
      client: "mysql2",
      connection,
    });
    await Model.knex(knexConfig);
    handler.event.models = models;
  };
  const customMiddlewareAfter = async () => {
    await Model.knex().destroy();
  };
  const customMiddlewareOnError = async () => {
    // on error
  };

  return {
    before: customMiddlewareBefore,
    after: customMiddlewareAfter,
    onError: customMiddlewareOnError,
  };
};
