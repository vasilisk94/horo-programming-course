import { useState } from "react";


type Category = '' // fruit, vegatable, drink

type Product = {
  name: string,
  price: number,
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
