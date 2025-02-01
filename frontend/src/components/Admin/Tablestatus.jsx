import React, { useState, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";

const Tablestatus = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 7;
  const [products, setProducts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = [
        {
          id: 'EL-00552',
          name: 'Nike v22',
          description: 'Running Shoes',
          orders: 1500,
          price: 130,
          category: 'Undergarments',
          stock: 'More than 100',
          status: 'Pending',
        },
        {
          id: 'EL-00551',
          name: 'Instax Camera',
          description: 'Portable camera',
          orders: 1100,
          price: 45,
          category: 'Cosmetics',
          stock: 'More than 500',
          status: 'Approved',
        },
        {
          id: 'EL-00550',
          name: 'Chair',
          description: 'Relaxing chair',
          orders: 1800,
          price: 80,
          category: 'Furniture',
          stock: 'Less than 100',
          status: 'Rejected',
        },
        {
          id: 'EL-00549',
          name: 'Laptop',
          description: 'Macbook pro 13',
          orders: 800,
          price: 500,
          category: 'Electronics',
          stock: 'More than 50',
          status: 'Approved',
        },
        {
          id: 'EL-00548',
          name: 'Watch',
          description: 'Digital watch',
          orders: 600,
          price: 15,
          category: 'Accessories',
          stock: 'More than 400',
          status: 'Pending',
        },
        {
          id: 'EL-00547',
          name: 'Mobile',
          description: 'iPhone 13',
          orders: 200,
          price: 500,
          category: 'Electronics',
          stock: 'More than 100',
          status: 'Rejected',
        },
        {
          id: 'EL-00546',
          name: 'Xerry',
          description: 'Perfume',
          orders: 150,
          price: 8,
          category: 'Fragrances',
          stock: 'Less than 100',
          status: 'Pending',
        },
      ];

      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const getBackgroundColor = (category) => {
    switch (category) {
      case 'Undergarments':
        return 'bg-yellow-600';
      case 'Cosmetics':
        return 'bg-pink-600'; 
      case 'Furniture':
        return 'bg-green-700'; 
      case 'Electronics':
        return 'bg-blue-700';
      case 'Accessories':
        return 'bg-purple-700'; 
      case 'Fragrances':
        return 'bg-red-700'; 
      default:
        return 'bg-gray-600';
    }
  };

  const getProductImage = (product) => {
    return 'https://via.placeholder.com/50';
  };

  const handleStatusChange = (id, newStatus) => {
    setProducts(products.map(product => product.id === id ? { ...product, status: newStatus } : product));
    setDropdownOpen(null);
  };

  return (
    <div className="mb-8 me-8">
      <div className=" overflow-x-auto overflow-y-hidden rounded-[30px] border bg-white pb-6 border-gray-300 mt-6 md:mt-10">
      <table
          className="table-auto w-full text-left border-collapse"
          style={{ tableLayout: "fixed" }}
        >
          <thead>
            <tr className="w-full text-left text-[rgba(5,15,36,1)] font-ibm-plex text-sm border-b-2 border-gray-200">
            <th className="py-8 px-4 w-[200px] whitespace-nowrap">Product</th> 
              <th className="py-8 px-4 w-[120px] whitespace-nowrap">ID no</th>
              <th className="py-8 px-4 w-[100px] whitespace-nowrap">Orders</th>
              <th className="py-8 px-4 w-[100px] whitespace-nowrap">Price</th>
              <th className="py-8 px-4 w-[150px] whitespace-nowrap">Category</th>
              <th className="py-8 px-4 w-[150px] whitespace-nowrap">Stock</th>
              <th className="py-8 px-4 w-[150px] whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody className='font-poppins'>
            {currentProducts.map((product) => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100 whitespace-nowrap">
                <td className="py-4 px-4 flex items-center space-x-4 w-[300px]">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getBackgroundColor(product.category)}`}>
                    <img src={getProductImage(product)} alt={product.name} className="w-8 h-8 rounded-full object-cover" />
                  </div>
                  <div className="truncate"> 
                    <p className="text-lg  truncate">{product.name}</p>
                    <p className="text-sm text-gray-500 truncate">{product.description}</p>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-500">{product.id}</td>
                <td className="py-4 px-4 text-gray-500">{product.orders}</td>
                <td className="py-4 px-4 text-gray-500">${product.price}</td>
                <td className="py-4 px-4 text-gray-500">{product.category}</td>
                <td className="py-4 px-4 text-gray-500">{product.stock}</td>
                <td className="py-4 px-4 relative">
                  <button
                    className={`w-[120px] flex items-center justify-center text-white p-2 rounded-md ${product.status === 'Pending' ? 'bg-[#FF7C33]' : product.status === 'Approved' ? 'bg-[#02C875]' : 'bg-[#D82020]'}`}
                    onClick={() => setDropdownOpen(dropdownOpen === product.id ? null : product.id)}
                  >
                    {product.status} {product.status === 'Pending' && <FaChevronDown size={18} className="ml-2" />}
                  </button>
                  {dropdownOpen === product.id && product.status === 'Pending' && (
                    <div className="absolute left-0 mt-2 w-[150px] px-2 py-3 bg-white border rounded-md shadow-lg z-50">
                      <button
                        className="block w-full px-4 py-2 text-center text-white bg-[#02C875] rounded-md"
                        onClick={() => handleStatusChange(product.id, 'Approved')}
                      >
                        Approved
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-center text-white bg-[#D82020] rounded-md mt-3"
                        onClick={() => handleStatusChange(product.id, 'Rejected')}
                      >
                        Rejected
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-6 mx-5">
        <p className="text-sm text-gray-500">
          Showing {Math.min(indexOfLastProduct, products.length)} of {products.length} products
        </p>

        <div className="flex items-center space-x-4 text-gray-600">
          <button
            onClick={handlePrevPage}
            className={`px-4 py-2 rounded-md text-gray-500 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-pink-500'}`}
            disabled={currentPage === 1}
          >
            Prev
          </button>


          <div className="flex items-center space-x-3">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageClick(index + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === index + 1
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            className={`px-4 py-2 rounded-md text-gray-500 ${currentPage === totalPages ? 'cursor-not-allowed' : 'hover:text-pink-500'}`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Tablestatus;


