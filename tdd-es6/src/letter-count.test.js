import { expect } from "chai";
import { getLetterCount } from "./letter-count";

describe("getLetterCount - basic functionality", () => {
  it("should return an empty object when input is empty string", () => {
    expect(getLetterCount("")).to.deep.equal({});
  });

  it("should return an object with 1 for each letter when input has 1 letter from each type", () => {
    expect(getLetterCount("cat")).to.deep.equal({ c: 1, a: 1, t: 1 });
  });

  it("should return an object with correct number of letters when input has more than 1 letter from each type", () => {
    expect(getLetterCount("mississippi")).to.deep.equal({
      m: 1,
      i: 4,
      s: 4,
      p: 2,
    });
  });
});
