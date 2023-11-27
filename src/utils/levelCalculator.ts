const calculateLevel = (amount: number, amountForNextLVL: number): number => {
  const lvl = Math.floor(amount / amountForNextLVL);
  return lvl;
};

export default calculateLevel;
