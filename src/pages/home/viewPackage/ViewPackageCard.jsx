import SectionTitle from "../../../components/SectionTitle";
import { FaArrowRight } from "react-icons/fa";

const ViewPackageCard = ({ viewPackage }) => {
  const { photo, title, dayOne, dayTwo } = viewPackage;
  return (
    <div className="bg-white p-4">
      <div className="-mt-20">
        <SectionTitle heading={title} subheading="About"></SectionTitle>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-10 mt-10">
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl text-dark-gray font-extrabold mb-4 text-center">
            Read About This Tour
          </h3>
          <p className="text-colo  text-justify">
            Welcome to TravelizeBD, where passion meets paws! We are dedicated
            to enhancing the bond between you and the nature.
            {dayOne.description}
            {dayTwo.description}
          </p>
          <button className="flex gap-2  justify-center items-center text-yellow text-lg mt- hover:bg-dark-gray  px-8">
            Read More <FaArrowRight />
          </button>
        </div>
        <img className="h-[400px]" src={photo} alt="" />
      </div>
    </div>
  );
};

export default ViewPackageCard;
