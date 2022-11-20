import express from "express";
import { planets } from "../../models/planets.model.js";
import { getAllPlanets } from "./planets.controller.js";

const planetRounter = express.Router();

planetRounter.get("/planets", getAllPlanets);

export default planetRounter;
