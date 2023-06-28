/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class BrandManager extends AbstractManager {
  constructor() {
    super({ table: "brand" });
  }

  insert(brandData) {
    const { brand, url_logo } = brandData;
    return this.database.query(
      `insert into ${this.table} (brand, url_logo) values (?, ?)`,
      [brand, url_logo]
    );
  }

  update(brandData, id) {
    const { brand, url_logo } = brandData;
    return this.database.query(
      `update ${this.table} set brand = ?, url_logo = ? where id = ?`,
      [brand, url_logo, id]
    );
  }
}

module.exports = BrandManager;
