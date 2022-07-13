const { Model } = require("objection");

module.exports = class TestTable extends Model {
  static get tableName() {
    return "test_table";
  }
};
