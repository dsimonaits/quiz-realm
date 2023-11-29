const calculateLevel = (amount: number, amountForNextLVL: number): number => {
  const lvl =
    amount % amountForNextLVL === 0 ? 1 : Math.floor(amount / amountForNextLVL);
  return lvl;
};

export default calculateLevel;
