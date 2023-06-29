/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    const { firstname, lastname, email, hashed_password, is_admin, factory } =
      user;
    return this.database.query(
      `insert into ${this.table} ( firstname,
      lastname,
      email,
      hashed_password,
      is_admin,
      factory) values (?,?,?,?,?,?)`,
      [firstname, lastname, email, hashed_password, is_admin, factory]
    );
  }

  update(user, id) {
    const { firstname, lastname, email, hashed_password, is_admin, factory } =
      user;
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, hashed_password = ?, is_admin = ?, factory = ? where id = ?`,
      [firstname, lastname, email, hashed_password, is_admin, factory, id]
    );
  }

  getUserByEmail(mail) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      mail,
    ]);
  }
}

module.exports = UserManager;
