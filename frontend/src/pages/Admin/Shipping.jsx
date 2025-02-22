import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import { FaBars } from 'react-icons/fa';
import CourierList from '../../components/Admin/Courierlist';

const Shipping = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

    return (
        <div className="flex w-full min-h-screen bg-slate-100">
            <style>
        {`
          .menu-icon {
            display: none; 
          }

          @media (max-width: 1050px) {
            .menu-icon {
              display: block;
            }
          }
          @media (min-width: 1050px) {
            .margin{
            margin-left: 300px;
            }
          }
        `}
      </style>

      <div className=' fixed h-[full]'>
      <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex flex-col flex-1 overflow-x-hidden ml-4 margin">
                <button
                    className="menu-icon mt-7 text-2xl text-gray-700"
                    onClick={toggleSidebar}
                >
                    <FaBars />
                </button>



                <div className="flex flex-col mt-10 me-8">
                    {/* Heading with Add New Button */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-ibm-plex" style={{ color: "rgba(5, 15, 36, 1)", fontWeight: "500" }} >Courier List</h2>
                        <button className="bg-[rgba(236,0,140,1)] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-pink-600 transition">
                            + Add New
                        </button>
                    </div>
                    <div className="mt-8 mb-10 -me-3">
                    <CourierList />
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Shipping;
