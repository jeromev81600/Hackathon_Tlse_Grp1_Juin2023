require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const UserManager = require("./UserManager");
const SmartphoneManager = require("./SmartphoneManager");
const ScreenManager = require("./ScreenManager");
const OSManager = require("./OSManager");
const WeightingManager = require("./WeightingManager");
const RamManager = require("./RamManager");
const StorageManager = require("./StorageManager");
const NetworkManager = require("./NetworkManager");
const BrandManager = require("./BrandManager");
const ModelManager = require("./ModelManager");

models.user = new UserManager();
models.user.setDatabase(pool);

models.smartphone = new SmartphoneManager();
models.smartphone.setDatabase(pool);

models.screen = new ScreenManager();
models.screen.setDatabase(pool);

models.operatingSystem = new OSManager();
models.operatingSystem.setDatabase(pool);

models.weighting = new WeightingManager();
models.weighting.setDatabase(pool);

models.ram = new RamManager();
models.ram.setDatabase(pool);

models.storage = new StorageManager();
models.storage.setDatabase(pool);

models.network = new NetworkManager();
models.network.setDatabase(pool);

models.brand = new BrandManager();
models.brand.setDatabase(pool);

models.model = new ModelManager();
models.model.setDatabase(pool);
// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
