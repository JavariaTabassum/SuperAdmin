import React from "react";
import { FaPen, FaTrashAlt, FaEllipsisH } from 'react-icons/fa';

const LatestOrders = () => {
  const orders = [
    { product: "Analog Table Clock", qty: 2, date: "Feb 5, 2020", revenue: "$253.82", profit: "$60.76", status: "Pending", imgUrl: "https://via.placeholder.com/50" },
    { product: "Basket with handles", qty: 3, date: "Sep 8, 2020", revenue: "$556.24", profit: "$66.41", status: "Shipping", imgUrl: "https://via.placeholder.com/50" },
    { product: "Flower vase", qty: 3, date: "Dec 21, 2020", revenue: "$115.26", profit: "$95.66", status: "Refund", imgUrl: "https://via.placeholder.com/50" },
    { product: "Deco accessory", qty: 2, date: "Aug 13, 2020", revenue: "$675.51", profit: "$84.80", status: "Completed", imgUrl: "https://via.placeholder.com/50" },
    { product: "Pottery Vase", qty: 2, date: "May 8, 2020", revenue: "$910.71", profit: "$46.52", status: "Shipping", imgUrl: "https://via.placeholder.com/50" },
    { product: "Rose Holdback", qty: 4, date: "Nov 15, 2020", revenue: "$897.90", profit: "$81.54", status: "Completed", imgUrl: "https://via.placeholder.com/50" },
    { product: "Table Lamp", qty: 4, date: "Sep 14, 2020", revenue: "$563.43", profit: "$17.46", status: "Pending", imgUrl: "https://via.placeholder.com/50" },
    { product: "Wall Clock", qty: 3, date: "May 15, 2020", revenue: "$883.96", profit: "$43.08", status: "Refund", imgUrl: "https://via.placeholder.com/50" },
    { product: "Flowering Cactus", qty: 2, date: "Sep 2, 2020", revenue: "$162.15", profit: "$86.65", status: "Completed", imgUrl: "https://via.placeholder.com/50" },
    { product: "Shell Collection", qty: 4, date: "Sep 20, 2020", revenue: "$378.34", profit: "$49.08", status: "Completed", imgUrl: "https://via.placeholder.com/50" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-orange-500";
      case "Shipping":
        return "text-blue-500";
      case "Refund":
        return "text-red-500";
      case "Completed":
        return "text-green-500";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg font-inter mb-7">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[rgba(28,42,83,1)] font-inter" style={{fontWeight: "600", fontSize: "20px"}} >Latest Orders</h2>
        <a href="#" className="text-md font-semibold text-gray-800 hover:underline">
          More &rarr;
        </a>
      </div>
      <div className="overflow-x-auto">
      <table
          className="table-auto min-w-[900px] text-left border-collapse"
          style={{ tableLayout: "fixed" }}
        >
          <thead>
          <tr className="bg-gray-100 text-[rgba(142,149,169,1)]">
              <th className="p-3 w-1/4 whitespace-nowrap">Products</th>
              <th className="p-3 w-1/12 whitespace-nowrap">QTY</th>
              <th className="p-3 w-1/6 whitespace-nowrap">Date</th>
              <th className="p-3 w-1/6 whitespace-nowrap">Revenue</th>
              <th className="p-3 w-1/6 whitespace-nowrap">Net Profit</th>
              <th className="p-3 w-1/8 whitespace-nowrap">Status</th>
              <th className="p-3 w-1/8 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[rgba(142,149,169,1)]">
            {orders.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="p-3 flex items-center space-x-3">
                  <img src={order.imgUrl} alt={order.product} className="w-12 h-12 rounded-full" />
                  <span>{order.product}</span>
                </td>
                <td className="p-3">{`x${order.qty}`}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">{order.revenue}</td>
                <td className="p-3">{order.profit}</td>
                <td className={`p-3 font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <button className=" text-[rgba(200,202,216,1)] hover:text-gray-400">
                      <FaPen />
                    </button>
                    <button className=" text-[rgba(200,202,216,1)] hover:text-gray-400">
                      <FaTrashAlt />
                    </button>
                    <button className=" text-[rgba(200,202,216,1)] hover:text-gray-400">
                      <FaEllipsisH />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrders;
