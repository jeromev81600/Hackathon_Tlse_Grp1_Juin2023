/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class ModelManager extends AbstractManager {
  constructor() {
    super({ table: "model" });
  }

  insert(modelData) {
    const { model, brand_id } = modelData;
    return this.database.query(
      `insert into ${this.table} (model, brand_id) values (?, ?)`,
      [model, brand_id]
    );
  }

  update(modelData, id) {
    const { model, brand_id } = modelData;
    return this.database.query(
      `update ${this.table} set model = ?, brand_id = ? where id = ?`,
      [model, brand_id, id]
    );
  }
}

module.exports = ModelManager;
