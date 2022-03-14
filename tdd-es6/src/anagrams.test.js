import { expect } from "chai";
import { isAnagram } from "./anagrams";

describe("isAnagram - basic functionality", () => {
  it("should return true if the strings are equal in count", () => {
    const expected = true;
    const actual = isAnagram("silent", "listen");
    expect(actual).to.equal(expected);
  });
  it("should return false when there is a letter in first string that is not in another string", () => {
    const expected = false;
    const actual = isAnagram("abc", "ab");
    expect(actual).to.equal(expected);
  });
  it("should return false when there is a letter in second string that is not in another string", () => {
    const expected = false;
    const actual = isAnagram("ab", "abc");
    expect(actual).to.equal(expected);
  });
  it("should return false when the count of letters in strings are not equal", () => {
    const expected = false;
    const actual = isAnagram("abc", "abca");
    expect(actual).to.equal(expected);
  });
  it("should ignore none alphabetical letters in first string", () => {
    const expected = true;
    const actual = isAnagram("abc - a", "cbaa");
    expect(actual).to.equal(expected);
  });
  it("should ignore none alphabetical letters in second string", () => {
    const expected = true;
    const actual = isAnagram("cbaa", "abc - a");
    expect(actual).to.equal(expected);
  });
  it("should not be case sensitive", () => {
    const expected = true;
    const actual = isAnagram("AbcD", "abCd");
    expect(actual).to.equal(expected);
  });
});
