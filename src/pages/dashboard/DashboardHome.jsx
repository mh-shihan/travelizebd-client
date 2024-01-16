import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <section className="">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div className="w-full lg:w-1/3 rounded-sm">
          <img className="rounded-sm" src={user?.photoURL} alt="" />
          <p className="text-xl font-mono mt-3"> {user?.displayName}</p>
        </div>
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <h2 className="text-3xl font-semibold ">
            Welcome To{" "}
            <span className="text-4xl font-extrabold text-yellow">
              Traelize<span className="text-gray">BD</span>
            </span>
          </h2>
          <Link to={"/dashboard/profile"}>
            <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl mt-6 bg-yellow hover:bg-red-600 text-white ">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
