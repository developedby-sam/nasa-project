import express from "express";
import cors from "cors";
import planetRounter from "./routes/planets/planets.router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(planetRounter);

export default app;
