const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://samiransarime:5aV5nlN0tz7ErRJD@nasa-cluster.cxtjvlq.mongodb.net/nasa?retryWrites=true&w=majority&appName=nasa-cluster";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Application specific logging, throwing an error, or other logic here
});

async function startServer() {
  await mongoose.connect(MONGO_URL);

  await loadPlanetData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
