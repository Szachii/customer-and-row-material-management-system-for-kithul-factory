import React from 'react'

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[url('./images/home.jpg')] bg-center bg-cover ">
      <h1 className="text-5xl font-bold"> WELCOME TO PRIME KITHUL</h1>
      <div className="flex flex-row gap-[5vw] mt-7">
        <button className="w-[8vw] h-[7vh] bg-gray-800 rounded-[10px] text-white">Login</button>
        <button className="w-[8vw] h-[7vh] bg-gray-800 rounded-[10px] text-white">Register</button>
      </div>
    </div>
  )
}
