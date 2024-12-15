import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    username: '',
    password: '',
    mobile: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const registerUser = async (e) => {
    e.preventDefault();

    const { name, username, password, mobile } = data;

    // Form validation
    if (!name || !username || !password || !mobile) {
      setErrorMessage("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post('/register', { name, username, mobile, password });

      if (data.error) {
        setErrorMessage(data.error);
        toast.error(data.error);
      } else {
        setErrorMessage('');
        setData({ name: '', username: '', password: '', mobile: '' });
        setConfirmPassword('');
        toast.success('User registration successful');
        navigate('/register2');
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("Registration failed. Please try again.");
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="relative h-screen bg-[url('./images/login_back.jpg')] bg-cover bg-center flex justify-center items-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main container */}
      <div className="w-11/12 sm:w-[90%] md:w-[35vw] h-auto bg-white opacity-95 border-2 border-slate-500 rounded-2xl flex flex-col items-center gap-5 py-6 px-4">
        {/* Title */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold mt-2">Register</p>

        {errorMessage && (
          <div className="w-full text-center text-red-500 font-semibold mb-3">
            {errorMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={registerUser} className="w-full sm:w-[90%] md:w-[30vw] flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-base sm:text-lg">User Details</p>
            <input
              type="text"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="Full Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
              type="text"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="Username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <input
              type="text"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="Mobile Number"
              value={data.mobile}
              onChange={(e) => setData({ ...data, mobile: e.target.value })}
            />
            <input
              type="password"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <input
              type="password"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="Re-Enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-gray-800 text-white w-full sm:w-[60%] h-[6vh] rounded-lg mt-4 hover:bg-gray-900 transition-colors"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
