import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { TbMovie } from "react-icons/tb";
import { VscTriangleDown } from "react-icons/vsc";
import {
     FaSearch,
     FaHeart, 
     FaDesktop, 
     FaRegClock, 
     FaPlusSquare, 
     FaRegFolder, 
     FaFolder } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="h-screen flex flex-col min-w-[254px] min-h-[950px] bg-[#2c2c2c] text-[#DCDADA] shadow-xl">

        <div className="order-1 flex flex-col">
            <h1 className="flex w-full m-2 pr-2 text-[18px] font-extrabold"><FaDesktop className="pr-1 text-[30px]"/>Heff Video Player</h1>
            <h2 className="m-2 text-[14px] font-bold">Discovery</h2>
            <ul className="text-[14px]">
                <li className="flex m-2 pr-2"><FaSearch className="pr-1 text-[20px]" /><input placeholder="Video Name" className="rounded-sm text-gray-500 text-[14px] shadow-sm" /></li>
                <li className="flex m-2 pr-2"><FaRegClock className="pr-1 text-[20px]" />Recent</li>
                <li className="flex m-2 pr-2"><FaHeart className="text-red-500 pr-1 text-[20px]"/>Favorites</li>
            </ul>
        </div>

        <div className="order-2 flex flex-col">
            <h2 className="flex m-2 text-[14px] font-bold ">Your History</h2>
            <ul className="text-[14px]">
                <li className="flex m-2 pr-2"><FaPlusSquare className="pr-1 text-[20px]" />Add Folder</li>
                <li className="flex m-2 pr-2"><FaRegFolder className="pr-1 text-[20px]" />Folder</li>
                <li className="flex m-2 pr-2"><FaRegFolder className="pr-1 text-[20px]" /> Folder</li>
                <li className="flex m-2 pr-2"><FaFolder className="pr-1 text-[20px]" />Open Folder<VscTriangleDown className="pl-1 text-[20px]" /></li>
                    <li className="flex m-3 pr-3"><TbMovie className="pr-1 text-[20px]" />FunnyCatsCompilation.yt</li>
                    <li className="flex m-3 pr-3"><TbMovie className="pr-1 text-[20px]" />AverageBoringStrimer.ttc</li>
                    <li className="flex m-3 pr-3"><TbMovie className="pr-1 text-[20px]" />SoWhatDoYouNeedMore.yt</li>
            </ul>
        </div>

        <div className="order-3 flex flex-col">
            <li className="flex m-2 pr-2"><IoSettingsSharp className="pr-1 text-[20px]" /> Settings</li>
        </div>

    </div>
  )
}

export default Navbar