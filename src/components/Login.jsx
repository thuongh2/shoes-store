import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderAuth from "./base/HeaderAuth";

const Login = () => {
  return (
    <>
      <HeaderAuth />

      <div className="h-fit w-full grid place-items-center lg:mt-5">
        <div className="h-fit w-[80%] md:border rounded-md grid grid-cols-1 lg:grid-cols-2">
          <div className="grid place-items-center p-3">
            <div className="">
              <h1 className="font-bold text-3xl">Login</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <div className="my-5">
                <div className="p-2 m-3 border rounded-3xl flex gap-x-16  hover:cursor-pointer">
                  <FcGoogle size={25} />
                  <span className="text-center">Sign in with Google</span>
                </div>
                <div className="p-2 m-3 border rounded-3xl flex gap-x-16  hover:cursor-pointer">
                  <FaFacebook size={25} color="blue" />
                  <p>Sign in with Facebook</p>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center w-full p-2">
                <hr />
                <span className="px-2 text-sm text-gray-400">
                  or login with email
                </span>
                <hr />
              </div>
              <div className="p-2">
                <form action="">
                  <div className="">
                    <label className="block font-medium">Email</label>
                    <input
                      className="w-full px-4 py-3 my-2 rounded-3xl outline-cyan-500 border border-gray-400"
                      type="text"
                      placeholder="Enter your email"
                      name="username"
                    ></input>
                  </div>
                  <div className="">
                    <label className="block font-medium">Password</label>
                    <input
                      className="w-full px-4 py-3 my-2 rounded-3xl outline-cyan-500 border border-gray-400"
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                    ></input>
                  </div>
                  <div className="text-right m-2">
                    <a href="/" className="text-blue-700 font-semibold">
                      Forget password
                    </a>
                  </div>
                  <input
                    className="w-full p-3 my-2 rounded-3xl bg-blue-700 text-white hover:cursor-pointer"
                    type="submit"
                    value="Submit"
                  ></input>
                </form>
                <div className="text-center m-2">
                  <Link to="/signup" className="text-blue-700 font-semibold">
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline bg-blue-300"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
