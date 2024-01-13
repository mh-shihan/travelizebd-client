import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";

const PackageCard = ({ tourPackage }) => {
  const [isRed, setIsRed] = useState(false);
  const handleHeartClick = () => {
    setIsRed(!isRed);
  };

  const { photo, price, title, type } = tourPackage;
  return (
    <div className="card card-compact bg-base-100 shadow-xl relative rounded-t-xl  hover:transition-all hover:scale-105">
      <img src={photo} className="rounded-xl" />
      <h2 className="absolute flex bg-slate-800 rounded-md text-white px-2 py-1 mt-2 ml-2">
        {price}
        <TbCurrencyTaka className="text-yellow text-xl -ml-1 " />
      </h2>
      <div className="card-body bg-base-100 flex flex-col justify-between">
        <div className="flex justify-end">
          {isRed ? (
            <FaHeart
              onClick={handleHeartClick}
              className="text-red-500 text-2xl cursor-pointer"
            />
          ) : (
            <FaRegHeart
              onClick={handleHeartClick}
              className="text-right text-2xl  cursor-pointer "
            />
          )}
        </div>
        <div className="flex justify-between text-gray">
          <h2 className="card-title">{type}</h2>
          <h2 className="card-title">{title}</h2>
        </div>
        {/* TODO: handleClick for package details */}
        {/* TODO: handleHeartClick to add to myWishList */}
        <div className="card-actions justify-end items-end ">
          <button className="btn btn-outline btn-block text-xl ">
            View Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
