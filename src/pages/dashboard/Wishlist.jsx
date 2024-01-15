import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { TbCurrencyTaka } from "react-icons/tb";
import { BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";

const Wishlist = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: wishlists = [], refetch } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/wishlists?email=${user?.email}`);
      return res.data;
    },
  });

  const handleDeleteWishlist = (id, title) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/user/deleteWishlists/${id}`);
        if (res.data.deletedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${title} is deleted from wishlist`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      }
    });
  };

  return (
    <div data-aos="fade-left" className="overflow-x-auto ">
      <table className="table">
        {/* head */}
        <thead className="bg-[#f6f8f9] ">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th className="flex items-center">
              Price
              <TbCurrencyTaka />
            </th>
            <th>Details</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {wishlists.map((wishlist, index) => (
            <tr key={wishlist._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={wishlist.photo} alt="photo" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{wishlist.title}</div>
                    <div className="text-sm opacity-50">{wishlist.type}</div>
                  </div>
                </div>
              </td>

              <td>{wishlist.price}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
              <th>
                <button
                  onClick={() =>
                    handleDeleteWishlist(wishlist._id, wishlist.title)
                  }
                  className="btn btn-ghost btn-xs"
                >
                  <BsTrashFill className="text-red-600 text-xl" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
