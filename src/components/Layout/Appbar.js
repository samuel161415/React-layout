// @/components/Layout/AppBar.js
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaCog } from "react-icons/fa";
import { useRouter } from "next/router";
import { BsChevronExpand } from "react-icons/bs";
import DropdownMenu from "../dropdown_menus/DropdownMenu";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import Profile from '../dropdown_menus/Profile'

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

export default function AppBar() {
  const [isDropdownOneOpen, setDropdownOneOpen] = useState(false);
  const [isDropdownTwoOpen, setDropdownTwoOpen] = useState(false);
  const [selectedOptionOne, setSelectedOptionOne] = useState("fingaroo");
  const [selectedOptionTwo, setSelectedOptionTwo] = useState("default");

  const handleDropdownOneToggle = () => setDropdownOneOpen(true);
  const handleDropdownTwoToggle = () => setDropdownTwoOpen(true);

  const handleCloseDropdownOne = () => setDropdownOneOpen(false);
  const handleCloseDropdownTwo = () => setDropdownTwoOpen(false);

  const handleSelectOptionOne = (optionId) => setSelectedOptionOne(optionId);
  const handleSelectOptionTwo = (optionId) => setSelectedOptionTwo(optionId);

  const getSelectedOptionTextOne = () => {
    const options = {
      fingaroo: "Fingaroo",
      fingaroo1: "Fingaroo1",
    };
    return options[selectedOptionOne];
  };
  const getSelectedOptionTextTwo = () => {
    const options = {
      default: "Default Project",
      create: "Create Project",
      overview: "Organization Overview",
    };
    return options[selectedOptionTwo];
  };

  const optionOne = [
    {
      id: "fingaroo",
      label: "Fingaro",
      icon: <CheckIcon sx={{ width: "20px" }} />,
    },
    {
      id: "fingaroo1",
      label: "Fingaro1",
      icon: <CheckIcon sx={{ width: "20px" }} />,
    },
  ];
  const optionTwo = [
    {
      id: "default",
      label: "Default Project",
      icon: <CheckIcon sx={{ width: "20px" }} />,
    },
    {
      id: "create",
      label: "Create Project",
      icon: <AddIcon sx={{ width: "20px" }} />,
    },
    {
      id: "overview",
      label: "Organization Overview",
      icon: <CorporateFareIcon sx={{ width: "20px" }} />,
    },
  ];

  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 h-[60px] bg-black text-white z-50 px-4">
      <div className="flex items-center gap-4">
        <Link href="/">
          {/*eslint-disable-next-line*/}
          <div className=" flex justify-center items-center font-semibold  text-darkGray">
            <Image
              src={"/assets/images/logo.png"}
              class="object-cover h-full w-full"
              width={100}
              height={200}
              alt="logo"
            />
          </div>
        </Link>
        <div
          onMouseEnter={handleDropdownOneToggle}
          onMouseLeave={handleCloseDropdownOne}
          className="relative flex justify-center items-center"
        >
          <span className="mr-1">{getSelectedOptionTextOne()}</span>
          <BsChevronExpand className="ml-1" />
          <DropdownMenu
            isOpen={isDropdownOneOpen}
            onClose={handleCloseDropdownOne}
            onSelect={handleSelectOptionOne}
            selectedOption={selectedOptionOne}
            options={optionOne}
          />
        </div>
        <span className="text-white/50">/</span>
        {/* Second Dropdown */}
        <div
          onMouseEnter={handleDropdownTwoToggle}
          onMouseLeave={handleCloseDropdownTwo}
          className="relative flex justify-center items-center"
        >
          <span className="mr-2 ">
            {getSelectedOptionTextTwo()}
          </span>
          <BsChevronExpand className="ml-1" />
          <DropdownMenu
            isOpen={isDropdownTwoOpen}
            onClose={handleCloseDropdownTwo}
            onSelect={handleSelectOptionTwo}
            selectedOption={selectedOptionTwo}
            options={optionTwo}
          />
        </div>
      </div>
      <div className="flex items-center ml-auto gap-4">
        <MenuItem name="Dashboard" route="/dashboard" />
        <MenuItem name="Docs" route="/docs" />
        <MenuItem
          name="API Reference"
          route="/api-reference"
          //   icon={<FaChartBar />}
        />
        {/* <MenuItem name="" route="/settings" icon={<FaCog />} />
        <MenuItem name="" route="/profile" icon={<FaUser />} /> */}
        <Profile />
      </div>
    </nav>
  );
}
