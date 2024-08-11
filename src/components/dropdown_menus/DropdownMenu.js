import React, { useState } from "react";
import { FaSearch, FaBook, FaChartBar, FaCog } from "react-icons/fa";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';


const DropdownMenu = ({ isOpen, onClose, onSelect, selectedOption, options }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Define options with their labels and icons
  // const options = [
  //   { id: 'default', label: 'Default Project', icon: <CheckIcon sx={ { width:'20px' } }/> },
  //   { id: 'create', label: 'Create Project', icon: <AddIcon sx={ { width:'20px' } }/> },
  //   { id: 'overview', label: 'Organization Overview', icon: <CorporateFareIcon sx={ { width:'20px' } }/> }
  // ];

  // Filter options based on the search term
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`absolute p-3 top-full right-[-120px]  bg-lightGray text-white rounded-lg min-w-[300px] shadow-lg border border-gray-700 ${isOpen ? 'block' : 'hidden'}`}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <div className="flex items-center my-1  w-full rounded-xl p-2 border-2 border-green-700">
      {/* <FaSearch className="text-white ml-2" /> */}
      <SearchIcon />
        <input
          type="text"
          placeholder="Change Project..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="bg-lightGray text-white text-sm  border-gray-700  flex-grow focus:border-none focus:ring-0 focus:outline-none"
        />
        
      </div>
      {filteredOptions.map(option => (
        <div
          key={option.id}
          className={`flex justify-between my-1 items-center rounded-lg p-2 border-b border-gray-700 ${selectedOption === option.id ? 'bg-green-800' : ' hover:bg-gray-700'}`}
          onClick={() => { onSelect(option.id); onClose(); }}
        >
          <span className="mr-2 text-sm">{option.label}</span>
          {option.icon}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
