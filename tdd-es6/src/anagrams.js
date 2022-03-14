export const isAnagram = (firstString, secondString) => {
  const firstCount = firstString
    .toLowerCase()
    .split("")
    .filter((letter) => letter <= "z" && letter >= "a")
    .sort()
    .join("");
  const secondCount = secondString
    .toLowerCase()
    .split("")
    .filter((letter) => letter <= "z" && letter >= "a")
    .sort()
    .join("");

  return firstCount === secondCount;
};
