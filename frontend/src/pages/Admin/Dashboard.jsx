import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import SummaryCards from '../../components/Admin/SummaryCard';
import Charts from '../../components/Admin/Charts';
import Table from '../../components/Admin/Tabledashboard';
import { FaBars } from 'react-icons/fa';

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); 

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

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

        <div className="flex flex-col flex-1 overflow-x-hidden">
          <h2 className="mt-10 text-3xl  font-inter" style={{ color: "rgba(5, 15, 36, 1)", fontWeight: "500" }}>Dashboard</h2>

          <div className="mt-5 -ml-10">
            <SummaryCards />
          </div>

          <div className="me-5">
            <Charts />
          </div>

          <div className="mt-8 me-5">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
