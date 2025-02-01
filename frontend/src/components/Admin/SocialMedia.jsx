import React from "react";

const SocialMedia = () => {
  return (
      <div className="bg-white p-10 rounded-2xl w-full">
        <form>
          <div className="mb-5">
            <label className="block text-[#5E5E5E] text-lg font-inter mb-2">Facebook</label>
            <input
              type="text"
              className="w-3/4 p-4 border border-white rounded-md bg-[#FBFBFB]"
              placeholder="Enter Facebook username"
              defaultValue="abc"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[#5E5E5E] text-lg font-inter mb-2">Instagram</label>
            <input
              type="text"
              className="w-3/4 p-4 border border-white rounded-md bg-[#FBFBFB]"
              placeholder="Enter Instagram username"
              defaultValue="abc"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[#5E5E5E] text-lg font-inter mb-2">Email</label>
            <input
              type="email"
              className="w-3/4 p-4 border border-white rounded-md bg-[#FBFBFB] "
              placeholder="Enter Email address"
              defaultValue="abc"
            />
          </div>

          <div className="flex justify-end mt-9 ">
            <button className="bg-[#EC008C] text-white px-16 py-2 font-inter rounded-full ">
              Save
            </button>
          </div>
        </form>
      </div>
  );
};

export default SocialMedia;
