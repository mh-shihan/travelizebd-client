import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/Sectiontitle";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";

const TourGuideDetails = () => {
  const [rating, setRating] = useState(4);
  const { photo, name, education, skill, work_experience } = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto px-1 pt-10 ">
      <SectionTitle
        heading="Tour Guide Details"
        subheading="See Now"
      ></SectionTitle>
      <div className="bg-white border border-yellow rounded-xl shadow-md sm:flex w-3/5 mx-auto ">
        <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-[15rem] md:rounded-se-none md:max-w-xs">
          <img
            className="w-full h-full absolute top-0 start-0 object-cover"
            src={photo}
            alt="Image Description"
          />
        </div>
        <div className="flex flex-wrap">
          <div className="p-4 flex flex-col h-full sm:p-7">
            <h3 className="text-2xl font-bold text-gray-800 ">{name}</h3>
            <h3 className="flex items-center">
              <span className="text-xl font-medium">Rating: </span>
              <Rating
                style={{ maxWidth: 150 }}
                value={rating}
                onChange={setRating}
              />
            </h3>

            <p className="mt-2   ml-1">
              <span className="font-bold">Skill:</span> {skill}
            </p>
            <p className="mt-2 ml-1 ">
              <span className="font-medium">Education:</span> {education}
            </p>
            <p className="mt-2 ml-1 ">
              <span className="font-medium">Work Experience:</span>{" "}
              {work_experience}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGuideDetails;
