import React from 'react';

const Profileform = () => {
    
  return (
    <>
    <style>
    {`
          @media (max-width: 550px) {
            .col {
              display: flex; 
              flex-direction: column;
            }
            .p{
            width: 100%;
            }
          }
        `}
    </style>
   
    <div className="flex font-inter justify-center items-center ">
      <div className="p-8 w-full max-w-4xl">
        <div className="text-center mb-20">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 ">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl text-[rgba(54,54,54,1)] font-inter font-bold mt-4">Mukul Adhikari</h2>
          <p className="text-[rgba(83,58,58,1)] text-lg">Employee</p>
        </div>

        <form>
          <div className="grid text-[rgba(68,68,68,1)] col grid-cols-2 gap-6">
            <div>
              <label className="block text-md font-inter">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md p-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="Mukul Adhikari"
              />
            </div>
            <div>
              <label className="block text-md font-inter">Region</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md p-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="Rajarhat, Kolkata"
              />
            </div>
          </div>

          <div className="grid text-[rgba(68,68,68,1)] col grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-md font-inter">Category</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md p-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="Plumber"
              />
            </div>
            <div>
              <label className="block text-md font-inter">Address</label>
              <textarea
                className="mt-1 block w-full rounded-md p-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                rows="3"
                defaultValue="21/A B.K.C road,EM Block, Newtown,Kol - 700137"
              ></textarea>
            </div>
          </div>

          <div className="grid text-[rgba(68,68,68,1)] col grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-md font-inter ">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md p-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="Mukul@email.com"
              />
            </div>
            <div>
              <label className="block text-md font-inter">Contact No.</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md p-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="9642677232"
              />
            </div>
          </div>

          <div className="mt-4 text-[rgba(68,68,68,1)]">
            <label className="block text-md font-inter">Password</label>
            <input
              type="password"
              className="mt-1 block w-1/2 rounded-md  p p-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue="Helloworld"
            />
          </div>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Profileform;
