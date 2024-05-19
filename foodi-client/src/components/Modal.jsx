import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const { signUpWithGmail, login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  // redirecting to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email,password);
    login(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        const userInfor = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post("/users", userInfor).then((res) => {
          // console.log(res);
          alert("Signin successful!");
          navigate(from, { replace: true });
        });
        // console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage("Please provide valid email & password!");
      });
    reset();
  };
  // login with google
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        const userInfor = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        axiosPublic.post("/users", userInfor).then((res) => {
          // console.log(res);
          alert("Signin successful!");
          navigate("/");
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action mt-0 flex flex-col justify-center">
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="font-bold text-lg">Login</h2>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password")}
              />
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* error text */}
            {errorMessage ? (
              <p className="text-red text-xs italic">{errorMessage}</p>
            ) : (
              ""
            )}
            {/* login btn */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="login"
                className="btn bg-green text-white"
              />
            </div>
            {/* sign up line */}
            <p className="text-center my-2">
              Don't have an account?{" "}
              <Link className="underline text-red ml-1" to="/signup">
                Signup Here
              </Link>
            </p>
            {/* close btn */}
            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {/* social sign in btn */}
          <div className="text-center space-x-5 mb-5">
            <button
              onClick={handleRegister}
              className="btn btn-circle hover:bg-green hover:text-white"
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaFacebookF />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
