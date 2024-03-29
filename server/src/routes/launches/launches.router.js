const express = require("express");

const { getAllLaunches } = require("./launches.controller");

const launchesRouter = express.Router();

// create the end points
launchesRouter.get("/launches", getAllLaunches);

module.exports = launchesRouter;
