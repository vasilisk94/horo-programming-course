import { Link } from "react-router-dom";
import { useArrayOperations } from "./useArrayOperations";

export const ArrayOperations = () => {
  const { products } = useArrayOperations();

  return (
    <>
      <h1>Array Operations</h1>
      <div>
        <button>All</button>
        <button>Fruits</button>
        <button>Vegetables</button>
        <button>Drinks</button>
      </div>
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(({ name, price }) => (<li key={name}>{name} === {price}</li>))}
        </ul>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};
