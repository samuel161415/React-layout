import React, { useState } from "react";
import { FaSearch, FaBook, FaChartBar, FaCog } from "react-icons/fa";

const DropdownMenu = ({ isOpen, onClose, onSelect, selectedOption }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Define options with their labels and icons
  const options = [
    { id: 'default', label: 'Default Project', icon: <FaBook /> },
    { id: 'create', label: 'Create Project', icon: <FaChartBar /> },
    { id: 'overview', label: 'Organization Overview', icon: <FaCog /> }
  ];

  // Filter options based on the search term
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`absolute p-3 top-full right-0 mt-2 bg-lightGray text-white rounded-lg shadow-lg border border-gray-700 ${isOpen ? 'block' : 'hidden'}`}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <div className="flex items-center my-1 border-gray-700 w-full">
        <input
          type="text"
          placeholder="Change Project"
          value={searchTerm}
          onChange={handleSearchChange}
          className="bg-black text-white border border-gray-700 rounded-md px-2 py-1 flex-grow focus:border-green-600 focus:outline-none"
        />
        <FaSearch className="text-white ml-2" />
      </div>
      {filteredOptions.map(option => (
        <div
          key={option.id}
          className={`flex justify-between my-1 items-center rounded-lg p-2 border-b border-gray-700 ${selectedOption === option.id ? 'bg-green-800' : ''}`}
          onClick={() => { onSelect(option.id); onClose(); }}
        >
          <span className="mr-2">{option.label}</span>
          {option.icon}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
