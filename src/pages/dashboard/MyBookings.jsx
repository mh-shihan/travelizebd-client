import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { TbCurrencyTaka } from "react-icons/tb";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/bookings?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div data-aos="fade-left">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#f6f8f9]">
            <tr>
              <th>#</th>
              <th>Package Name</th>
              <th>Guide Name</th>
              <th className="flex items-center">
                Price <TbCurrencyTaka />
              </th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <th>{index + 1}</th>
                <td>{booking.packageName}</td>
                <td>{booking.guide}</td>
                <td>{booking.PackagePrice}</td>
                <td>{booking.date}</td>
                <td>In Review</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
