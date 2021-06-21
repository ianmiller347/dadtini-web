export const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const arrayOfN = (n) => [...Array(n).keys()];

export const getShuffledArray = (array) =>
  array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
