import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { button, div } from "framer-motion/client";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/login_signup_Action";
import EyeOpen from "../assets/EyeOpen.svg";
import EyeClose from "../assets/EyeClose.svg";
export function Login() {
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isEyeOpen, setisEyeOpen] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setloading(true);
    dispatch(loginUser(email, password));
  };

  const handleEyeToggle = () => {
    setisEyeOpen(!isEyeOpen);
    setformType(isEyeOpen ? "password" : "text");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
            <p className="text-gray-500">Sign in to your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative mb-6 transition-all duration-300 group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-blue-500">
                {<Mail size={20} />}
              </div>
              {/* <div> */}
              <input
                type="email"
                className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300 peer"
                placeholder={"Email-Address"}
                required
                onChange={(e) => setemail(e.target.value)}
              />
              {/* </div> */}
              <label className="absolute left-10 -top-3.5 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500">
                {'Email Address'}
              </label>
            </div>
            <div className="relative mb-6 transition-all duration-300 group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-blue-500">
                {<Lock size={20} />}
              </div>
              <input
                className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300 peer"
                placeholder={"Password"}
                required
                onChange={(e) => setPassword(e.target.value)}
                type={isEyeOpen ? "text" : "password"}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={handleEyeToggle}>
              <img
                className="w-5 h-5"
                src={isEyeOpen ? EyeOpen : EyeClose}
                onClick={handleEyeToggle}
                alt="toggle visibility"
              />
              </div>
              <label className="absolute left-10 -top-3.5 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500">
                {'Password'}
              </label>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <button type="submit" className="bg-blue-600 p-2 text-white rounded-md">Log in</button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>


          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to={'/signup'}
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
