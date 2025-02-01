import React, { useState } from 'react';
import logo from '../../images/logo.jpg';
import Pages from '../../images/pages.png';
import Product from '../../images/product.png';
import Profilelogo from '../../images/profile.png';
import Home from '../../images/Home.png';
import Calender from '../../images/calendar.png';
import Bell from '../../images/notification.png';
import message from '../../images/message.png';
import Web from '../../images/GlobeSimple.png';
import Emp from '../../images/UsersThree.png';
import Cimg from '../../images/c-img.png';
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const location = useLocation();
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen((prev) => !prev);
  };

  const menuItems = [
    { path: '/dashboard', name: 'Dashboard', icon: Home },
    { path: '/sales', name: 'Sales', icon: Pages },
    {
      name: 'Product',
      icon: Product,
      dropdown: true,
      subItems: [
        { path: '/allproduct', name: 'All Products' },
        { path: '/editproduct', name: 'Edit Product' },
        { path: '/status', name: 'Status' },
      ],
    },
    { path: '/shipping', name: 'Shipping', icon: Bell },
    { path: '/order', name: 'Order', icon: Calender },
    { path: '/message', name: 'Message', icon: message },
    { path: '/profile', name: 'Profile', icon: Profilelogo },
    { path: '/sociallinks', name: 'Social Media Links', icon: Web },
    { path: '/employee', name: 'Add Employee', icon: Emp },
    { path: '/category', name: 'Category', icon: Cimg },

  ];

  const isProductSubitemActive = menuItems
    .find((item) => item.name === 'Product')
    ?.subItems.some((subItem) => location.pathname === subItem.path);

  return (
    <>
      <div
        className={`sidebar top-0 left-0 bg-white shadow-md flex rounded-[20px] flex-col p-6 m-7 transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? 'translate-x-0' : 'translate-x-[-100%]'
        }`}
      >
        <div className="flex items-center mb-8 justify-center">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </div>

        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl text-gray-700 close"
        >
          <FaTimes />
        </button>

        <ul className="space-y-4 font-ibm-plex text-[rgba(111,117,126,1)]">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              {item.dropdown ? (
                <>
                  <button
                    onClick={toggleProductDropdown}
                    className={`flex items-center justify-between w-full p-2 rounded-t-md font-medium transition ${
                      isProductDropdownOpen || isProductSubitemActive
                        ? 'bg-pink-500 text-white'
                        : 'text-gray-700 hover:text-pink-500'
                    }`}
                    style={{
                      backgroundColor:
                        isProductDropdownOpen || isProductSubitemActive
                          ? '#FF0090'
                          : 'transparent',
                      borderTopLeftRadius: '12px',
                      borderTopRightRadius: '12px',
                      marginBottom: 0,
                    }}
                  >
                    <div className="flex items-center">
                      <img
                        src={item.icon}
                        alt=""
                        className={`w-5 h-5 mr-3 ${
                          isProductDropdownOpen || isProductSubitemActive
                            ? 'filter-white'
                            : ''
                        }`}
                        style={{
                          filter:
                            isProductDropdownOpen || isProductSubitemActive
                              ? 'brightness(0) invert(1)'
                              : 'none',
                        }}
                      />
                      {item.name}
                    </div>
                    {isProductDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {isProductDropdownOpen && (
                    <ul className="p-0 space-y-1 bg-pink-500 rounded-b-md">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <NavLink
                            to={subItem.path}
                            className={`block p-2 font-medium transition ${
                              location.pathname === subItem.path
                                ? 'bg-pink-500 text-white'
                                : 'text-white hover:bg-pink-600'
                            }`}
                            style={{
                              backgroundColor:
                                location.pathname === subItem.path
                                  ? '#FF0090'
                                  : 'transparent',
                            }}
                          >
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={`flex items-center p-2 rounded-md font-medium transition ${
                    location.pathname === item.path
                      ? 'bg-[rgba(236,0,140,1)] text-white'
                      : 'text-gray-700 hover:text-pink-500'
                  }`}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className={`w-5 h-5 mr-3 ${
                      location.pathname === item.path ? 'filter-white' : ''
                    }`}
                    style={{
                      filter:
                        location.pathname === item.path
                          ? 'brightness(0) invert(1)'
                          : 'none',
                    }}
                  />
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style>
        {`
          /* Sidebar for screens below 1050px */
          @media (max-width: 1050px) {
            .sidebar {
              display: ${isSidebarVisible ? 'block' : 'none'};
              z-index: 60;
              position: fixed;
              top: 0;
              left: 0;
              height: 100%;
              margin-left: 0;
              margin-top: 0;
              box-shadow: none;
              width: 16rem;
              transform: translateX(-100%);
              transition: transform 0.7s ease-in-out;
            }

            .sidebar.translate-x-0 {
              transform: translateX(0);
            }
          }
            
          @media (min-width: 1050px) {
            .sidebar {
              display: flex;
              height: 100vh;
              width: 16rem;
              transform: translateX(0);
            }
             
            .close{
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
