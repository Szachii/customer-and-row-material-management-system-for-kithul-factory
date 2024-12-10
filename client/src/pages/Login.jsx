import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen bg-[url('./images/login_back.jpg')] bg-cover bg-center flex justify-center items-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main container */}
      <div className="w-11/12 sm:w-[90%] md:w-[30vw] h-[85vh] bg-white opacity-90 border-2 border-slate-500 rounded-2xl ">
        
        {/* Header Image */}
        <div className="w-full h-[40vh] bg-[url('./images/login_back.jpg')] bg-cover bg-center rounded-t-2xl mb-5"></div>

        {/* Form */}
        <form action="" className="flex flex-col gap-5 justify-center items-center">
          <input
            type="text"
            className="w-full sm:w-[80%] h-[5vh] border-2 border-black rounded-lg pl-2"
            placeholder="UserName"
          />
          <input
            type="password"
            className="w-full sm:w-[80%] h-[5vh] border-2 border-black rounded-lg pl-2"
            placeholder="Password"
          />
          <Link to="/ForgotPassword" className="text-blue-500 hover:underline text-sm md:text-base">
            Forgot Password.?
          </Link>
          <button className="w-full sm:w-[60%] h-[6vh] bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors">
            LOGIN
          </button>
        </form>

        {/* SignUp Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-4">
          <p className="text-center text-sm md:text-base">
            Don't have an account?{' '}
            <Link to="/Register" className="text-blue-500 hover:underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
