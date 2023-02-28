import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <ul>
      <li key="flow">
        <Link to="/flow">Flow</Link>
      </li>
    </ul>
  );
};
