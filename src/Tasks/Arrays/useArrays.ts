import { useState } from "react";

const prices = [1, 4, 5, 2, 6];

// const getTotalPrice = (costs: number[]): number => {
//   let sumElem = 0
//   for (let i = 0; i < costs.length; i++) {
//     sumElem += costs[i]
//   }
//   return sumElem
// }

// const getTotalPrice = (costs: number[]): number => {
//   let sumElem = 0
//   for (let cost of costs) {
//     sumElem += cost
//   }
//   return sumElem
// }

const getTotalPrice = (costs: number[]): number => {
  let sumElem = 0
  costs.forEach((cost) => {sumElem += cost})
  return sumElem
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
