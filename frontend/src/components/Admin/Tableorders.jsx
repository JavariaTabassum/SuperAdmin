import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderTable = () => {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const orders = [
    {
      id: "123245",
      customer: { name: "Esther Howard", id: "C0174569", avatar: "https://i.pravatar.cc/40?img=1" },
      date: "21-05-2024",
      product: "High ghee tirunelvali halwa",
      price: "₹300",
      status: "Delivered",
    },
    {
      id: "123248",
      customer: { name: "Esther Howard", id: "C0174570", avatar: "https://i.pravatar.cc/40?img=1" },
      date: "21-05-2024",
      product: "High ghee tirunelvali halwa",
      price: "₹300",
      status: "Delivered",
    },
    {
      id: "123249",
      customer: { name: "Esther Howard", id: "C0174572", avatar: "https://i.pravatar.cc/40?img=1" },
      date: "21-05-2024",
      product: "High ghee tirunelvali halwa",
      price: "₹300",
      status: "Delivered",
    },
    {
      id: "123246",
      customer: { name: "Esther Howard", id: "C0174573", avatar: "https://i.pravatar.cc/40?img=1" },
      date: "21-05-2024",
      product: "High ghee tirunelvali halwa",
      price: "₹300",
      status: "Delivered",
    },
    {
      id: "123243",
      customer: { name: "Esther Howard", id: "C0174574", avatar: "https://i.pravatar.cc/40?img=1" },
      date: "21-05-2024",
      product: "High ghee tirunelvali halwa",
      price: "₹300",
      status: "Delivered",
    },
    {
      id: "123240",
      customer: { name: "Esther Howard", id: "C0174575", avatar: "https://i.pravatar.cc/40?img=1" },
      date: "21-05-2024",
      product: "High ghee tirunelvali halwa",
      price: "₹300",
      status: "Delivered",
    },
    {
      id: "123235",
      customer: { name: "Esther Howard", id: "C0174576", avatar: "https://i.pravatar.cc/40?img=1" },
      date: "21-05-2024",
      product: "High ghee tirunelvali halwa",
      price: "₹300",
      status: "Delivered",
    },
    {
      id: "123241",
      customer: { name: "Esther Howard", id: "C0174577", avatar: "https://i.pravatar.cc/40?img=1" },
      date: "21-05-2024",
      product: "High ghee tirunelvali halwa",
      price: "₹300",
      status: "Delivered",
    },
    {
      id: "123242",
      customer: { name: "Esther Howard", id: "C0174577", avatar: "https://i.pravatar.cc/40?img=1" },
      date: "21-05-2024",
      product: "High ghee tirunelvali halwa",
      price: "₹300",
      status: "Delivered",
    },
    {
      id: "123243",
      customer: { name: "Esther Howard", id: "C0174577", avatar: "https://i.pravatar.cc/40?img=1" },
      date: "21-05-2024",
      product: "High ghee tirunelvali halwa",
      price: "₹300",
      status: "Delivered",
    },
  ];

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };


  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "text-green-500";
      case "In Process":
        return "text-yellow-500";
      case "Cancelled":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.id.includes(searchQuery) ||
      order.customer.id.includes(searchQuery) ||
      order.date.includes(searchQuery)
  );

  return (
    <div className="font-poppins mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Order ID, Customer ID, or Date"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/2 py-4 px-5 border rounded-full shadow-sm"
        />
      </div>
      <div className="bg-white">
      <div className="whitespace-nowrap border-b">
        <div className="flex justify-start space-x-4 px-2">
          {["All Orders", "Pending Orders", "Delivered Orders", "Cancelled Orders"].map((tab) => (
            <button
              key={tab}
              className={`text-lg py-4 px-6 whitespace-nowrap ${
                activeTab === tab ? "border-b-4 border-[rgba(236,0,140,1)] text-[rgba(236,0,140,1)]" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto mt-6">
      <table
          className="table-auto w-full text-left border-collapse"
          style={{ tableLayout: "fixed" }}
        >
          <thead >
            <tr className=" border-b">
              <th className="py-4 font-medium px-6 w-8">SL</th>
              <th className="py-4 px-6 font-medium w-28 whitespace-nowrap">Order ID</th>
              <th className="py-4 px-6 font-medium w-52">Customer name</th>
              <th className="py-4 px-6 font-medium w-32 whitespace-nowrap">Date</th>
              <th className="py-4 px-6 font-medium w-64">Product Name</th>
              <th className="py-4 px-6 font-medium w-20">Price</th>
              <th className="py-4 px-6 font-medium w-28">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td className="py-4 px-6 text-center" colSpan="7">
                  No orders available.
                </td>
              </tr>
            ) : (
              filteredOrders
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((order, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className="py-4 px-6 font-medium" onClick={() => navigate(`/order/${order.id}`)}>{order.id}</td>
                    <td className="py-4 px-6 flex items-center space-x-3">
                      <img src={order.customer.avatar} alt={order.customer.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="text-gray-700">{order.customer.name}</p>
                        <p className="text-gray-500 text-sm">Customer {order.customer.id}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">{order.date}</td>
                    <td className="py-4 px-6">{order.product}</td>
                    <td className="py-4 px-6">{order.price}</td>
                    <td className={`py-4 px-6 font-medium ${getStatusColor(order.status)}`}>{order.status}</td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 ">
  <p className="text-sm text-gray-500 mb-6 mx-5">
    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
    {Math.min(currentPage * itemsPerPage, orders.length)} of {orders.length} items
  </p>

  <div className="flex space-x-2 mb-6 mx-5">

    <button
      className={`px-4 py-2 rounded-full ${currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"}`}
      onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
      disabled={currentPage === 1}
    >
      ←
    </button>

    {[currentPage, currentPage + 1].map(
      (page, index) =>
        page <= totalPages && (
          <button
            key={index}
            className={`px-4 py-2 rounded-full ${
              currentPage === page ? "bg-pink-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        )
    )}

    <button
      className={`px-4 py-2 rounded-full ${
        currentPage === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"
      }`}
      onClick={() => currentPage < totalPages && handlePageClick(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      →
    </button>
  </div>
</div>
</div>

    </div>
  );
};

export default OrderTable;

