import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PackageCard = ({ tourPackage }) => {
  const [isRed, setIsRed] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { photo, price, title, type, _id } = tourPackage;

  const handleHeartClick = async () => {
    setIsRed(!isRed);

    if (!isRed) {
      const wishlist = { photo, price, title, type, email: user?.email };
      const res = await axiosSecure.post("/user/wishlists", wishlist);
      // console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${title} added to your wishlist`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

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
        <div className="card-actions justify-center items-end mt-4 w-full">
          <Link to={`/viewPackage/${_id}`}>
            <button className="btn btn-block btn-outline  text-xl ">
              View Package
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
