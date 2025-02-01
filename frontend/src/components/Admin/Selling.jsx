import React, { useState, useEffect } from 'react';

const Selling = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 7;
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = [
        { id: 'EL-00552', name: 'Nike v22', description: 'Running Shoes', orders: 1500, price: 130, category: 'Undergarments', stock: 'More than 100' },
        { id: 'EL-00551', name: 'Instax Camera', description: 'Portable camera', orders: 1100, price: 45, category: 'Cosmetics', stock: 'More than 500' },
        { id: 'EL-00550', name: 'Chair', description: 'Relaxing chair', orders: 1800, price: 80, category: 'Furniture', stock: 'Less than 100' },
        { id: 'EL-00549', name: 'Laptop', description: 'Macbook pro 13', orders: 800, price: 500, category: 'Electronics', stock: 'More than 50' },
        { id: 'EL-00548', name: 'Watch', description: 'Digital watch', orders: 600, price: 15, category: 'Accessories', stock: 'More than 400' },
        { id: 'EL-00547', name: 'Mobile', description: 'iPhone 13', orders: 200, price: 500, category: 'Electronics', stock: 'More than 100' },
        { id: 'EL-00546', name: 'Xerry', description: 'Perfume', orders: 150, price: 8, category: 'Fragrances', stock: 'Less than 100' },
      ];
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

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

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl text-[rgba(5,15,36,1)] font-medium font-ibm-plex">Top Selling Product</h2>
          <p className="text-gray-600 font-poppins mt-4 w-4/5">
            All the products that are available on your store are showing with their detail, price, and other info.
          </p>
        </div>
        <div className="w-[200px]">
          <button className="bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600 py-2 px-4 mt-4 md:mt-0">
            Add new product
          </button>
        </div>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search by name or ID..."
          className="w-1/2 p-4 border border-gray-300 rounded-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto rounded-[30px] border border-gray-300 mt-6 md:mt-10">
        <table className="table-auto w-full text-left border-collapse" style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr className="w-full text-left text-[rgba(5,15,36,1)] font-ibm-plex uppercase text-sm border-b-2 border-gray-200">
              <th className="py-8 px-4 w-[200px] whitespace-nowrap">Product</th>
              <th className="py-8 px-4 w-[120px] whitespace-nowrap">ID no</th>
              <th className="py-8 px-4 w-[100px] whitespace-nowrap">Orders</th>
              <th className="py-8 px-4 w-[100px] whitespace-nowrap">Price</th>
              <th className="py-8 px-4 w-[150px] whitespace-nowrap">Category</th>
              <th className="py-8 px-4 w-[150px] whitespace-nowrap">Stock</th>
            </tr>
          </thead>
          <tbody className="font-poppins">
            {currentProducts.map((product) => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100 whitespace-nowrap">
                <td className="py-4 px-4 flex items-center space-x-4 w-[300px]">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getBackgroundColor(product.category)}`}>
                  <img src={getProductImage(product)} alt={product.name} className="w-8 h-8 rounded-full object-cover" />
                  </div>
                  <div>
                    <p className="text-lg">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.description}</p>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-500">{product.id}</td>
                <td className="py-4 px-4 text-gray-500">{product.orders}</td>
                <td className="py-4 px-4 text-gray-500">${product.price}</td>
                <td className="py-4 px-4 text-gray-500">{product.category}</td>
                <td className="py-4 px-4 text-gray-500">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row gap-y-2 justify-between items-center mt-6">
        <p className="text-sm text-gray-500">
          Showing {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
        </p>

        <div className="flex items-center space-x-4 text-gray-600">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 rounded-md text-gray-500 hover:text-pink-500 disabled:cursor-not-allowed">
            Prev
          </button>

          <div className="flex items-center space-x-3">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === index + 1 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 rounded-md text-gray-500 hover:text-pink-500 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selling;
