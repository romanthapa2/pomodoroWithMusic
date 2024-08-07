import React from "react";
import { MdOutlineAssignmentInd } from "react-icons/md";
import TimeSettings from "./settings/TimeSettingOpener";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import ViewReport from "./report/ViewReport";

const NavbarHome: React.FC = () => {
  return (
    <div className="text-white flex flex-row items-center p-4 justify-center gap-[15%] overflow-x-hidden">
      <div>
        <h1 className="text-2xl">Pomofocus</h1>
      </div>
      <div className="flex gap-2 text-xl md:text-sm">
        <ViewReport />
        <TimeSettings />
        <button className="bg-gray-600 flex flex-row items-center p-2 rounded-md  gap-1">
          <MdOutlineAssignmentInd />
          <span className="hidden md:inline-block">Sign In </span>
        </button>
        <button className="bg-gray-600 flex flex-row items-center rounded-md  p-2 ">
          <PiDotsThreeOutlineVerticalThin />
        </button>
      </div>
    </div>
  );
};

export default NavbarHome;
