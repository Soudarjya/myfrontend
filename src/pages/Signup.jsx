import React, { useState } from "react";
import { Mail, Lock,PersonStanding } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/actions/login_signup_Action";
export function Signup() {
  const [loading, setloading] = useState(false);
  const [success, setSuccess] = useState("");
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch=useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    setError("");
    setSuccess("");
    const userData = {
      name,
      email,
      password,
    };
    dispatch(signupUser(userData));
    setloading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Create Your Account</h1>

          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative mb-6 transition-all duration-300 group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-blue-500">
                {<PersonStanding size={20} />}
              </div>
              <input
                className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300 peer"
                placeholder="Name"
                required
                onChange={(e)=>setUsername(e.target.value)}
                />
              <label className="absolute left-10 -top-3.5 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500">
                {'Name'}
              </label>
            </div>
            <div className="relative mb-6 transition-all duration-300 group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-blue-500">
                {<Mail size={20} />}
              </div>
              <input
          
                className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300 peer"
                placeholder={"Email-Address"}
                required
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <label className="absolute left-10 -top-3.5 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500">
                {'Email Address'}
              </label>
            </div>
            <div className="relative mb-6 transition-all duration-300 group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-blue-500">
                {<Lock size={20} />}
              </div>
              <input
              type="text"
              value={password}
                className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300 peer"
                placeholder={"Password"}
                required
                onChange={(e)=>setPassword(e.target.value)}
              />
              <label className="absolute left-10 -top-3.5 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500">
                {'Password'}
              </label>
            </div>
              {loading ? (
               <button type="submit" disabled={loading}>Signing Up...</button>
              ) : (
                <button type='submit' className="bg-blue-600 p-2 text-white rounded-md">Sign Up</button>
              )}
          </form>
        </div>
      </div>
    </div>
  );
}
