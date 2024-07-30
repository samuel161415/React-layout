// @/components/TopComponent.js
import React from 'react';
import { BsChevronExpand } from 'react-icons/bs';
import { FaSave, FaFileExport, FaHistory, FaCopy } from 'react-icons/fa';

const TopComponent = ({ title }) => {
  return (
    <div className="flex justify-between items-center h-[60px] px-4 bg-bg-lightGray  border border-darkGray text-white">
      <div className="text-lg">{title}</div>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Presets"
            className="pl-2 pr-8 py-1 rounded bg-lightGray focus:border-green-600 border  text-white"
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
