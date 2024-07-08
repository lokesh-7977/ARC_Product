"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function Home() {
  return <HeroParallax products={products} />;
}
export const products = [
    
  {
    title: "Clothing and Accessories",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/assets/clothesbefore.png",
    description: "A generic category for clothing and accessories.",
  },
  {
    title: "Home & Living",
    link: "https://cursor.so",
    thumbnail:
      "/assets/home.png",
    description: "ADiscover our Home & Living collection: eco-friendly decor, smart gadgets, and sleek furniture for a modern lifestyle",
  },/*4th card*/
  {
    title: "Sustainable Food and Drink",
    link: "https://userogue.com",
    thumbnail:
      "/assets/food.png",
      description: "Eco-friendly food and drink essentials, from reusable bottles to compostable pods.",
  },/*3rd card*/

  {
    title: "BodyCare",
    link: "https://cursor.so",
    thumbnail:
      "/assets/bodycare.png",
    description: "Explore our range of body care products designed to nourish, rejuvenate, and protect your skin, leaving it soft, smooth, and healthy ",
  },/*2ndcard*/
  {
    title: "Clothing and Accessories",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/assets/clothesbefore.png",
    description: "Discover our curated collection of clothing and accessories, where style meets comfort.",
  },/*1stpic*/
  {
    title: "BodyCare",
    link: "https://cursor.so",
    thumbnail:
      "/assets/bodycare.png",
    description: "Explore our range of body care products designed to nourish, rejuvenate, and protect your skin, leaving it soft, smooth, and healthy ",
  },
 {
    title: "Roguehhjikjokjo",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    description: "A minimalist, modern, and accessible text editor.",
  },
 
];
