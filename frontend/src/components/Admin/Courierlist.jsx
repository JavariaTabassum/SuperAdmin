import React from "react";
import { useNavigate } from "react-router-dom";


const Courierlist = () => {
  const navigate = useNavigate();
  const couriers = [
    {
      id: 1,
      code: "123245",
      name: "Bluedart Courier",
      email: "bluedartindia@gmail.com",
      joinDate: "21-05-2022",
      address: "Tirunelvali, Kerala, India",
      status: "Verified",
    },
    {
      id: 2,
      code: "123246",
      name: "FedEx International",
      email: "fedexindia@gmail.com",
      joinDate: "21-05-2022",
      address: "Karala, India",
      status: "Not Verified",
    },
    {
      id: 3,
      code: "123247",
      name: "Uber Eat Delivery",
      email: "ubereatindia@gmail.com",
      joinDate: "21-05-2022",
      address: "Tirunelvali, India",
      status: "Verified",
    },
  ];

  const getCourierImage = (courierName) => {
    switch (courierName) {
      case "Bluedart Courier":
        return "https://via.placeholder.com/32?text=B"; 
      case "FedEx International":
        return "https://via.placeholder.com/32?text=F"; 
      case "Uber Eat Delivery":
        return "https://via.placeholder.com/32?text=U"; 
      default:
        return "https://via.placeholder.com/32?text=U"; 
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <div className="overflow-x-auto">
      <table
          className="table-auto w-full text-left border-collapse font-poppins"
          style={{ tableLayout: "fixed" }}
        >
          <thead>
            <tr className=" text-left text-sm text-black whitespace-nowrap">
              <th className="p-4 font-medium border-br w-[20px]">SL.</th>
              <th className="p-4  font-medium border-b w-[150px]">Courier Code</th>
              <th className="p-4  font-medium border-b w-[250px]">Courier Name</th>
              <th className="p-4 font-medium border-b w-[150px]">Join Date</th>
              <th className="p-4 font-medium border-b w-[170px]">Office Address</th>
              <th className="p-4 font-medium border-b w-[150px]">Status</th>
            </tr>
          </thead>
          <tbody>
            {couriers.map((courier, index) => (
              <tr key={courier.id} className="text-sm text-black hover:bg-gray-50">
                <td className="p-4 border-b font-bold">{index + 1}</td>
                <td className="p-4 border-b"onClick={() => navigate(`/courier/${courier.code}`)}>{courier.code}</td>
                <td className="p-4 border-b">
                  <div className="flex items-center gap-3">
                    <img
                      src={getCourierImage(courier.name)} 
                      alt={courier.name}
                      className="w-8 h-8 rounded-full border"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{courier.name}</div>
                      <div className="text-xs text-gray-500">{courier.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b">{courier.joinDate}</td>
                <td className="p-4 border-b">{courier.address}</td>
                <td className="p-4 border-b">
                  {courier.status === "Verified" ? (
                    <span className="flex items-center  gap-1 text-green-600 font-medium">
                       Verified
                    </span>
                  ) : (
                    <span className="flex items-center font-poppins gap-1 text-red-500 font-medium">
                      Not Verified
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courierlist;
