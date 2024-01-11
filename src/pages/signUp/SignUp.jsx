import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { createUser, updateUser } = useAuth();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    const photo = data?.photo;
    console.log(name, email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        if (res?.user) {
          updateUser(name, photo).then(() => {});
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        const err = error.message;
        setErrorMessage(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name")}
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="photo"
                name="photo"
                {...register("photo")}
                placeholder="photo url"
                className="input input-bordered"
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
              <button className="btn btn-primary">Login</button>
            </div>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <Link to="/login">
              <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                Already have an account?
                <a href="#" className="font-medium text-gray-900">
                  Sign In
                </a>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
