// @/components/TopComponent.js
import React from 'react';
import { BsChevronExpand } from 'react-icons/bs';
import { FaSave, FaFileExport, FaHistory, FaCopy } from 'react-icons/fa';

const TopComponent = ({ title }) => {
  return (
    <div className="flex flex-col md:flex-row max-md:mb-5 justify-between items-center h-[60px] px-4 bg-bg-lightGray  md:border border-darkGray text-white">
      <div className="text-lg">{title}</div>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Presets"
            className="p-2 pl-3 pr-8  rounded-xl bg-lightGray focus:border-green-600 border border-gray-600  text-white focus:border-none focus:ring-1 focus:outline-none"
          />
          <BsChevronExpand className="absolute right-2 top-1/2 transform -translate-y-1/2" />
        </div>
        <button className="p-2 bg-iconGray rounded"><FaSave /></button>
        <button className="p-2  bg-iconGray rounded"><FaFileExport /></button>
        <button className="p-2  bg-iconGray rounded"><FaHistory /></button>
        <button className="p-2  bg-iconGray rounded"><FaCopy /></button>
      </div>
    </div>
  );
};

export default TopComponent;
