import React, { useState, useEffect } from "react";

const mockOrders = [
  { id: 1, userId: 101, price: 300 },
  { id: 2, userId: 102, price: 450 },
  { id: 3, userId: 103, price: 150 },
  { id: 4, userId: 101, price: 250 },
  { id: 5, userId: 104, price: 500 },
  { id: 6, userId: 105, price: 200 },
  { id: 7, userId: 106, price: 350 },
  { id: 8, userId: 107, price: 600 },
  { id: 9, userId: 108, price: 400 },
  { id: 10, userId: 109, price: 320 },
  { id: 11, userId: 110, price: 250 },
  { id: 12, userId: 111, price: 290 },
  { id: 13, userId: 112, price: 700 },
  { id: 14, userId: 113, price: 600 },
  { id: 15, userId: 114, price: 500 },
  { id: 16, userId: 115, price: 350 },
  { id: 17, userId: 116, price: 180 },
  { id: 18, userId: 117, price: 230 },
  { id: 19, userId: 118, price: 420 },
  { id: 20, userId: 119, price: 150 },
];

const previousData = {
  revenue: 8000, 
  orders: 22,  
  users: 18,     
};

const SummaryCards = () => {
  const [summaryData, setSummaryData] = useState({
    revenue: 0,
    orders: 0,
    users: 0,
    revenueChange: "+0%",
    ordersChange: "+0%",
    usersChange: "+0%",
  });

  useEffect(() => {

    const calculateSummary = () => {

      const totalRevenue = mockOrders.reduce((acc, order) => acc + order.price, 0);

          
      const totalOrders = mockOrders.length;


      const uniqueUsers = new Set(mockOrders.map((order) => order.userId)).size;


      const revenueChange = ((totalRevenue - previousData.revenue) / previousData.revenue) * 100;
      const ordersChange = ((totalOrders - previousData.orders) / previousData.orders) * 100;
      const usersChange = ((uniqueUsers - previousData.users) / previousData.users) * 100;


      setSummaryData({
        revenue: totalRevenue,
        orders: totalOrders,
        users: uniqueUsers,
        revenueChange: `${revenueChange.toFixed(1)}%`,
        ordersChange: `${ordersChange.toFixed(1)}%`,
        usersChange: `${usersChange.toFixed(1)}%`,
      });
    };

    calculateSummary();
  }, []); 

  const data = [
    {
      title: "Revenue",
      value: `$${summaryData.revenue.toLocaleString()}`,
      change: summaryData.revenueChange,
    },
    {
      title: "Orders",
      value: summaryData.orders,
      change: summaryData.ordersChange,
    },
    {
      title: "Users",
      value: `${summaryData.users}K`,
      change: summaryData.usersChange,
    },
  ];

  return (
    <div className="summary-cards-container flex space-x-6 p-6 ">
      <style>
        {`
          .summary-cards-container {
            display: flex;
            gap: 1.5rem;
          }

          .summary-card {
            width: 300px;
          }
          @media (max-width: 1200px) and (min-width: 1050px) {
            .summary-cards-container {
             flex-wrap: wrap;
        }
             .summary-cards-container {
              justify-content: center;
            }

            .summary-card {
              margin-bottom: 1.5rem;
            }
          }

             @media (max-width: 900px){
            .summary-cards-container {
              justify-content: center;
              flex-wrap:wrap;
            }

            .summary-card {
              margin-bottom: 1.5rem;
            }
          }
        `}
      </style>

      {data.map((item, index) => {
        let lineColor;
        let wavePath = "M2 12c3-6 9-6 15 0 6 6 12 6 18 0"; 

        if (item.title === "Revenue") {
          lineColor = "#F59E0B"; 
        } else if (item.title === "Orders") {
          lineColor = "#EF4444"; 
          wavePath = "M2 12c3 6 9 6 15 0 6-6 12-6 18 0"; 
        } else if (item.title === "Users") {
          lineColor = "#10B981"; 
        }

        return (
          <div
            key={index}
            className="summary-card bg-white rounded-lg shadow-md p-6 flex items-center w-[300px]"
          >
            <div className="flex flex-col items-center w-full">
              <h3 className="font-inter text-md text-[rgba(142,149,169,1)] mb-2 font-medium">{item.title}</h3>
              <p className="text-2xl font-semibold font-inter text-[rgba(28,42,83,1)]">{item.value}</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div
                className="text-sm font-medium flex items-center"
                style={{ color: lineColor }}
              >
                <span>{item.change}</span>
              </div>

              <svg
                className="h-10 w-36"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 24"
                fill="none"
                stroke={lineColor}
                strokeWidth="2"
              >
                <path d={wavePath} strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="33" cy="12" r="1.5" fill={lineColor} />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryCards;
