import { expect } from "chai";
import {
  setDatabaseData,
  getDatabaseData,
  resetDatabase,
} from "./test-helpers";
import { getUserByUsername } from "./db";

describe("getUserByUsername", () => {
  afterEach("reset the database", async () => {
    await resetDatabase();
  });

  it("should get correct user from the database given a username", async () => {
    const fakeData = [
      {
        id: "123",
        username: "abc",
        email: "abc@gmail.com",
      },
      {
        id: "124",
        username: "wrong",
        email: "wong@wrong.com",
      },
    ];

    await setDatabaseData("users", fakeData);

    const actual = await getUserByUsername("abc");
    const finalDBState = await getDatabaseData("users");

    const expected = fakeData[0];

    expect(actual).excludingEvery("_id").to.deep.equal(expected);
    expect(finalDBState).excludingEvery("_id").to.deep.equal(fakeData);
  });

  it("should return null when the user is not found", async () => {
    const fakeData = [
      {
        id: "123",
        username: "abc",
        email: "abc@gmail.com",
      },
      {
        id: "124",
        username: "wrong",
        email: "wong@wrong.com",
      },
    ];

    await setDatabaseData("users", fakeData);

    const actual = await getUserByUsername("notFound");
    const finalDBState = await getDatabaseData("users");
    console.log("actual", actual);

    const expected = null;

    expect(actual).to.deep.equal(expected);
    expect(finalDBState).to.deep.equal(fakeData);
  });
});
