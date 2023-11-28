const calculateLevel = (amount: number, amountForNextLVL: number): number => {
  const lvl = amount % amountForNextLVL === 0 ? 1 : 0;
  return lvl;
};

export default calculateLevel;
