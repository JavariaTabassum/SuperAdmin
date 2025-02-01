import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Chatuser = () => {
  const [messages, setMessages] = useState([
    { id: 1, name: "Roselle Ehrman", message: "Ok lets got it", time: "09:30 AM", isActive: true },
    { id: 2, name: "Leatrice Kulik", message: "back to meeting", time: "08:30 AM", isActive: false },
    { id: 3, name: "James B", message: "Voice message 00:30", time: "06:15 PM", isActive: false },
    { id: 4, name: "Jone Smith", message: "Voice message 00:30", time: "1 Day ago", isActive: false },
    { id: 5, name: "Darron", message: "sent an attachment", time: "2 Day ago", isActive: false },
    { id: 6, name: "Natalia", message: "will do....", time: "4 Day ago", isActive: false },
    { id: 7, name: "Emillio", message: "Thanks...", time: "4 Day ago", isActive: false },
    { id: 8, name: "Adriana", message: "Will back soon...", time: "7 Day ago", isActive: false },
  ]);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="chat-box mx-auto bg-white rounded-lg  shadow-lg p-4">
      <style>
        {`
          .dropdown-content::-webkit-scrollbar {
            width: 3px;
          }
          .dropdown-content:hover::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 2px;
          }
            
          @media (max-width: 800px) {
             .chat-box {
              width: 270px;
              padding: 0px;
              padding-left: 10px;
              padding-top: 8px;
              padding-right: 10px;
             }

            .dropdown-content {
            max-height: ${isDropdownVisible ? "300px" : "0"};
            overflow-y: auto;
            transition: max-height 0.3s ease;
            }
            .rotate-180 {
              transform: rotate(180deg);
            }

            .chevron-icon {
              display: block;
            }
          }

          @media (min-width: 801px) {
              .chevron-icon {
              display: none;
            }
          }
        `}
      </style>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-medium font-ibm-plex">New Message</h1>
        <button
          onClick={toggleDropdown}
          className="text-gray-500 focus:outline-none chevron-icon"
        >
          <FaChevronDown
            className={`transform transition-transform ${
              isDropdownVisible ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div className="dropdown-content overflow-y-auto h-[500px] font-poppins">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-center gap-3 p-3 mb-2 rounded-lg cursor-pointer ${
              msg.isActive ? "bg-[rgba(236,0,140,1)] text-white" : "hover:bg-gray-100"
            }`}
          >
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <h2 className={`font-medium ${msg.isActive ? "text-white" : "text-gray-900"}`}>
                {msg.name}
              </h2>
              <p className={`text-sm ${msg.isActive ? "text-white" : "text-[rgba(111,117,126,1)]"}`}>
                {msg.message}
              </p>
            </div>
            <span className={`text-xs ${msg.isActive ? "text-white" : "text-[rgba(111,117,126,1)]"}`}>
              {msg.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatuser;