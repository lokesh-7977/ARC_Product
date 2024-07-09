"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useMyContext } from '@/Context/CartContext'; // Adjust path as needed
import { MyContextProvider } from '@/Context/CartContext'; // Adjust path as needed

const Page = () => {
  const { cart, setCart } = useMyContext();
  const [counts, setCounts] = useState<number[]>([]);

  useEffect(() => {
    setCounts(cart.items.map(() => 1)); // Initialize counts when cart items change
  }, [cart.items]);

  useEffect(() => {
    console.log('Cart items in Page component:', cart.items);
  }, [cart.items]);

  const handleMinusClick = (index: number) => {
    if (counts[index] > 1) {
      const newCounts = [...counts];
      newCounts[index] -= 1;
      setCounts(newCounts);
    }
  };

  const handlePlusClick = (index: number) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDivCloseClick = (index: number) => {
    const updatedItems = cart.items.filter((_, i) => i !== index);
    setCart({ ...cart, items: updatedItems });
    setCounts(counts.filter((_, i) => i !== index)); // Remove corresponding count
  };

  return (
    <div className="bg-background min-h-screen w-full flex">
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-10 md:gap-20">
        <div className="flex-col justify-start pt-10 md:pt-0 pl-0 md:pl-10">
          <div className="font-Cinzel_Decorative text-5xl text-text_black border-[0.5px] border-white/[0.2] pb-4 ">
            Cart
          </div>
          {cart.items.length === 0 ? (
            <div>Your cart is empty.</div>
          ) : (
            cart.items.map((item, index) => (
              <div key={index} className="bg-white w-fit px-2 md:px-7 py-9 flex gap-2 md:gap-40 relative">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                  />
                  <div className="text-xl font-bold py-5">{item.title}</div>

                  <div className="hidden md:flex items-center">
                    <button
                      className="px-3 py-1 bg-gray-200"
                      onClick={() => handleMinusClick(index)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={counts[index]}
                      onChange={(e) => {
                        const newCounts = [...counts];
                        newCounts[index] = Number(e.target.value);
                        setCounts(newCounts);
                      }}
                      className="w-16 text-center"
                    />
                    <button
                      className="px-3 py-1 bg-gray-200"
                      onClick={() => handlePlusClick(index)}
                    >
                      +
                    </button>
                  </div>

                  <div className="text-xl font-bold py-5 pr-0 md:pr-7">
                    {item.price}
                  </div>
                  <AiOutlineClose
                    className="absolute top-0 right-0 m-2 cursor-pointer"
                    onClick={() => handleDivCloseClick(index)}
                  />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex ml-2 md:ml-0 flex-col border-2 border-secondary_color bg-white w-[20rem] h-[20rem] mr-0 md:mr-32 mt-20">
          <div className="font-Cinzel_Decorative text-text_black pb-4 w-20 pl-32 flex pt-5 ">
            Total
          </div>
          <hr className="bg-black w-56 h-[2px] text-black ml-12" />
          <div className="font-Cinzel_Decorative text-text_black pb-4 w-20 pl-12 flex pt-5 font-bold">
            SubTotal<span className="pl-28 font-regular ">1500Rs</span>
          </div>
          <hr className="bg-black w-56 h-[2px] text-black ml-12" />
          <div className="font-Cinzel_Decorative text-text_black pb-4 w-20 pl-12 flex pt-5 font-bold ">
            Delivery<span className="pl-28 font-regular ">1500Rs</span>
          </div>
          <div className="w-full items-center justify-center flex pt-5">
            <Link href="/checkout">
              <button className="px-5 w-40 py-2 border-2 border-black dark:border-white uppercase bg-secondary_color items-center justify-center text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                CheckOut →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  return (
    <MyContextProvider>
      <Page />
    </MyContextProvider>
  );
};

export default CartPage;
