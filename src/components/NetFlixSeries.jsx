import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
const Netflix = () => {
  return (
    <ul className="grid grid-three--cols" >
      {seriesData.map((curElem) => {
        return (
          <SeriesCard key = {curElem.id} curElem = {curElem}/>
        )
      })}
    </ul>
  );
};

export default Netflix;
