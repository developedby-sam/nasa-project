const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://samiransarime:5aV5nlN0tz7ErRJD@nasa-cluster.cxtjvlq.mongodb.net/nasa?retryWrites=true&w=majority&appName=nasa-cluster";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
