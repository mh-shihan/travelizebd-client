import Lottie from "lottie-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginAnimation from "../../assets/animation/login-animation.json";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../shared/socialLogin/SocialLogin";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;

    signIn(email, password)
      .then((res) => {
        if (res?.user) {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          navigate("/");
        }
      })
      .catch((error) => {
        const err = error.message;
        setErrorMessage(err);
      });
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
              <button className="btn btn-outline text-2xl">Login</button>
            </div>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <p className="block mt-2 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
              New to this site?
              <Link to="/signUp">
                <a className="font-medium text-gray-900">Register</a>
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
