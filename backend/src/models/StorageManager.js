/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class StorageManager extends AbstractManager {
  constructor() {
    super({ table: "storage" });
  }

  insert(storageData) {
    const { storage, cost_storage } = storageData;
    return this.database.query(
      `insert into ${this.table} (storage, cost_storage) values (?, ?)`,
      [storage, cost_storage]
    );
  }

  update(storageData, id) {
    const { storage, cost_storage } = storageData;
    return this.database.query(
      `update ${this.table} set storage = ?, cost_storage = ? where id = ?`,
      [storage, cost_storage, id]
    );
  }
}

module.exports = StorageManager;
