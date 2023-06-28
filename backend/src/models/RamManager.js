/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class RamManager extends AbstractManager {
  constructor() {
    super({ table: "ram" });
  }

  insert(ramData) {
    const { ram, cost_ram } = ramData;
    return this.database.query(
      `insert into ${this.table} (ram, cost_ram) values (?, ?)`,
      [ram, cost_ram]
    );
  }

  update(ramData, id) {
    const { ram, cost_ram } = ramData;
    return this.database.query(
      `update ${this.table} set ram = ?, cost_ram = ? where id = ?`,
      [ram, cost_ram, id]
    );
  }
}

module.exports = RamManager;
