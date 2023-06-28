/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class ScreenManager extends AbstractManager {
  constructor() {
    super({ table: "screen" });
  }

  insert(screen) {
    const { screensize } = screen;
    return this.database.query(
      `insert into ${this.table} (screen) values (?)`,
      [screensize]
    );
  }

  update(screen, id) {
    const { screensize } = screen;
    return this.database.query(
      `update ${this.table} set screen = ? where id = ?`,
      [screensize, id]
    );
  }
}

module.exports = ScreenManager;
