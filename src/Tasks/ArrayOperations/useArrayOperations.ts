import { useState } from "react";


type Category = '' // fruit, vegatable, drink

type Product = {
  // name
  // price 1.2, 1.5 => Math.round()
  // category
}

// 🍎
// 🥒
// 🍾

const products: Product[] = [];


export const useArrayOperations = () => {
  return {
    products
  };
};
