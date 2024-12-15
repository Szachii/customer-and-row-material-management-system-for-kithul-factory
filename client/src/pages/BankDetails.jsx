import React from 'react'

export default function BankDetails() {

  const addBankDetails = (e) => {
    e.preventDefault()
  }
  return (
    <div className="relative h-screen bg-[url('./images/login_back.jpg')] bg-cover bg-center flex justify-center items-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main container */}
      <div className="w-11/12 sm:w-[90%] md:w-[35vw] h-auto bg-white opacity-95 border-2 border-slate-500 rounded-2xl flex flex-col items-center gap-5 py-6 px-4">

        {/* Title */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold mt-2">Enter Bank Details</p>

        {/* Form */}
        <form onSubmit={addBankDetails} className="w-full sm:w-[90%] md:w-[30vw] flex flex-col gap-5">

          {/* Bank Details Section */}
          <div className="flex flex-col gap-3">
            <input
              type="text"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="Bank Account Number"
              
            />
            <input
              type="text"
              className="w-full h-[5vh] border-2 border-black rounded-lg pl-2"
              placeholder="Account Holder's Name"
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                className="w-full sm:w-[45%] h-[5vh] border-2 border-black rounded-lg pl-2"
                placeholder="Bank Name"
              />
              <input
                type="text"
                className="w-full sm:w-[45%] h-[5vh] border-2 border-black rounded-lg pl-2"
                placeholder="Branch Name"
              />
            </div>
          </div>

          {/* Register Button */}
          <div className="flex justify-center items-center">
            <button
              type='submit' 
              className="bg-gray-800 text-white w-full sm:w-[60%] h-[6vh] rounded-lg mt-4 hover:bg-gray-900 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
