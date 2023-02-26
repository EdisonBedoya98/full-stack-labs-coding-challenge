export const numbersFractionCalculator = (numbers: number[]) => {
  let positivesAmount = 0;
  let negativeAmount = 0;
  let zerosAmount = 0;
  const size = numbers.length;
  for (let i = 0; i < size; i++) {
    if (numbers[i] > 0) {
      positivesAmount++;
    } else if (numbers[i] < 0) {
      negativeAmount++;
    } else {
      zerosAmount++;
    }
  }

  return {
    positives: fixeDecimals(positivesAmount / size),
    negative: fixeDecimals(negativeAmount / size),
    zeros: fixeDecimals(zerosAmount / size),
  };
};

function fixeDecimals(num: number) {
  return num.toFixed(6);
}
