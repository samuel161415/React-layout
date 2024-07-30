import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SlHome } from "react-icons/sl";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import MenuItem from "../MenuItem";
import {
  FaTshirt,
  FaRedhat,
  FaRobot,
  FaDatabase,
  FaKey,
  FaTools
} from "react-icons/fa";
import { RiBarChart2Line } from "react-icons/ri";
import { PiArrowsLeftRight } from "react-icons/pi";
import { TbAlignBoxBottomLeft } from "react-icons/tb"


import logo from "@/img/logo.svg";


export default function Sidebar({ show, setter }) {
  const router = useRouter();



  // Define our base class
  const className =
    "bg-[#141414] w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on state of sidebar visibility
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="flex flex-col ">
          <MenuItem
            name="Playground"
            icon={<TbAlignBoxBottomLeft />}
            subOptions={[
              { name: "Chat", route: "/playground/chat" },
              {
                name: "Assistance",
                route: "/playground/assistance",
                
                setter:{setter}
              },
              {
                name: "Completions",
                route: "/playground/completions",
                setter: {setter}
              },
            ]}
          />
          <MenuItem name="Assistance" route="/assistance" icon={<FaRobot />} setter={setter}/>
          {/* <MenuItem name="About" route="/about" icon={<FaTools />} setter={setter} /> */}
          <MenuItem
            name="Fine Tuning"
            route="/fine-tuning"
            icon={<PiArrowsLeftRight />  
            }
            setter={setter}
          />
          <MenuItem name="Batches" route="/batches" icon={<FaDatabase />} setter={setter} />
          <MenuItem name="Storage" route="/storage" icon={<FaDatabase />} setter={setter} />
          {/* RiBarChart2Line */}
          <MenuItem name="Usage" route="/usage" icon={<RiBarChart2Line />} setter={setter} />
          <MenuItem name="API Keys" route="/api-keys" icon={<FaKey />} setter={setter} />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
