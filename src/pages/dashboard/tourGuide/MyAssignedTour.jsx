import { TbCurrencyTaka } from "react-icons/tb";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const MyAssignedTour = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: guidesAssignedBookings = [], refetch } = useQuery({
    queryKey: ["guidesAssignedBookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/guidesAssignedBookings/${user?.displayName}`
      );
      return res.data;
    },
  });

  const handleAccept = (id, packageName) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Doo you want to accept this trip!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, accept it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/tourGuide/updateStatus/${id}`, {
          status: "accepted",
        });
        // console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Updated",
            text: `${packageName} has accepted`,
            icon: "success",
          });
        }
      }
    });
  };
  const handleReject = (id, packageName) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Doo you want to reject this trip!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, accept it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/tourGuide/updateStatus/${id}`, {
          status: "rejected",
        });
        // console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Updated",
            text: `${packageName} has rejected`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div data-aos="fade-left">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#f6f8f9]">
            <tr>
              <th>#</th>
              <th>Package Name</th>
              <th>Tourist Name</th>
              <th className="flex items-center">
                Price
                <TbCurrencyTaka />
              </th>
              <th>Date</th>
              <th>Status</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {guidesAssignedBookings.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.packageName}</td>
                <td>{item.name}</td>
                <td>{item.PackagePrice}</td>
                <td>{item.date}</td>
                <td>
                  {item?.packageStatus ? (
                    item?.packageStatus === "accepted" ? (
                      <span className="text-green-600">
                        {item.packageStatus}
                      </span>
                    ) : (
                      <span className="text-red-600">{item.packageStatus}</span>
                    )
                  ) : (
                    "In Review"
                  )}
                </td>
                <td>
                  {item?.packageStatus === "rejected" ? (
                    <button disabled>Accept</button>
                  ) : item?.packageStatus === "accepted" ? (
                    "Accepted"
                  ) : (
                    <button
                      onClick={() => handleAccept(item._id, item.packageName)}
                      className="btn btn-ghost btn-xs "
                    >
                      Accept
                    </button>
                  )}
                </td>
                <td>
                  {item?.packageStatus === "accepted" ? (
                    <button disabled>Reject</button>
                  ) : item?.packageStatus === "rejected" ? (
                    "Rejected"
                  ) : (
                    <button
                      onClick={() => handleReject(item._id, item.packageName)}
                      className="btn btn-ghost btn-xs "
                    >
                      Reject
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignedTour;
