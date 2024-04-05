const { getHabitablePlanets } = require("../../models/planets.model");

async function httpGetAllPlanets(req, res) {
  return res.status(200).json(await getHabitablePlanets());
}

module.exports = {
  httpGetAllPlanets,
};
