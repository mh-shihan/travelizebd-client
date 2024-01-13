import { useParams } from "react-router-dom";
import useAllPackages from "../../../hooks/useAllPackages";
import FilteredTourType from "./FilteredTourPackages";

const TourType = () => {
  const [allPackages] = useAllPackages();
  const boating = allPackages.filter((item) => item.type === "Boating");
  const sports = allPackages.filter((item) => item.type === "Sports");
  const walking = allPackages.filter((item) => item.type === "Walking");
  const airRides = allPackages.filter((item) => item.type === "Air Rides");
  const hiking = allPackages.filter((item) => item.type === "Hiking");
  const adventure = allPackages.filter((item) => item.type === "Adventure");
  const { type } = useParams();

  console.log(type);
  return (
    <div>
      {/* Boating Tour */}
      {type === "boating" && (
        <FilteredTourType items={boating} type={type}></FilteredTourType>
      )}
      {/* Walking Tour */}
      {type === "walking" && (
        <FilteredTourType items={walking} type={type}></FilteredTourType>
      )}
      {/* Sports Tour */}
      {type === "sports" && (
        <FilteredTourType items={sports} type={type}></FilteredTourType>
      )}
      {/* Air Rider tour */}
      {type === "airRides" && (
        <FilteredTourType items={airRides} type={type}></FilteredTourType>
      )}
      {/* Hiking tour */}
      {type === "hiking" && (
        <FilteredTourType items={hiking} type={type}></FilteredTourType>
      )}
      {/*Adventure Tour  */}
      {type === "adventure" && (
        <FilteredTourType items={adventure} type={type}></FilteredTourType>
      )}
    </div>
  );
};

export default TourType;
