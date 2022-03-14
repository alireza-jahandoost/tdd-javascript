import sinon from "sinon";
import request from "supertest";
import { expect } from "chai";
import db from "./db";
import { app } from "./server";

describe("GET /users/:username", () => {
  it("should return correct response when user with username found", async () => {
    const fakeData = {
      id: "123",
      username: "abc",
      email: "abc@gmail.com",
    };

    const stub = sinon.stub(db, "getUserByUsername").resolves(fakeData);

    await request(app)
      .get(`/users/${fakeData.username}`)
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(fakeData);

    expect(stub.getCall(0).args[0]).to.equal(fakeData.username);

    stub.restore();
  });

  it("should return correct response when there is an error", async () => {
    const fakeError = { message: "something went wrong" };

    const stub = sinon.stub(db, "getUserByUsername").throws(fakeError);

    await request(app)
      .get("/users/abc")
      .expect(500)
      .expect("Content-Type", /json/)
      .expect(fakeError);

    stub.restore();
  });

  it("should return correct response when the user is not found", async () => {
    const stub = sinon.stub(db, "getUserByUsername").resolves(null);

    await request(app)
      .get("/users/abc")
      .expect(404)
      .expect("Content-Type", /json/);

    stub.restore();
  });
});
