import { Link } from "react-router-dom";
import { useArrayOperations } from "./useArrayOperations";

export const ArrayOperations = () => {
  const { products, filterFruits, filterVegetables, filterDrinks, showAll } = useArrayOperations();

  return (
    <>
      <h1>Array Operations</h1>
      <div>
        <button onClick={showAll}>All</button>
        <button onClick={filterFruits}>Fruits</button>
        <button onClick={filterVegetables}>Vegetables</button>
        <button onClick={filterDrinks}>Drinks</button>
      </div>
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(({ name, price, icon }) => (<li key={name}>{name} ${price} {icon}</li>))}
        </ul>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};
