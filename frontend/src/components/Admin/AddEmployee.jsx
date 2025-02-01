import React, { useState, useEffect } from 'react';

const AddEmployee = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 7;
  const [selectedRow, setSelectedRow] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const fetchedEmployees = [
        {
            id: 'EL-00552',
            name: 'Roselle Erhan',
            description: 'roselle@gmail.com',
            role: 'Buyer',
            country: 'USA',
            phone: '123-456-7890'
          },
          {
            id: 'EL-00551',
            name: 'Andiana',
            description: 'andriana@gmail.com',
            role: 'Seller',
            country: 'Canada',
            phone: '987-654-3210'
          },
          {
            id: 'EL-00550',
            name: 'Vacinzo',
            description: 'vacinzo@gmail.com',
            role: 'Seller',
            country: 'Italy',
            phone: '555-222-3333'
          },
          {
            id: 'EL-00549',
            name: 'Jone Smith',
            description: 'jone@gmail.com',
            role: 'Buyer',
            country: 'Australia',
            phone: '444-555-6666'
          },
          {
            id: 'EL-00548',
            name: 'Vacinzo',
            description: 'vacinzo@gmail.com',
            role: 'Buyer',
            country: 'Germany',
            phone: '777-888-9999'
          },
          {
            id: 'EL-00547',
            name: 'Jone Smith',
            description: 'jone@gmail.com',
            role: 'Buyer',
            country: 'France',
            phone: '111-222-3333'
          },
          {
            id: 'EL-00546',
            name: 'Andiana',
            description: 'andriana@gmail.com',
            role: 'Seller',
            country: 'UK',
            phone: '666-777-8888'
          },
      ];

      setEmployees(fetchedEmployees);
    };

    fetchEmployees();
  }, []);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const totalPages = Math.ceil(employees.length / employeesPerPage);

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

  const getEmployeeImage = (product) => {
    return 'https://via.placeholder.com/50';
  };

  const handleRowClick = (id) => {
    setSelectedRow(id);
  };

  const getBackgroundColor = (index) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500', 'bg-pink-500', 'bg-orange-500'];
    return colors[index % colors.length];
  };

  return (
    <div className="mb-8 me-8 ">
      <div className="overflow-x-auto rounded-[30px] bg-white w-2/3 border border-gray-300 mt-6 md:mt-10 font-ibm-plex">
        <h1 className='font-semibold text-2xl text-[#050F24] my-7 ml-7'>All Employees</h1>
        <div className='border border-gray-200 w-full'></div>
      <table
          className="table-auto  text-left min-w-full border-collapse"
          style={{ tableLayout: "fixed" }}
        >
          <thead>
            <tr className="w-full text-left text-[rgba(5,15,36,1)] font-ibm-plex text-lg ">
            <th className="py-8 px-8 w-[130px] whitespace-nowrap ">Name</th> 
              <th className="py-8 px-4 w-[60px] whitespace-nowrap">ID</th>
              <th className="py-8 px-4 w-[60px] whitespace-nowrap">Role</th>
              <th className="py-8 px-4 w-[60px] whitespace-nowrap">Country</th>
              <th className="py-8 px-4 w-[80px] whitespace-nowrap">Phone</th>
            </tr>
          </thead>
          <tbody className='font-poppins'>
            {currentEmployees.map((employee, index) => (
              <tr
              key={employee.id}
              onClick={() => handleRowClick(employee.id)}
              className={`border-b border-gray-200 whitespace-nowrap cursor-pointer ${selectedRow === employee.id ? 'bg-[#EC008C]' : ''}`}
            >
                <td className={`py-4 px-4 flex items-center space-x-3 ${selectedRow === employee.id ? 'text-white' : ''}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getBackgroundColor(index)}`}>
                    <img src={getEmployeeImage(employee)} alt={employee.name} className="w-8 h-8 rounded-full object-cover" />
                  </div>
                  <div className="truncate"> 
                    <p className={`text-lg  truncate ${selectedRow === employee.id ? 'text-white' : ''}`}>{employee.name}</p>
                    <p className={`text-sm text-gray-500 truncate ${selectedRow === employee.id ? 'text-white' : ''}`}>{employee.description}</p>
                  </div>
                </td>
                <td className={`py-4 px-4 text-gray-500 ${selectedRow === employee.id ? 'text-white' : ''}`}>{employee.id}</td>
                <td className={`py-4 px-4 text-gray-500 ${selectedRow === employee.id ? 'text-white' : ''}`}>{employee.role}</td>
                <td className={`py-4 px-4 text-gray-500 ${selectedRow === employee.id ? 'text-white' : ''}`}>{employee.country}</td>
                <td className={`py-4 px-4 text-gray-500 ${selectedRow === employee.id ? 'text-white' : ''}`}>{employee.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-6 mb-5 mx-5">

<p className="text-sm text-gray-500">
  Showing {Math.min(indexOfLastEmployee, employees.length)} of {employees.length} products
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

export default AddEmployee;

