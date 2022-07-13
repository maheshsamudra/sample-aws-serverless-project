const middy = require("middy"); // commonjs Node v12+
const { jsonBodyParser, httpErrorHandler } = require("middy/middlewares");
const useModels = require("../../middlewares/useModels");

const handler = async (event, context) => {
  const { TestTable } = event.models;
  const testData = await TestTable.query();

  return { statusCode: 200, body: JSON.stringify(testData, null, 2) };
};

// Adding middlewares from middy.
module.exports.endpoint = middy(handler)
  .use(jsonBodyParser())
  .use(useModels())
  .use(httpErrorHandler()); // handles common http errors and returns proper responses
