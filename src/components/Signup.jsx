import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import HeaderAuth from "./base/HeaderAuth";

const Signup = () => {
  return (
    <>
      <HeaderAuth />
      <div className="h-fit w-full grid place-items-center lg:mt-4">
        <div className="h-full w-full lg:w-[80%] border rounded-md grid grid-cols-1 xl:grid-cols-2">
          <div className="hidden xl:inline shrink bg-blue-300"></div>
          <div className="grid place-items-center">
            <div className="p-3">
              <h1 className="font-bold text-3xl">Sign up</h1>
              <div className="my-5">
                <div className="p-2 m-3 border rounded-3xl flex gap-x-16  hover:cursor-pointer">
                  <FcGoogle size={25} />
                  <span className="text-center">Sign up with Google</span>
                </div>
                <div className="p-2 m-3 border rounded-3xl flex gap-x-16  hover:cursor-pointer">
                  <FaFacebook size={25} color="blue" />
                  <p>Sign up with Facebook</p>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center w-full p-2">
                <hr />
                <span className="px-2 text-sm text-gray-400">
                  or sign up with email
                </span>
                <hr />
              </div>
              <div className="p-2">
                <form action="">
                  <div className="lg:flex gap-3 w-full">
                    <div className="lg:w-1/2">
                      <label className="block font-medium">Name</label>
                      <input
                        className="w-full px-4 py-3 my-2 rounded-3xl outline-cyan-500 border border-gray-400"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                      ></input>
                    </div>
                    <div className="lg:w-1/2">
                      <label className="block font-medium">Username</label>
                      <input
                        className="w-full px-4 py-3 my-2 rounded-3xl outline-cyan-500 border border-gray-400"
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                      ></input>
                    </div>
                  </div>
                  <div className="">
                    <label className="block font-medium">Email</label>
                    <input
                      className="w-full px-4 py-3 my-2 rounded-3xl outline-cyan-500 border border-gray-400"
                      type="email"
                      placeholder="Enter your email"
                      name="email"
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
                    value="Create account"
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
