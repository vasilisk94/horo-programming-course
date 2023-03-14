import { Link } from "react-router-dom";
import { useArrays } from "./useArrays";

export const Arrays = () => {
  const { totalPrice, getTotalPrice } = useArrays();

  return (
    <>
      <h1>Arrays</h1>
      <div>
        <div>Total Price: {totalPrice}</div>
        <button
          onClick={() => {
            getTotalPrice();
          }}
        >
          Calculate Total Price
        </button>
      </div>
      <hr />
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};
