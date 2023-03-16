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
      <li key="arrays">
        <Link to="/arrays">Arrays</Link>
      </li>
      <li key="array-operations">
        <Link to="/array-operations">Array Operations</Link>
      </li>
    </ul>
  );
};
