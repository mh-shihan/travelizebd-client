import { Link } from "react-router-dom";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { FaSafari } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import { GiHiking } from "react-icons/gi";
import SectionTitle from "../../../components/Sectiontitle";

const TourTypes = () => {
  return (
    <div className="pt-10">
      <SectionTitle
        heading="Our best Events"
        subheading="Check it out"
      ></SectionTitle>
      <div className="bg-[#f6f8f9] w-full py-10 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {/* Boating */}
          <Link to="/tourType/boating">
            <div className="border border-slate-300 rounded-sm bg-white flex flex-col justify-center items-center py-8 hover:transition-all hover:scale-105 ">
              <h1 className="text-3xl font-bold text-yellow">Boating</h1>
              <FaSailboat className=" text-7xl text-yellow font-extrabold" />
            </div>
          </Link>
          <Link to="/tourType/sports">
            <div className="border border-slate-300 rounded-sm bg-white flex flex-col justify-center items-center py-8 hover:transition-all hover:scale-105">
              <MdOutlineSportsBasketball className=" text-7xl text-yellow" />
              <h1 className="text-3xl font-bold text-yellow">Sports</h1>
            </div>
          </Link>
          <Link to="/tourType/walking">
            <div className="border border-slate-300 rounded-sm bg-white flex flex-col justify-center items-center py-8 hover:transition-all hover:scale-105">
              <FaWalking className=" text-7xl text-yellow font-extrabold" />
              <h1 className="text-3xl font-bold text-yellow">Walking</h1>
            </div>
          </Link>
          <Link to="/tourType/airRides">
            <div className="border border-slate-300 rounded-sm bg-white flex flex-col justify-center items-center py-8 hover:transition-all hover:scale-105">
              <IoAirplane className=" text-7xl text-yellow font-extrabold" />
              <h1 className="text-3xl font-bold text-yellow">Air Rides</h1>
            </div>
          </Link>
          <Link to="/tourType/hiking">
            <div className="border border-slate-300 rounded-sm bg-white flex flex-col justify-center items-center py-8 hover:transition-all hover:scale-105">
              <GiHiking className=" text-7xl text-yellow font-extrabold" />
              <h1 className="text-3xl font-bold text-yellow">Hiking</h1>
            </div>
          </Link>
          <Link to="/tourType/adventure">
            <div className="border border-slate-300 rounded-sm bg-white flex flex-col justify-center items-center py-8 hover:transition-all hover:scale-105">
              <FaSafari className=" text-7xl text-yellow font-extrabold" />
              <h1 className="text-3xl font-bold text-yellow">Adventure</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourTypes;
