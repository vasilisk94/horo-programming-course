import { useState } from "react";


enum Category {
  fruit = 'fruit', 
  vegatable = 'vegatable', 
  drink = 'drink',
}

type Product = {
  name: string,
  price: number,
  category: Category,
}

// 🍎
// 🥒
// 🍾

const products: Product[] = [
  {
    name: 'apple',
    price: 1.5,
    category: Category.fruit,
  },
  {
    name: 'cucumber',
    price: 2.8,
    category: Category.vegatable,
  },
  {
    name: 'milk',
    price: 7.3,
    category: Category.drink,
  }
];


export const useArrayOperations = () => {
  return {
    products
  };
};
