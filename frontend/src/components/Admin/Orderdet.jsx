
import React, { useState, useEffect } from 'react';

const OrderDetails = () => {
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const mockData = {
    items: [
      {
        orderNo: "#DH3242",
        name: "Underwear",
        color: "White",
        size: "32",
        price: 777,
        image: "https://via.placeholder.com/150"
      },
      {
        orderNo: "#DH3242",
        name: "Underwear",
        color: "White",
        size: "32",
        price: 777,
        image: "https://via.placeholder.com/150"
      }
    ],
    billingDetails: {
      totalBill: 1077.0,
      deliveryFee: 0.0,
      vat: 35.0,
      totalValue: 1112.0,
      courier: "FedEx Internations",
      orderDate: "21-03-2024",
      billingAddress: "39, Green road, Tirunelvali, Karela, India"
    },
    shippingDetails: {
      address: "39, new market area, Tirunelvali, India"
    },
    customerInfo: {
      name: "Esther Howard",
      email: "estherhoward034@gmail.com",
      phone: "+91 01747 487899",
      profileImage: "https://via.placeholder.com/150"
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setOrderData(mockData);
      setIsLoading(false);
    }, 1000); 
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  const { items, billingDetails, shippingDetails, customerInfo } = orderData;

  return (
    
    <div className="p-6 min-h-screen font-poppins">
       <style>
        {`

        @media (max-width: 800px){
        .col{
        display: flex;
        flex-direction: column-reverse;
        }
        }
        @media (min-width: 800px) {
       .customer-info {
        width: 300px;
       }
       }
        @media (max-width: 470px){
        .column{
        display: flex;
        flex-direction: column;
        gap: 10px
        }
        }
        @media (min-width: 470px){
        .text{
        text-align: right;
        }
        }
        }
        `}
      </style>
      <div className="max-w-6xl mx-auto col grid grid-cols-3 font-poppins gap-6">
        <div className="col-span-2  bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-[rgba(23,23,37,1)] mb-6">Order Items</h2>
          <div className="grid grid-cols-2 gap-4 column">
            {items.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm flex flex-col space-y-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[200px] object-cover rounded-t-md"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-bold">Order No: {item.orderNo}</p>
                  </div>
                  <div className='flex justify-between '>
                    <p className="text-sm text-gray-600">{item.color}</p>
                    <p className="text-sm text-gray-600">{item.size}</p>
                    <p className="text-sm font-semibold text-orange-500">₹{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Billing & Shipping Details</h2>
            <div className="text-sm space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Total Bill:</span>
                <span className='[font-weight:550]'>₹{billingDetails.totalBill}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Delivery Fee:</span>
                <span className='[font-weight:550]'>₹{billingDetails.deliveryFee}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">+VAT:</span>
                <span className='[font-weight:550]'>₹{billingDetails.vat}</span>
              </div>
              <div className="flex justify-between mt-4 border-t border-gray-300 pt-4">
                <span className="font-medium">Total Order Value:</span>
                <span className='[font-weight:550]'>₹{billingDetails.totalValue}</span>
              </div>
              <div className='flex justify-between column'>
              <div className="flex flex-col">
                <span className="font-medium">Courier:</span>
                <span className=" font-semibold text-[18px] mt-2" style={{ color: 'rgba(23, 23, 37, 1)' }}>{billingDetails.courier}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text">Order Date:</span>
                <span  className='[font-weight:550] text-[15px] mt-2'style={{ color: 'rgba(23, 23, 37, 1)' }}>{billingDetails.orderDate}</span>
              </div>
              </div>
            
              <div>
                <p>
                  <span className="font-medium">Shipping Address:</span>
                  <span className="block [font-weight:550] text-[18px] mt-2" style={{ color: 'rgba(23, 23, 37, 1)' }}>
                    {shippingDetails.address}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white col-span-1 rounded-lg shadow p-6">
          <h2 className="text-xl  font-medium mb-6">Customer Information</h2>
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <img
                src={customerInfo.profileImage}
                alt={customerInfo.name}
                className="w-30 h-30 p-2 rounded-full border-4 border-red-500"
              />
            </div>
            <div className="text-center flex flex-col gap-4 w-full">
              <p className="text-lg font-semibold">{customerInfo.name}</p>
              <p className="text-md break-words text-[rgba(141,152,175,1)]">{customerInfo.email}</p>
              <p className="text-md text-[rgba(141,152,175,1)]">{customerInfo.phone}</p>
            </div>
            
          </div>
          <div className="mt-6 text-sm space-y-4">
              <div>
                <p className="font-medium mb-5">Shipping Address:</p>
                <p className="text-[rgba(141,152,175,1)] w-[150px]">{shippingDetails.address}</p>
              </div>
              <div>
                <p className="font-medium mb-5">Billing Address:</p>
                <p className="text-[rgba(141,152,175,1)] w-[150px]">{billingDetails.billingAddress}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

