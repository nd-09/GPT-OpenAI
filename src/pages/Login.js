import React, { useState } from "react";
import Header from "../components/Header";
import { BACKGROUND_IMG } from "../utils/constants";

const Login = () => {
  const [isOnSignup, setIsOnSignUp] = useState(false);
  const handleToggleForm = () => {
    setIsOnSignUp(!isOnSignup);
  };
  return (
    <div>
      <Header />
      <div className="w-auto absolute">
        <img src={BACKGROUND_IMG} alt="background" />
      </div>
      <form className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80 rounded-md ">
        <h1 className="text-white font-bold text-3xl p-2 my-2">
          {isOnSignup ? "Sign Up" : "Sign In"}
        </h1>
        {isOnSignup && (
          <input
            type="text"
            placeholder="User Name"
            className="p-2 my-4 rounded-md w-full bg-[#333] text-white"
          ></input>
        )}
        <input
          type="email"
          placeholder="Email address"
          className="p-2 my-4 rounded-md w-full bg-[#333] text-white"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 rounded-md w-full bg-[#333] text-white"
        ></input>
        {isOnSignup && (
          <input
            type="password"
            placeholder="Confirm-Password"
            className="p-2 my-4 rounded-md w-full bg-[#333] text-white"
          ></input>
        )}
        <button
          type="submit"
          className=" bg-red-700 text-white p-2 mt-8 rounded-md w-full "
        >
          {isOnSignup ? "Sign Up" : "Sign In"}
        </button>
        <p className="p-1 text-gray-400 text-xs">
          {isOnSignup ? "Already a user?" : "New to GPT?"}{" "}
          <span
            className="text-white cursor-pointer"
            onClick={handleToggleForm}
          >
            {isOnSignup ? "Sign In." : "Sign up now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
