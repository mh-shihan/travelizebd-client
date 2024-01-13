import { FaQuoteLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const TouristStoryCard = ({ touristStory }) => {
  const { photo, story, _id } = touristStory;
  return (
    <Link to={`/storyDetails/${_id}`}>
      <div className="space-y-4 flex justify-center flex-col items-center mt-6 shadow-lg p-4 rounded-xl bg-white hover:transition-all hover:scale-105">
        <div className="relative">
          <img
            src={photo}
            className="h-40 w-40 rounded-full "
            alt="tourist-photo"
          />

          <FaQuoteLeft className="text-white text-xl font-extrabold bg-yellow rounded-full w-10 h-10 p-2 absolute top-1 left-28" />
        </div>

        <p className="text-slate-600  text-center">{story}</p>
        <h3 className="font-semibold flex gap-2">
          <FaUser /> Director of
          <span className="text-yellow">Travelism.com</span>
        </h3>
      </div>
    </Link>
  );
};

export default TouristStoryCard;
