export const splitWordIfTwoOrMoreSyllables = (word: string): string => {
  // Split the string by capital letters
  const words = word.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ");

  // Capitalize the first letter of the first word and convert the rest to lowercase
  const firstWord =
    words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();

  // Convert the following words to lowercase
  const restWords = words.slice(1).map((w) => w.toLowerCase());

  // Join the first word with the rest of the words converted to lowercase
  return [firstWord, ...restWords].join(" ");
};
