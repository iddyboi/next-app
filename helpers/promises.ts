export const getData = (data, number: number) => {
  if (number > 10) {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  } else {
    return new Promise((resolve, reject) => {
      reject("not valid");
    });
  }
};
