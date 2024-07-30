// @/components/BottomComponent.js
import React from 'react';
import AdjustingComponents from './AdjustingComponents';

const BottomComponent = () => {
  return (
    <div className="flex flex-1">
      <div className="flex-1 p-4 w-full border-r border-[#141414]">
        {/* Page content goes here */}
      </div>
      <div className="w-[280px]   text-white p-4 ">
        <AdjustingComponents />
      </div>
    </div>
  );
};

export default BottomComponent;
