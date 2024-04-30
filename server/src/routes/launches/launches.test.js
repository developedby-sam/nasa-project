const request = require("supertest");
const app = require("../../app");
const { mongoConnect, mongoDisconnect } = require("../../services/mongo");
const { loadPlanetData } = require("../../models/planets.model");
describe("Testing Launches APIs", () => {
  beforeAll(async () => {
    await mongoConnect();
    await loadPlanetData();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe("Test GET /launches", () => {
    test("It should respond with 200 success", async () => {
      await request(app)
        .get("/v1/launches")
        .expect("Content-Type", /json/)
        .expect(200);
      // expect(response.statusCode).toBe(200);
    });
  });

  describe("Test POST /launch", () => {
    launchData = {
      mission: "Up And Away!",
      rocket: "NCC 1701-D",
      target: "Kepler-1649 b",
      launchDate: "January 4, 2028",
    };

    launchDataWithoutDate = {
      mission: "Up And Away!",
      rocket: "NCC 1701-D",
      target: "Kepler-1649 b",
    };

    launchDataWithInvalidDate = {
      mission: "Up And Away!",
      rocket: "NCC 1701-D",
      target: "Kepler-1649 b",
      launchDate: "Invalid Date",
    };

    test("It should respond with 200 success", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(launchData)
        .expect("Content-Type", /json/)
        .expect(201);

      const requestDate = new Date(launchData.launchDate).valueOf();
      const responseDate = new Date(response.body.launchDate).valueOf();

      expect(responseDate).toBe(requestDate);

      expect(response.body).toMatchObject(launchDataWithoutDate);
    });

    test("It should catch missing required properties", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(launchDataWithoutDate)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Missing required launch property",
      });
    });
    test("It should catch invalid dates", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(launchDataWithInvalidDate)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Invalid launch date",
      });
    });
  });
});
