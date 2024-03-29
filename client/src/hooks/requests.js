const API_URL = "http://localhost:8000";
async function httpGetPlanets() {
  const reponse = await fetch(`${API_URL}/planets`);
  return await reponse.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  console.log(response);
  const fetchedLaunches = await response.json();
  console.log("json: ", fetchedLaunches);
  return fetchedLaunches.sort((launch1, launch2) => {
    return launch1.flightNumber - launch2.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
