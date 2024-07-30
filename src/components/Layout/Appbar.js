// @/components/Layout/AppBar.js
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaCog, FaBook, FaChartBar } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useRouter } from "next/router";
import logo from "@/img/logo.svg";
import { BsChevronExpand } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import DropdownMenu from "../DropDownmenu";

const MenuItem = ({ icon, name, route }) => {
  const router = useRouter();
  const colorClass =
    router.pathname === route ? "text-white" : "text-white/50 hover:text-white";

  return (
    <Link href={route} className={`flex items-center gap-1 ${colorClass}`}>
      <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
      <div>{name}</div>
    </Link>
  );
};

// const DropdownMenu = ({ isOpen, onClose, onSelect, selectedOption }) => {
//   return (
//     <div
//       className={`absolute p-3 top-full right-0 mt-2  bg-lightGray text-white rounded-lg shadow-lg border border-gray-700 ${isOpen ? 'block' : 'hidden'}`}
//       onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//     >
//       <div className="flex  items-center my-1  border-gray-700 w-full">
//         <input
//           type="text"
//           placeholder="Change Project"
//           className=" bg-black text-white border border-gray-700 rounded-md px-2 py-1 flex-grow focus:border-green-600 focus:outline-none"
//         />
//         <FaSearch className="text-white ml-2" />
//       </div>
//       <div className={`flex justify-between my-1 items-center rounded-lg p-2  border-b border-gray-700 ${selectedOption === 'default' ? 'bg-green-800' : ''}`} onClick={() => { onSelect('default'); onClose(); }}>
//         <span className="mr-2">Default Project</span>
//         <FaBook />
//       </div>
//       <div className={`flex justify-between my-1 items-center rounded-lg p-2  border-b border-gray-700 ${selectedOption === 'create' ? 'bg-green-800' : ''}`} onClick={() => { onSelect('create'); onClose(); }}>
//         <span className="mr-2">Create Project</span>
//         <FaChartBar />
//       </div>
//       <div className={`flex justify-between my-1 items-center rounded-lg p-2  ${selectedOption === 'overview' ? 'bg-green-800' : ''}`} onClick={() => { onSelect('overview'); onClose(); }}>
//         <span className="mr-2">Organization Overview</span>
//         <FaCog />
//       </div>
//     </div>
//   );
// };


export default function AppBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('default');

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    handleCloseDropdown();
  };

  const getSelectedOptionText = () => {
    switch (selectedOption) {
      case 'create':
        return 'Create Project';
      case 'overview':
        return 'Organization Overview';
      default:
        return 'Default Project';
    }
  };

  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 h-[60px] bg-black text-white z-50 px-4">
      <div className="flex items-center gap-4">
        <Link href="/">
          {/*eslint-disable-next-line*/}
          {/* <img src={logo.src} alt="Company Logo" width={50} height={50} /> */}
          <div className="w-8 h-8 flex justify-center items-center font-semibold rounded-full bg-white text-darkGray">
             F
          </div>
        </Link>
        <span className="">Fingaroo </span>
        <BsChevronExpand />
        <span className="text-white/50">/</span>
        <button onClick={handleDropdownToggle} className="relative">
          <span className="flex items-center">{getSelectedOptionText()}
          <BsChevronExpand className="ml-1" /></span>
          <DropdownMenu
            isOpen={isDropdownOpen}
            onClose={handleCloseDropdown}
            onSelect={handleSelectOption}
            selectedOption={selectedOption}
          />
        </button>
      </div>
      <div className="flex items-center ml-auto gap-4">
        <MenuItem name="Dashboard" route="/dashboard"  />
        <MenuItem name="Docs" route="/docs"  />
        <MenuItem
          name="API Reference"
          route="/api-reference"
        //   icon={<FaChartBar />}
        />
        <MenuItem name="" route="/settings" icon={<FaCog />} />
        <MenuItem name="" route="/profile" icon={<FaUser />} />
      </div>
    </nav>
  );
}
