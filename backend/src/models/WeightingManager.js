/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class WeightingManager extends AbstractManager {
  constructor() {
    super({ table: "weighting" });
  }

  insert(weighting) {
    const { weighting: wt, cost_weighting, state } = weighting;
    return this.database.query(
      `insert into ${this.table} (weighting, cost_weighting, state) values (?,?,?)`,
      [wt, cost_weighting, state]
    );
  }

  update(weighting, id) {
    const { weighting: wt, cost_weighting, state } = weighting;
    return this.database.query(
      `update ${this.table} set weighting = ?, cost_weighting = ?, state = ? where id = ?`,
      [wt, cost_weighting, state, id]
    );
  }
}

module.exports = WeightingManager;
