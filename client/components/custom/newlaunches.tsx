"use client";
import React from "react";
import { ThreeDCardDemo } from "../ui/threedcarddemo";
const Newlaunches = () => {
  return (
    <div className="flex flex-col w-full ">
         <div className="flex flex-col justify-center items-center -mt-96 w-full ">
         <button className="px-8 py-2 -mt-96  border-2 border-black dark:border-white uppercase bg-secondary_color text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
        Choose your category
      </button>
      </div>
      <h1 className="text-6xl font-bold font-Cinzel_Decorative pl-20 text-gray-800 dark:text-gray-200">
        New Launches
      </h1>
      <ThreeDCardDemo />
      <div className="flex flex-col justify-center items-center w-full pb-10">
      <button className="px-8 py-2  border-2 border-black dark:border-white uppercase bg-secondary_color text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
        View All Products →
      </button>
      </div>
    </div>
  );
};

export default Newlaunches;
