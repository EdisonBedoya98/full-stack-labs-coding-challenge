export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number,
): number => {
  if (
    dice1 <= 0 ||
    dice2 <= 0 ||
    dice3 <= 0 ||
    dice1 > 6 ||
    dice2 > 6 ||
    dice3 > 6
  )
    throw new Error('Dice out of number range');

  if (dice1 === dice2 && dice1 === dice3) {
    return dice1 * 3;
  }

  if (dice1 === dice2) return dice1 * 2;
  if (dice1 === dice3) return dice1 * 2;
  if (dice2 === dice3) return dice2 * 2;

  if (dice1 > dice2 && dice1 > dice3) return dice1;
  if (dice2 > dice1 && dice2 > dice3) return dice2;

  return dice3;
};
