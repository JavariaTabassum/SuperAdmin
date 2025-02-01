import { useState } from "react";
import { FaEdit, FaTrashAlt, FaSort } from "react-icons/fa";

const Categoryform = () => {
  const [categories, setCategories] = useState([
    { category: "Cosmetics", subCategory: "Cosmetics" },
    { category: "Cosmetics", subCategory: "Cosmetics" },
  ]);

  return (
    <div className="bg-white h-screen font-poppins mb-7 me-8">
    <div className="flex  justify-center p-4">
      <div className=" p-6 rounded-lg w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-4 mb-6 bg-white shadow-lg rounded-lg p-10">
          <div>
            <label className="block text-[#6F757E] mb-2">Category</label>
            <input
              type="text"
              value="Minimal sofa"
              className="w-full border border-[#E1E1E1] p-3 rounded-full text-[#6F757E]"
            />
          </div>
          <div>
            <label className="block text-[#6F757E] mb-2">Sub-Category</label>
            <input
              type="text"
              value="2"
              className="w-full border border-[#E1E1E1] p-3 rounded-full text-[#6F757E]"
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex justify-between font-medium text-[#050F24] text-xl font-ibm-plex  pb-2 mb-4">
            <p>Category</p>
            <p>Sub Category</p>
            <div><FaSort /></div>
            
          </div>
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white shadow-lg rounded-lg mb-2 px-5 py-7"
            >
              <span>{item.category}</span>
              <span>{item.subCategory}</span>
              <div className="flex items-center space-x-4 ">
                                <button className="text-[rgba(236,0,140,1)] bg-[#F5F5F5] p-3 rounded-full">
                                    <FaEdit />
                                </button>
                                <button className="text-[rgba(236,0,140,1)] bg-[#F5F5F5] p-3 rounded-full">
                                    <FaTrashAlt />
                                </button>
                            </div>
            </div>
          ))}
          <div className="flex justify-end">
          <button className="bg-[#EC008C]  text-white py-2 rounded-full px-16 mt-4 ">
            Save
          </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Categoryform;
