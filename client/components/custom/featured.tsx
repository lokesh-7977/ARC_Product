import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const Featured = () => {
  return (
    <div className="w-full min-h-screen px-10 py-7">
      <div className="flex w-full justify-center items-center py-7">
        <h1 className="text-6xl font-bold font-Cinzel_Decorative pl-5 md:pl-20 text-gray-800 dark:text-gray-200">
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
    title: "Tote bags",
    description: "350Rs",
    header: "/assets/feature1.png",
    className: "md:col-span-2",
  },
  {
    title: "Crockery sets",
    description: "500Rs",
    header: "/assets/feature2.png",
    className: "md:col-span-1",
  },
  {
    title: "Sweaters",
    description: "1000Rs",
    header: "/assets/feature3.png",
    className: "md:col-span-1",
  },
  {
    title: "Cloth Bag",
    description: "200Rs",
    header: "/assets/feature4.png",
    className: "md:col-span-2",
  },
];

export default Featured;
