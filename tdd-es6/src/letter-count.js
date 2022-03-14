export const getLetterCount = (string) => {
  const letters = string.split("");

  return letters.reduce((obj, letter) => {
    return { ...obj, [letter]: obj[letter] ? obj[letter] + 1 : 1 };
  }, {});
};
