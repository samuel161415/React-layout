// @/components/AdjustingComponents.js
import React, { useState } from "react";
import styles from "./AdjustingComponents.module.css"; // Import the CSS module
import { MdOutlineLock } from "react-icons/md";

const ControlBar = ({ label, value, setValue }) => {
  return (
    <div className="my-1">
      <label className="block text-xs ">{label}</label>
      <span className="block text-xs text-right">{value}</span>
      <input
        type="range"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full border  ${styles.rangeInput}`} // Use the CSS module class
      />
      
    </div>
  );
};

const AdjustingComponents = () => {
  const [temperature, setTemperature] = useState(0.5);
  const [maxTokens, setMaxTokens] = useState(100);
  const [frequencyPenalty, setFrequencyPenalty] = useState(0);
  const [presencePenality, setPresencePenality] = useState(0);
  const [topP, setTop] = useState(1);
  const [sequence, setSquence] = useState();

  return (
    <div className="flex flex-col space-y-4 p-2 bg-[#282727]  ">
      <ControlBar
        label="Temperature"
        value={temperature}
        setValue={setTemperature}
      />
      <ControlBar
        label="Maximum Tokens"
        value={maxTokens}
        setValue={setMaxTokens}
      />
      <ControlBar
        label="Frequency Penalty"
        value={frequencyPenalty}
        setValue={setFrequencyPenalty}
      />
      <div>
        {" "}
        <h1 className="text-sm">
          stop squence <br />{" "}
          <span className="text-xs">enter squence and press Tab</span>
        </h1>
        <input
          type="text"
          value={sequence}
          onChange={(e) => setSquence(e.target.value)}
          className={`w-full border rounded-lg p-2 my-2 bg-[#282727]`} // Use the CSS module class
        />
      </div>
      <ControlBar label="Top P" value={topP} setValue={setTop} />
      <ControlBar
        label="Frequency Penalty"
        value={frequencyPenalty}
        setValue={setFrequencyPenalty}
      />
      <ControlBar
        label="Presence Penalty"
        value={presencePenality}
        setValue={setPresencePenality}
      />
      <div className="flex items-start">
        <MdOutlineLock className="h-10 w-10 mr-2"/>
        <p className="text-sm">API and Playground requests will not be used to train our models <br/>
        <a href="#" target="_black" className="text-green-500">learn more </a></p>
      </div>
    </div>
  );
};

export default AdjustingComponents;
