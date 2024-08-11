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
  FaTools,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import { RiBarChart2Line } from "react-icons/ri";
import { PiArrowsLeftRight } from "react-icons/pi";
import { TbAlignBoxBottomLeft } from "react-icons/tb";
import {
  MdOutlinePolyline,
  MdOutlineThumbUpAlt,
  MdOutlineForum,
  MdOutlinePsychology,
  MdOutlineHub,
  MdOutlineHardware,
  MdOutlineSpeed,
  MdGavel,
  MdSecurity,
  MdAttachMoney,
} from "react-icons/md";

import logo from "@/img/logo.svg";

export default function Sidebar({ show, setter }) {
  const router = useRouter();

  console.log("show is ",show)
  // Define our base class
  const className =
    "bg-[#141414] w-[280px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on state of sidebar visibility
  const appendClass = show ? " ml-0" : " ml-[-280px] md:ml-0";

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  const menuItems = [
    {
      name: "Playground",
      icon: <TbAlignBoxBottomLeft />,
      subOptions: [
        { name: "Chat", route: "/playground/chat" },
        { name: "Assistance", route: "/playground/assistance", setter: setter },
        {
          name: "Completions",
          route: "/playground/completions",
          setter: setter,
        },
      ],
    },
    {
      name: "Assistance",
      route: "/assistance",
      icon: <FaRobot />,
      setter: setter,
    },
    {
      name: "Fine Tuning",
      route: "/fine-tuning",
      icon: <PiArrowsLeftRight />,
      setter: setter,
    },
    {
      name: "Batches",
      route: "/batches",
      icon: <FaDatabase />,
      setter: setter,
    },
    {
      name: "Storage",
      route: "/storage",
      icon: <FaDatabase />,
      setter: setter,
    },
    {
      name: "Usage",
      route: "/usage",
      icon: <RiBarChart2Line />,
      setter: setter,
    },
    { name: "API Keys", route: "/api-keys", icon: <FaKey />, setter: setter },
    {
      name: "Data Ingestion",
      icon: <FaCloudUploadAlt />,
      route: "/data-ingestion",
    },
    {
      name: "Foundation Models",
      icon: <IoLayers />,
      route: "/foundation-models",
    },
    { name: "Embedding", icon: <MdOutlinePolyline />, route: "/embedding" },
    { name: "Fine-tuning", icon: <PiArrowsLeftRight />, route: "/fine-tuning" },
    {
      name: "Human Feedback",
      icon: <MdOutlineThumbUpAlt />,
      route: "/human-feedback",
    },
    {
      name: "Prompt Builder",
      icon: <MdOutlineForum />,
      route: "/prompt-builder",
    },
    { name: "Inference", icon: <MdOutlinePsychology />, route: "/inference" },
    { name: "Model Hub", icon: <MdOutlineHub />, route: "/model-hub" },
    { name: "Deployment", icon: <MdOutlineHardware />, route: "/deployment" },
    {
      name: "Performance Center",
      icon: <MdOutlineSpeed />,
      route: "/performance-center",
    },
    { name: "Governance", icon: <MdGavel />, route: "/governance" },
    { name: "Security", icon: <MdSecurity />, route: "/security" },
    {
      name: "Cost Management",
      icon: <MdAttachMoney />,
      route: "/cost-management",
    },
  ];

  return (
    <>
      <div className={`${className}${appendClass}  scrollbar-thin`}>
        <div className="flex flex-col overflow-auto  h-[90vh]">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              route={item.route}
              icon={item.icon}
              setter={item.setter}
              subOptions={item.subOptions}
            />
          ))}
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
