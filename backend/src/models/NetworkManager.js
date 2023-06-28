/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class NetworkManager extends AbstractManager {
  constructor() {
    super({ table: "network" });
  }

  insert(networkData) {
    const { network } = networkData;
    return this.database.query(
      `insert into ${this.table} (network) values (?)`,
      [network]
    );
  }

  update(networkData, id) {
    const { network } = networkData;
    return this.database.query(
      `update ${this.table} set network = ? where id = ?`,
      [network, id]
    );
  }
}

module.exports = NetworkManager;
