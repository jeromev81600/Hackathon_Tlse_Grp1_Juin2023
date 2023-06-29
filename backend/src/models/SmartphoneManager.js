/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class SmartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphone" });
  }

  details(id) {
    return this.database.query(
      `SELECT
      s.id,
      s.user_id,
      s.reserve,
      s.created_date,
      s.has_charger,
      s.weighted_total,
      b.brand,
      b.url_logo,
      m.model,
      os.operating_system,
      sc.screen,
      n.network,
      st.storage,
      r.ram,
      w.weighting,
      w.state,
      s.price,
      s.url_phone
    FROM ${this.table} s
    JOIN brand b ON s.brand_id = b.id
    JOIN model m ON s.model_id = m.id
    JOIN operating_system os ON s.operating_system_id = os.id
    JOIN screen sc ON s.screen_id = sc.id
    JOIN network n ON s.network_id = n.id
    JOIN storage st ON s.storage_id = st.id
    JOIN ram r ON s.ram_id = r.id
    JOIN weighting w ON s.weighting_id = w.id
    WHERE s.id = ?`,
      [id]
    );
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
