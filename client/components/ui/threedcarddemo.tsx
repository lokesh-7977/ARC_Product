"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
    const cardData = [
        {
          title: "Paper bags",
          description: "20Rs",
          image:"/assets/paperbags.png",
        },
        {
          title: "Red Blazer",
          description: "1500 Rs",
          image:"/assets/blazer.png",
        },
        {
            title: "Body Wash",
            description: "300 Rs",
            image:"/assets/bodywash.png",
          },
          {
            title: "Bamboo Toothbrush",
            description: "30 Rs",
            image:"/assets/toothbrush.png",
          },
        // Add more objects as needed
      ];
      
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-10 px-10 ">
    {cardData.map((card, index) => (
    <CardContainer key={index} className="">
      <CardBody className="bg-white bg-opacity-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl ml-7 font-bold text-neutral-600 dark:text-white"
        >
          {card.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 ml-7 text-xl font-bold max-w-sm mt-2 dark:text-neutral-300"
        >
          {card.description}
        </CardItem>
        <div className="w-full flex items-center justify-center">
        <CardItem translateZ="100" className="w-[90%] mt-4 ">
          <Image
            src={card.image}
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link href="/cart">
          <button className="px-8 py-2  border-2 border-black dark:border-white uppercase bg-secondary_color text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
        Add to Cart →
      </button>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
    ))}
    </div>
  );
}
