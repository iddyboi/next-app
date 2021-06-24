export const nameModifier = (name: string) => {
  //   const firstLetter = name.slice(0, 1).toUpperCase();
  //   const restOfName = name.slice(1, name.length);
  //   return firstLetter + restOfName;
  const [firstLetter, ...restOfName] = name.split("");
  const upperCaseName = firstLetter.toUpperCase().concat(...restOfName);
  return upperCaseName;
};
