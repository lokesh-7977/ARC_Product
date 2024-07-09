"use client";
import React,{useState} from "react";
import { ThreeDCardDemo } from "../ui/threedcarddemo";
import { Card } from "@/components/ui/card";



const Newlaunches: React.FC = () => {
  const [viewAll, setViewAll] = useState(false); // Step 1: State for toggling view

  // Step 2: Click handler for the button
  const handleViewAllClick = () => {
    setViewAll(true);
  };

  const cardData = [
    {
      title: "Paper bags",
      price: 20,
      image:"/assets/paperbags.png",
    },
    {
      title: "Red Blazer",
      price: 1500,
      image:"/assets/blazer.png",
    },
    {
        title: "Body Wash",
        price: 30,
        image:"/assets/bodywash.png",
      },
      {
        title: "Bamboo Toothbrush",
        price: 30,
        image:"/assets/toothbrush.png",
      },
      {
        title: "Bamboo Toothbrush",
        price: 30,
        image:"/assets/toothbrush.png",
      },
      {
        title: "Bamboo Toothbrush",
        price: 30,
        image:"/assets/toothbrush.png",
      },
      {
        title: "Bamboo Toothbrush",
        price: 30,
        image:"/assets/toothbrush.png",
      },
  ];
  
  return (
    <div id="new" className="flex flex-col w-full pt-20 ">
      
      <h1 className="text-6xl font-bold font-Cinzel_Decorative pl-20 text-gray-800 dark:text-gray-200 pt-5">
        New Launches
      </h1>
      
      <div className="grid grid-cols-4  gap-5  w-fullc px-5">
      {cardData.slice(0, viewAll ? undefined : 4).map((card, index) => (
          <ThreeDCardDemo key={card.title} card={card} />
        ))}
        </div>
       
        {!viewAll && ( // Only show the button if viewAll is false
        <div className="flex flex-col justify-center items-center w-full pb-10">
          <button
            className="px-8 py-2 border-2 border-black dark:border-white uppercase bg-secondary_color text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            onClick={handleViewAllClick}
          >
            View All Products →
          </button>
        </div>
      )}
    </div>
  );
};

export default Newlaunches;
