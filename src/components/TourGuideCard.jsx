import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const TourGuideCard = ({ tourGuide }) => {
  const { photo, name, skill } = tourGuide;

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl hover:transition-all hover:scale-105">
      <div className="relative mx-4 my-4 overflow-hidden text-gray-700 bg-white  bg-clip-border rounded-xl ">
        <img src={photo} alt="profile-picture" />

        <div className="flex justify-center  pt-2 gap-7 ">
          <a href="#facebook">
            <FaFacebook className="text-blue-500 text-xl"></FaFacebook>
          </a>
          <a href="#twitter">
            <FaTwitter className="text-blue-600 text-xl"></FaTwitter>
          </a>
          <a href="#instagram">
            <FaInstagram className="text-red-400 text-xl"></FaInstagram>
          </a>
        </div>
      </div>
      <div className=" flex items-center justify-between mx-4 ">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h4>
        <p className="block font-sans text-base antialiased font-medium text-yellow">
          {skill[1]}
        </p>
      </div>
      <div className="mx-4 flex justify-center my-6">
        {/* TODO: handleDetails for tour guide details */}
        <button className="btn btn-block btn-outline mx-4 border-yellow bg-yellow text-base-100">
          Details
        </button>
      </div>
    </div>
  );
};

export default TourGuideCard;
