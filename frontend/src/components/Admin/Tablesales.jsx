import React from "react";
import { FaPen, FaTrashAlt, FaEllipsisH } from 'react-icons/fa';

const LatestOrders = ({ searchQuery })=> {
  const orders = [
    {
      orderId: "#53200002",
      products: [
        { name: "Analog Table Clock", imgUrl: "https://via.placeholder.com/50" },
        { name: "Cream Jar", imgUrl: "https://via.placeholder.com/50" },
        { name: "Wooden Table", imgUrl: "https://via.placeholder.com/50" },
        { name: "Floor Lamp", imgUrl: "https://via.placeholder.com/50" },
        { name: "Wall Art", imgUrl: "https://via.placeholder.com/50" },
      ],
      qty: 8,
      date: "Jan 10, 2020",
      customer: "Ronald Jones",
      revenue: "$253.82",
      profit: "$60.76",
      status: "Pending"
    },
    {
      orderId: "#53200003",
      products: [
        { name: "Basket with Handles", imgUrl: "https://via.placeholder.com/50" },
        { name: "Decorative Pillow", imgUrl: "https://via.placeholder.com/50" },
        { name: "Wall Mirror", imgUrl: "https://via.placeholder.com/50" },
      ],
      qty: 5,
      date: "Sep 4, 2020",
      customer: "Jacob McKinney",
      revenue: "$556.24",
      profit: "$66.41",
      status: "Shipping"
    },
    {
      orderId: "#53200004",
      products: [
        { name: "Flower Vase", imgUrl: "https://via.placeholder.com/50" },
        { name: "Floor Rug", imgUrl: "https://via.placeholder.com/50" },
      ],
      qty: 2,
      date: "Aug 30, 2020",
      customer: "Randall Murphy",
      revenue: "$115.26",
      profit: "$95.66",
      status: "Refund"
    },
    {
      orderId: "#53200005",
      products: [
        { name: "Table Lamp", imgUrl: "https://via.placeholder.com/50" },
        { name: "Wall Art", imgUrl: "https://via.placeholder.com/50" },
      ],
      qty: 2,
      date: "Aug 29, 2020",
      customer: "Philip Webb",
      revenue: "$675.51",
      profit: "$84.80",
      status: "Completed"
    },
    {
      orderId: "#53200006",
      products: [
        { name: "Pottery Vase", imgUrl: "https://via.placeholder.com/50" },
        { name: "Floor Rug", imgUrl: "https://via.placeholder.com/50" },
        { name: "Wall Clock", imgUrl: "https://via.placeholder.com/50" },
        { name: "Candle Holder", imgUrl: "https://via.placeholder.com/50" },
      ],
      qty: 4,
      date: "Dec 26, 2020",
      customer: "Arthur Bell",
      revenue: "$910.71",
      profit: "$46.52",
      status: "Shipping"
    },
    {
      orderId: "#53200007",
      products: [
        { name: "Wooden Chair", imgUrl: "https://via.placeholder.com/50" },
        { name: "Decorative Pillow", imgUrl: "https://via.placeholder.com/50" },
        { name: "Lamp Shade", imgUrl: "https://via.placeholder.com/50" },
        { name: "Table Runner", imgUrl: "https://via.placeholder.com/50" },
      ],
      qty: 5,
      date: "Apr 27, 2020",
      customer: "Gregory Nguyen",
      revenue: "$897.90",
      profit: "$81.54",
      status: "Completed"
    },
    {
      orderId: "#53200008",
      products: [
        { name: "Table Clock", imgUrl: "https://via.placeholder.com/50" },
        { name: "Wall Art", imgUrl: "https://via.placeholder.com/50" },
        { name: "Vase", imgUrl: "https://via.placeholder.com/50" },
      ],
      qty: 3,
      date: "May 5, 2020",
      customer: "Soham Henry",
      revenue: "$563.43",
      profit: "$17.46",
      status: "Pending"
    },
    {
      orderId: "#53200009",
      products: [
        { name: "Lamp Shade", imgUrl: "https://via.placeholder.com/50" },
        { name: "Wooden Table", imgUrl: "https://via.placeholder.com/50" },
        { name: "Wall Art", imgUrl: "https://via.placeholder.com/50" },
      ],
      qty: 5,
      date: "Oct 15, 2020",
      customer: "Jenny Hawkins",
      revenue: "$883.96",
      profit: "$43.08",
      status: "Refund"
    },
    {
      orderId: "#5320010",
      products: [
        { name: "Vase", imgUrl: "https://via.placeholder.com/50" },
        { name: "Wooden Chair", imgUrl: "https://via.placeholder.com/50" },
        { name: "Lamp Shade", imgUrl: "https://via.placeholder.com/50" },
        { name: "Wall Mirror", imgUrl: "https://via.placeholder.com/50" },
      ],
      qty: 4,
      date: "Jul 12, 2020",
      customer: "Diane Cooper",
      revenue: "$162.15",
      profit: "$86.65",
      status: "Completed"
    },
    {
      orderId: "#5320012",
      products: [
        { name: "Table Clock", imgUrl: "https://via.placeholder.com/50" },
        { name: "Decorative Vase", imgUrl: "https://via.placeholder.com/50" },
      ],
      qty: 2,
      date: "Jun 28, 2020",
      customer: "Max Williamson",
      revenue: "$378.34",
      profit: "$49.08",
      status: "Completed"
    }
  ];

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <th className="p-3 w-1/7 whitespace-nowrap">Order ID</th>
              <th className="p-3  w-1/4 whitespace-nowrap">Products</th> 
              <th className="p-3 w-1/12 whitespace-nowrap">QTY</th>
              <th className="p-3 w-1/3">Date</th>
              <th className="p-3 w-1/3 whitespace-nowrap">Customer</th>
              <th className="p-3 w-1/4 whitespace-nowrap">Revenue</th>
              <th className="p-3 w-1/2 whitespace-nowrap">Net Profit</th>
              <th className="p-3 whitespace-nowrap">Status</th>
              <th className="p-3 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[rgba(142,149,169,1)]">
          {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{order.orderId}</td>
                <td className="p-3 flex items-center space-x-3" style={{width: "200px"}}> {/* Fixed width */}
                  <div className="grid grid-cols-2 gap-2">
                    {order.products.slice(0, 3).map((product, idx) => (
                      <img
                        key={idx}
                        src={product.imgUrl}
                        alt={product.name}
                        className="w-12 h-12 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-200 text-gray-700">
                      {order.qty}
                    </div>
                  </div>
                  <span className="ml-3">{`${order.qty} Items`}</span>
                </td>
                <td className="p-3">{`x${order.qty}`}</td>
                <td className="p-3"style={{ width: "150px", whiteSpace: "nowrap" }} >{order.date}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.revenue}</td>
                <td className="p-3">{order.profit}</td>
                <td className={`p-3 font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <button className="text-[rgba(200,202,216,1)] hover:text-gray-400">
                      <FaPen />
                    </button>
                    <button className="text-[rgba(200,202,216,1)] hover:text-gray-400">
                      <FaTrashAlt />
                    </button>
                    <button className="text-[rgba(200,202,216,1)] hover:text-gray-400">
                      <FaEllipsisH />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
                <td colSpan="9" className="text-center p-4 text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrders;
