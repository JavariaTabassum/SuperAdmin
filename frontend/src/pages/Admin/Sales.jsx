import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import SummaryCards from '../../components/Admin/SummaryCard';
import Table from '../../components/Admin/Tablesales';
import Graph from '../../components/Admin/Graph';
import { FaBars } from 'react-icons/fa';

const Sales = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <div className="flex w-full min-h-screen bg-slate-100">
      <style>
        {`
          .menu-icon { display: none; }
          @media (max-width: 1050px) { .menu-icon { display: block; } }
          @media (min-width: 1050px) { .margin{ margin-left: 300px; } }
        `}
      </style>

      <div className='fixed h-[full]'>
        <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex flex-col flex-1 overflow-x-hidden ml-4 margin">
        <button className="menu-icon mt-7 text-2xl text-gray-700" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <div className="flex flex-col flex-1 overflow-x-hidden">
          <h2 className="mt-10 text-3xl font-inter" style={{ color: "rgba(5, 15, 36, 1)", fontWeight: "500" }}>Orders</h2>

          <div className="mt-8">
            <input
              type="text"
              placeholder="Search by customer or date..."
              className="p-4 w-full max-w-md border z-1 border-gray-300 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="mt-8 -ml-10 z-0">
            <SummaryCards />
          </div>

          <div className="me-5">
            <Graph />
          </div>

          <div className="mt-8 me-5">
            <Table searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
