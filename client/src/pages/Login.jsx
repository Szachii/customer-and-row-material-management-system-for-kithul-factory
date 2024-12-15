import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';



export default function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const { username, password } = data;

    try {
      const { data } = await axios.post('/login', { username, password });
      if (data.error) {
        setErrorMessage(data.error);
        toast.error(data.error)
      }
      else {
        setErrorMessage('');
        setData({
          username: '',
          password: '',
        });
        toast.success('Login successful');
        navigate('/register2');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage("Inavlid username or password");
    }
  };

  return (
    <div className="relative h-screen bg-[url('./images/login_back.jpg')] bg-cover bg-center flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-11/12 sm:w-[90%] md:w-[30vw] h-[90vh] bg-white opacity-90 border-2 border-slate-500 rounded-2xl">
        <div className="w-full h-[40vh] bg-[url('./images/login_back.jpg')] bg-cover bg-center rounded-t-2xl mb-5"></div>


        <form onSubmit={loginUser} className="flex flex-col gap-5 justify-center items-center">
          <input
            type="text"
            className="w-full sm:w-[80%] h-[5vh] border-2 border-black rounded-lg pl-2"
            placeholder="UserName"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <input
            type="password"
            className="w-full sm:w-[80%] h-[5vh] border-2 border-black rounded-lg pl-2"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Link to="/ForgotPassword" className="text-blue-500 hover:underline text-sm md:text-base">
            Forgot Password.?
          </Link>
          <button
            type="submit"
            className="w-full sm:w-[60%] h-[6vh] bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors"
          >
            LOGIN
          </button>
        </form>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-4">
          <p className="text-center text-sm md:text-base">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              SignUp
            </Link>
          </p>
        </div>
        {errorMessage && (
          <div className="w-full text-center text-red-500 font-semibold mb-3">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}
