import { Link } from "react-router-dom";
import { useObjects } from "./useObjects";

export const Objects = () => {

  const { dayName, updateDay } = useObjects()

  return (
    <>
      <h1>Objects</h1>
      <div>
        <select onChange={(e) => updateDay(parseInt(e.target.value, 10))}>
          <option key="unknown" value="0">Select day number</option>
          <option key="monday" value="1">1</option>
          <option key="tuesday" value="2">2</option>
          <option key="wednesday" value="3">3</option>
          <option key="thursday" value="4">4</option>
          <option key="friday" value="5">5</option>
          <option key="saturday" value="6">6</option>
          <option key="sunday" value="7">7</option>
        </select>
        <div>Selected day is <strong style={{textTransform: 'capitalize', color: 'red'}}>{dayName}</strong></div>
      </div>
      <hr />
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};
