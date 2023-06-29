/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class OSManager extends AbstractManager {
  constructor() {
    super({ table: "operating_system" });
  }

  insert(operatingSystem) {
    const { operating_system } = operatingSystem;
    return this.database.query(
      `insert into ${this.table} (operating_system) values (?)`,
      [operating_system]
    );
  }

  update(operatingSystem, id) {
    const { operating_system } = operatingSystem;
    return this.database.query(
      `update ${this.table} set operating_system = ? where id = ?`,
      [operating_system, id]
    );
  }
}

module.exports = OSManager;
