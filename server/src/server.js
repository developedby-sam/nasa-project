import http from "http";
import app from "./app.js";
import { loadPlanetsData } from "./models/planets.model.js";

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  server.listen(8080, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
