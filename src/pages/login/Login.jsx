import Lottie from "lottie-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import loginAnimation from "../../assets/animation/login-animation.json";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;

    console.log(email, password);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full flex-col lg:flex-row ">
        <div className="text-center w-1/2 ">
          <Lottie
            className="h-[400px]"
            animationData={loginAnimation}
            loop={false}
          ></Lottie>
        </div>

        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold mt-6 text-center">Login now!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email")}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password")}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline  ">Login</button>
            </div>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <Link to="/login">
              <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                Already have an account?
                <a href="#" className="font-medium text-gray-900">
                  Login
                </a>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
