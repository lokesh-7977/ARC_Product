import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const Featured = () => {
  return (
    <div className="w-full min-h-screen px-10 py-7">
      <div className="flex w-full justify-center items-center py-7">
        <h1 className="text-6xl font-bold font-Cinzel_Decorative pl-20 text-gray-800 dark:text-gray-200">
          Featured Products
        </h1>
      </div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: "/assets/banner1.png",
    className: "md:col-span-2",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: "/assets/banner2.png",
    className: "md:col-span-1",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: "/assets/banner3.png",
    className: "md:col-span-1",
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: "/assets/banner3.png",
    className: "md:col-span-2",
  },
];

export default Featured;
