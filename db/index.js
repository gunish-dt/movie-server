const mongoose = require("mongoose");

const connectionString =
  "mongodb://mongo-gunish-env-mongodb.gunish:27017/cinema";

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;

module.exports = db;
