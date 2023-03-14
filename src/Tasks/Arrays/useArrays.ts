import { useState } from "react";

const prices = [1, 4, 5, 2, 6];

const getTotalPrice = (prices: number[]): number => {
  return 0
}

export const useArrays = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  return {
    totalPrice,
    getTotalPrice: () => {
      setTotalPrice(getTotalPrice(prices))
    }
  };
};
