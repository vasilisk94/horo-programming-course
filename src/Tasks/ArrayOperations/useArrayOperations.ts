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
  },
  {
    name: 'orange',
    price: 4.6,
    category: Category.fruit,
  },
  {
    name: 'tomato',
    price: 4.2,
    category: Category.vegatable,
  },
  {
    name: 'cola',
    price: 0.8,
    category: Category.drink,
  },
];

const updProducts = products.map(function(product) {
  let categoryIcon = ''
  switch (product.category) {
    case Category.fruit:
      categoryIcon = '🍎';
      break     
    case Category.vegatable:
      categoryIcon = '🥒';
      break
    case Category.drink:
      categoryIcon = '🍾';
      break
  }
  return {
    name: product.name,
    price: Math.round(product.price),
    icon: categoryIcon,
    category: product.category,
  }
})

export const useArrayOperations = () => {
  const [stateProducts, setStateProducts] = useState(updProducts)

  const filterFruits = () => {
    const filteredProducts = updProducts.filter((product) => {
      return product.category === Category.fruit
    })
    // NOTE: don't touch this
    setStateProducts(filteredProducts)
  }

  const filterVegetables = () => {
    const filteredProducts = updProducts.filter((product) => {
      return product.category === Category.vegatable
    })
    // NOTE: don't touch this
    setStateProducts(filteredProducts)
  }

  const filterDrinks = () => {
    const filteredProducts = updProducts.filter((product) => {
      return product.category === Category.drink
    })
    // NOTE: don't touch this
    setStateProducts(filteredProducts)
  }

  const showAll = () => {
    setStateProducts(updProducts)
  }

  return {
    products: stateProducts,
    filterFruits: filterFruits,
    filterVegetables: filterVegetables,
    filterDrinks: filterDrinks,
    showAll: showAll
  };
};
