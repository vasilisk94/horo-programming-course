import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <ul>
      <li key="flow">
        <Link to="/flow">Flow</Link>
      </li>
      <li key="objects">
        <Link to="/objects">Objects</Link>
      </li>
    </ul>
  );
};
