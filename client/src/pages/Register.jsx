import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen bg-[url('./images/login_back.jpg')] bg-cover bg-center flex justify-center items-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main container */}
      <div className="w-11/12 sm:w-[90%] md:w-[35vw] h-auto bg-white opacity-95 border-2 border-slate-500 rounded-2xl flex flex-col items-center gap-5 py-6 px-4">

        {/* Title */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold mt-2">Register</p>

        {/* Form */}
        <form action="" className="w-full sm:w-[90%] md:w-[30vw] flex flex-col gap-5">

          <div className="flex flex-col gap-3">
            <p className="font-bold text-base sm:text-lg">User Details</p>
            <input
              type="text"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="UserName"
            />
            <input
              type="text"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="Mobile Number"
            />
            <input
              type="password"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="Password"
            />
            <input
              type="password"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="Re-Enter Password"
            />
          </div>

          {/* Register Button */}
          <div className="flex justify-center items-center">
            <button 
              className="bg-gray-800 text-white w-full sm:w-[60%] h-[6vh] rounded-lg mt-4 hover:bg-gray-900 transition-colors"
              onClick={()=>navigate("/Register2")}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
