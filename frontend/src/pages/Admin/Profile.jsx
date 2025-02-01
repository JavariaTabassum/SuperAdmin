import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaBars } from 'react-icons/fa';
import Pencil from '../../images/ppencil.png';
import Trash from '../../images/pdustbin.png';
import Sidebar from '../../components/Admin/Sidebar';
import Profileform from '../../components/Admin/Profileform';

const Profile = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); 
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  const handleEditClick = () => {
    navigate('/profiled'); 
  };

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

        {/* Dashboard Content */}
        <div className="flex items-center me-8 mt-10 justify-between">
          <h2 className="text-3xl font-ibm-plex" style={{ color: "rgba(5, 15, 36, 1)", fontWeight: "500" }}>Profile</h2>
          <div className="ml-4 flex items-center space-x-8">
            <img src={Pencil} alt="" className="text-gray-600  w-6 h-6 hover:text-gray-700 cursor-pointer"
              onClick={handleEditClick} />

            <img src={Trash} alt="" className="text-red-500  w-5 h-6  hover:text-red-600 cursor-pointer" />
          </div>
        </div>
        <div className='me-5'>
          <Profileform />
        </div>
      </div>
    </div>
  );
};

export default Profile;
