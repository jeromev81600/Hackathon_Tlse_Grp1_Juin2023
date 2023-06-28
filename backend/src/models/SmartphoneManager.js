/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class SmartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphone" });
  }

  insert(smartphone) {
    const {
      user_id,
      reserve,
      created_date,
      has_charger,
      weighted_total,
      brand_id,
      imei,
      model_id,
      operating_system_id,
      screen_id,
      network_id,
      storage_id,
      ram_id,
      weighting_id,
      price,
      url_phone,
    } = smartphone;
    return this.database.query(
      `insert into ${this.table} (user_id,
        reserve,
        created_date,
        has_charger,
        weighted_total,
        brand_id,
        imei,
        model_id,
        operating_system_id,
        screen_id,
        network_id,
        storage_id,
        ram_id,
        weighting_id,
        price,
        url_phone) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user_id,
        reserve,
        created_date,
        has_charger,
        weighted_total,
        brand_id,
        imei,
        model_id,
        operating_system_id,
        screen_id,
        network_id,
        storage_id,
        ram_id,
        weighting_id,
        price,
        url_phone,
      ]
    );
  }

  update(smartphone, id) {
    const {
      user_id,
      reserve,
      created_date,
      has_charger,
      weighted_total,
      brand_id,
      imei,
      model_id,
      operating_system_id,
      screen_id,
      network_id,
      storage_id,
      ram_id,
      weighting_id,
      price,
      url_phone,
    } = smartphone;
    return this.database.query(
      `update ${this.table} set user_id = ?, reserve = ?, created_date = ?, has_charger = ?, weighted_total = ?, brand_id = ?,imei = ?, model_id = ?, operating_system_id = ?, screen_id = ?, network_id = ?, storage_id = ?, ram_id = ?, weighting_id = ?, price = ?, url_phone = ? where id = ?`,
      [
        user_id,
        reserve,
        created_date,
        has_charger,
        weighted_total,
        brand_id,
        imei,
        model_id,
        operating_system_id,
        screen_id,
        network_id,
        storage_id,
        ram_id,
        weighting_id,
        price,
        url_phone,
        id,
      ]
    );
  }
}

module.exports = SmartphoneManager;
