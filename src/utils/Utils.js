export const add = (numbers) => {
  if (numbers.trim().length === 0) {
    return 0;
  }

  const value = numbers.split(",").reduce((acc, cur) => {
    return acc + parseInt(cur);
  }, 0);

  return value;
};
