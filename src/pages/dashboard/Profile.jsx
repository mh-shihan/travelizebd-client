import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Profile = () => {
  const [hideForm, setHideForm] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data = {}, refetch } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?${user?.email}`);
      return res.data;
    },
  });
  console.log(data);

  const handleUpdateProfileInfo = (e) => {
    e.preventDefault();
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
                        {user?.gender ? user?.gender : "N/A"}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">
                        {user?.contactNumber ? user?.contactNumber : "N/A"}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="px-4 py-2 font-semibold">
                        Current Address
                      </div>
                      <div className="px-4 py-2">
                        {user?.currentAddress ? user?.currentAddress : "N/A"}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="px-4 py-2 font-semibold">
                        Permanent Address
                      </div>
                      <div className="px-4 py-2">
                        {user?.permanentAddress
                          ? user?.permanentAddress
                          : "N/A"}
                      </div>
                    </div>
                  </div>
                  <button
                    className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-200 bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                    onClick={() => setHideForm(!hideForm)}
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
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Name
                        </label>
                        <input
                          name="name"
                          defaultValue={data.name}
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Enter Your Name"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                        >
                          Email
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          defaultValue={user.email}
                          readOnly
                          id="grid-last-name"
                          type="text"
                          placeholder="Doe"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Gender
                        </label>
                        <select
                          name="gender"
                          id=""
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                        >
                          Contact No.
                        </label>
                        <input
                          defaultValue={
                            data.contactNumber ? data.contactNumber : ""
                          }
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          name="contactNumber"
                          id="grid-last-name"
                          type="text"
                          placeholder="Enter Your Contact Number"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Current Address
                        </label>
                        <input
                          defaultValue={
                            data.currentAddress ? data.currentAddress : ""
                          }
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          name="currentAddress"
                          type="text"
                          placeholder="Enter Your Current Address"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                        >
                          Permanent Address
                        </label>
                        <input
                          defaultValue={
                            data.permanentAddress ? data.permanentAddress : ""
                          }
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          name="permanentAddress"
                          id="grid-last-name"
                          type="text"
                          placeholder="Enter Your Permanent Address"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center gap-10">
                      <button className="text-white py-2 px-5 rounded-sm bg-sky-500 hover:bg-sky-600">
                        Update
                      </button>
                      <button
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
