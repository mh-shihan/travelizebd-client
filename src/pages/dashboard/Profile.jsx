import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Profile = () => {
  const [hideForm, setHideForm] = useState(false);
  const { user, updateUser } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data = {}, refetch } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user?.email}`);
      return res.data;
    },
  });

  const handleUpdateProfileInfo = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const gender = form.gender.value;
    const contactNumber = form.contactNumber.value;
    const currentAddress = form.currentAddress.value;
    const permanentAddress = form.permanentAddress.value;

    const updatedInfo = {
      name,
      gender,
      currentAddress,
      permanentAddress,
      contactNumber,
    };
    const res = await axiosSecure.patch(
      `/user?email=${user.email}`,
      updatedInfo
    );
    if (res.data.modifiedCount > 0) {
      updateUser(name).then(() => {
        Swal.fire({
          title: "Profile Info Updated",
          icon: "success",
        });
        refetch();
        setHideForm(!hideForm);
      });
    }
    if (res.data.matchedCount > 0 && res.data.modifiedCount === 0) {
      Swal.fire({
        icon: "info",
        title: "You haven't changed anything",
        text: "To update the profile info you need to change al least one field",
      });
      setHideForm(!hideForm);
    }
  };

  return (
    <div data-aos="fade-left">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2 shadow-sm">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden rounded-md">
                <img src={user?.photoURL} alt="" />
              </div>
              {/* <form className="mt-3 flex" onSubmit={handleProfilePictureUpdate}>
                                    <input type="file" name="image" className="" required />
                                    <input type="submit" required value="Update" className=" text-white px-2 cursor-pointer rounded-sm bg-sky-600 hover:bg-sky-700" />
                                </form> */}
              {/* <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{data.name}</h1>
                                <h3 className="text-gray-600 font-lg text-semibold leading-6">{data.accType} ID: {data?._id?.slice(0, 9)}</h3> */}
            </div>
            <div className="my-4"></div>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  ></svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>

              {/* info */}
              <div className={hideForm && "hidden"}>
                <div className="text-gray-700 ">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="">
                      <div className="px-4 py-2 font-semibold">Name</div>
                      <div className="px-4 py-2">{user?.displayName}</div>
                    </div>
                    <div className="">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      <div className="px-4 py-2">{user?.email}</div>
                    </div>
                    <div className="mt-4">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">
                        {data?.gender ? data?.gender : "N/A"}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">
                        {data?.contactNumber ? data?.contactNumber : "N/A"}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="px-4 py-2 font-semibold">
                        Current Address
                      </div>
                      <div className="px-4 py-2">
                        {data?.currentAddress ? data?.currentAddress : "N/A"}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="px-4 py-2 font-semibold">
                        Permanent Address
                      </div>
                      <div className="px-4 py-2">
                        {data?.permanentAddress
                          ? data?.permanentAddress
                          : "N/A"}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setHideForm(!hideForm)}
                    className="block w-full text-blue-800 hover:text-blue-00 text-sm font-semibold rounded-lg hover:bg-base-300  focus:outline-none focus:shadow-outline focus:bg-base-100 hover:shadow-xs p-3 my-4"
                  >
                    Edit Info
                  </button>
                </div>
              </div>

              {/* update form */}
              <div className="flex justify-center mt-4">
                <div className={!hideForm && "hidden"}>
                  <form
                    className="w-full max-w-lg"
                    onSubmit={handleUpdateProfileInfo}
                  >
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Name
                        </label>
                        <input
                          name="name"
                          defaultValue={data.name}
                          className="appearance-none block w-full bg-base-200 text-gray border border-base-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Enter Your Name"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                        >
                          Email
                        </label>
                        <input
                          className="appearance-none block w-full bg-base-200 text-gray border border-base-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          defaultValue={user.email}
                          readOnly
                          id="grid-last-name"
                          type="text"
                          placeholder="Doe"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Gender
                        </label>
                        <select
                          name="gender"
                          id=""
                          className="appearance-none block w-full bg-base-200 text-gray border border-base-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          type="text"
                          placeholder=""
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                        >
                          Contact No.
                        </label>
                        <input
                          defaultValue={
                            data.contactNumber ? data.contactNumber : ""
                          }
                          className="appearance-none block w-full bg-base-200 text-gray border border-base-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          name="contactNumber"
                          id="grid-last-name"
                          type="number"
                          placeholder="Enter Your Contact Number"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Current Address
                        </label>
                        <input
                          defaultValue={
                            data.currentAddress ? data.currentAddress : ""
                          }
                          className="appearance-none block w-full bg-base-200 text-gray border border-base-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          name="currentAddress"
                          type="text"
                          placeholder="Enter Your Current Address"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                        >
                          Permanent Address
                        </label>
                        <input
                          defaultValue={
                            data.permanentAddress ? data.permanentAddress : ""
                          }
                          className="appearance-none block w-full bg-base-200 text-gray border border-base-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          name="permanentAddress"
                          id="grid-last-name"
                          type="text"
                          placeholder="Enter Your Permanent Address"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center gap-10">
                      <button
                        type="submit"
                        className="text-white py-2 px-5 rounded-sm bg-sky-500 hover:bg-sky-600"
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="text-white py-2 px-5 rounded-sm bg-red-500 hover:bg-red-600"
                        onClick={() => setHideForm(!hideForm)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
