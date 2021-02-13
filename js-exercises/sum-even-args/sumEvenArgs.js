const sumEvenArgs = (...args) => {
  let sumofEvens = 0;
  for (const arg of args) {
    if (arg % 2 === 0) {
      sumofEvens += arg;
    }
  }
  // console.log(sum);
  return sumofEvens;
};
export { sumEvenArgs };
