import React, { useState } from "react";

const EmployeeAccess = () => {
  const [access, setAccess] = useState({
    product: false,
    shipping: false,
    order: false,
    sales: false,
    message: false,
  });

  const toggleAccess = (key) => {
    setAccess((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white p-7 rounded-2xl w-[850px]">
        <form>
          <h1 className="text-lg mb-5 font-medium font-ibm-plex">Permission Access</h1>

          {Object.keys(access).map((key) => (
            <div key={key} className="mb-5 flex items-center justify-between w-full p-4 border text-md font-inter border-white text-[#444444] rounded-md bg-[#FBFBFB]">
              <p className="capitalize">{key} Access</p>
              <div
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                  access[key] ? "bg-black" : "bg-slate-200 border border-gray-400"
                }`}
                onClick={() => toggleAccess(key)}
              >
                <div
                  className={`w-6 h-6 rounded-full transform transition-all duration-300 ${
                    access[key] ? "translate-x-6 bg-white" : "translate-x-0 bg-white border border-gray-400"
                  }`}
                ></div>
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-9">
            <button className="bg-[#EC008C] text-white px-16 py-2 font-inter rounded-full">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeAccess;
