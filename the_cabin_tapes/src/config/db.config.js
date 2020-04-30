module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "!!N0tTheM0mma",
  DB: "marstestdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
