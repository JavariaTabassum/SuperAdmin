import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Admin/Sidebar';
import { FaBars, FaPlusCircle } from 'react-icons/fa';
import AddEmployee from '../../components/Admin/AddEmployee';

const Employee = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); 
   const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  const handleAddEmployee = () => {
    navigate('/NewEmployee'); 
  };

  return (
    <div className="flex w-full max-h-full bg-slate-100">
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

        <div className="flex flex-col flex-1 overflow-x-hidden relative">
            <div className='bg-[#EC008C] px-5 py-3 rounded-full w-[180px] cursor-pointer absolute flex text-md text-white items-center gap-4 top-10 right-10' onClick={handleAddEmployee}>
               <FaPlusCircle /> Add Employee
            </div>

          <div className="mt-5 ml-5">
            <AddEmployee />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
