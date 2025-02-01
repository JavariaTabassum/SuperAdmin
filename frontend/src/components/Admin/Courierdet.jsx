
import React from "react";
import img from '../../images/img.png';

const mockData = {
  courierInfo: {
    name: "Blue Dart",
    status: "Verified",
    email: "bluebardindia@gmail.com",
    address: "Tirunelvali, Karala, India",
    contactNumber: "+91 98945 55252",
    courierCode: "#123245",
    trackingURL: "http://bluebarttrackingurl243e22",
  },
  packageInfo: {
    title: "Deluxe h2311",
    name: "Willson",
    color: "Black",
    brand: "Cotton",
    size: "Medium",
    lastChecking: "18-03-2024",
    condition: "Good Condition",
  },
};

const CourierComponent = () => {
  const { courierInfo, packageInfo } = mockData;

  return (
    <div className="flex section-col bg-white p-8 rounded-lg shadow-md max-w-7xl mx-auto">
      <style>
      {`
          @media (max-width: 1180px) and (min-width:1050px) {
            .col {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
            .column {
              display: flex;
              flex-direction: column;
              gap: 5px;
            }
            .margin{
            margin-top: 0px;
            margin-bottom: 5px;
            }
            .left{
            text-align:left;
            }
          }
          @media (max-width: 860px) and (min-width:660px) {
            .col {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
            .column {
              display: flex;
              flex-direction: column;
              gap: 5px;
            }
            .margin{
            margin-top: 0px;
            margin-bottom: 5px;
            }
            .left{
            text-align:left;
            }
          }
          @media (max-width: 560px) {
            .col {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
            .column {
              display: flex;
              flex-direction: column;
              gap: 5px;
            }
            .margin{
            margin-top: 0px;
            margin-bottom: 5px;
            }
            .left{
            text-align:left;
            }
          }
          @media (max-width: 660px)  {
          .section-col{
          display:flex;
          flex-direction: column;
          }

          .width{
          width:100%;
          }
          }
        `}
      </style>
      <div className=" w-[350px] width p-4 font-poppins">
        <div className=" p-6 rounded-lg border border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Courier Information</h2>
          </div>
          <div className="flex justify-center mb-6">
            <div className="">
            <img
                  src={img}                  
                  alt=""
                  className="w-[200px] h-[200px] rounded-[100px]"
                />
          
            </div>
          </div>
          <ul className="text-sm space-y-2 ">
            <div className="flex justify-between column mb-3">
            <li>
               <p className="text-gray-400 font-medium"> Courier Name: </p>
              <p className="font-semibold mt-2">{courierInfo.name}</p>
            </li>
            <li>
              <p className="text-gray-400 font-medium"> Status </p>
              <p className="font-semibold  mt-2">  <span className="text-green-500">{courierInfo.status}</span></p>
            </li>
            </div>
            
            <li className="mb-3">
              <p className="text-gray-400 font-medium"> Email: </p>
              <p className="font-semibold mt-2">{courierInfo.email}</p>
            </li>
            <li className="mb-3">
              <p className="text-gray-400 font-medium">Office Address: </p>
              <p className="font-semibold mt-2 ">  {courierInfo.address}</p>
            </li>
            <div className="flex justify-between column mb-4">
            <li> 
              <p className="text-gray-400 font-medium">Contact Number </p>
              <p className="font-semibold mt-2 ">{courierInfo.contactNumber}</p>
            </li>
            <li className="text-right left ">
              <p className="text-gray-400 font-medium">Courier Code </p>
              <p className="font-semibold mt-2 "> {courierInfo.courierCode}</p>
            </li>

            </div>
            
            <li>
              <p className="text-gray-400 font-medium"> Tracking URL: </p>
              <p className="font-semibold mt-2 ">{courierInfo.trackingURL}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[700px] font-poppins width p-4">
        <div className="border border-gray-300 h-[610px] p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{packageInfo.title}</h2>
            <button className="text-gray-500 hover:text-gray-700">
             
            </button>
          </div>
          <ul className="text-sm space-y-5">
            <div className="flex gap-[250px] col">
            <li>
              <p className="text-gray-400 font-medium" > Name:</p>
              <p className="font-semibold mt-2"> {packageInfo.name}</p> 
            </li>
            <li>
              <p className="text-gray-400 font-medium" > Color:</p>
              <p className="font-semibold mt-2">  {packageInfo.color}</p> 
            </li>
            </div>
            <div className="flex gap-[250px] col ">
            <li>
              <p className="text-gray-400 font-medium" >Brand:</p>
              <p className="font-semibold mt-2"> {packageInfo.brand}</p> 
            </li>
            <li>
              <p className="text-gray-400 font-medium" > Size:</p>
              <p className="font-semibold mt-2"> {packageInfo.size}</p> 
            </li>
            </div>
            <div className="flex gap-[193px] col">
            <li>
              <p className="text-gray-400 font-medium" >Last Checking:</p>
              <p className="font-semibold mt-2 text-orange-600"> {packageInfo.lastChecking}</p> 
            </li>
            <li>
              <p className="text-gray-400 font-medium" > Condition:</p>
              <p className="font-semibold mt-2 text-green-600"> {packageInfo.condition}</p> 
            </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourierComponent;

