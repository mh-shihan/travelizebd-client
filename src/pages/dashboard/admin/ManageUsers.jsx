import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";
import { MdAdminPanelSettings } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaPeoplePulling } from "react-icons/fa6";

const ManageUsers = () => {
  const [users, refetch] = useUsers();
  const axiosSecure = useAxiosSecure();

  const handleMakeAdmin = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want make the use as admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/admin/updateRole/${id}`, {
          role: "admin",
        });

        if (res.data?.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Admin!",
            text: `${name} is an Admin now`,
            icon: "success",
          });
        }
      }
    });
  };

  const handleMakeTourGuide = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want make the use as tour guide?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Tour Guide!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/admin/updateRole/${id}`, {
          role: "tour guide",
        });

        if (res.data?.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Tour Guide!",
            text: `${name} is a Tour Guide now`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div data-aos="fade-left" className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Make Admin</th>
            <th>Make Tour Guide</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user?.role ? user.role : "tourist"}</td>
              <td>
                {user?.role === "admin" ? (
                  "Admin"
                ) : user?.role === "tour guide" ? (
                  <button className="btn btn-ghost btn-xs" disabled>
                    <MdAdminPanelSettings className="text-2xl text-yellow " />
                  </button>
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user._id, user.name)}
                    className="btn btn-ghost btn-xs"
                  >
                    <MdAdminPanelSettings className="text-2xl text-yellow " />
                  </button>
                )}
              </td>
              <td>
                {user?.role === "tour guide" ? (
                  "Tour Guide"
                ) : user?.role === "admin" ? (
                  <button disabled className="btn btn-ghost btn-xs ">
                    <FaPeoplePulling className="text-2xl text-red-500" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleMakeTourGuide(user._id, user.name)}
                    className="btn btn-ghost btn-xs "
                  >
                    <FaPeoplePulling className="text-2xl text-red-500" />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
