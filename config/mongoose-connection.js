require("dotenv").config()
const mongoose = require("mongoose");
const dbgr = require('debug')("Development:mongoose");
mongoose
  .connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
  .then(function () {
    dbgr("connected");
  })
  .catch((error) => {
    dbgr("Error connecting to MongoDB:", error.message);
  });

module.exports = mongoose.connection;
