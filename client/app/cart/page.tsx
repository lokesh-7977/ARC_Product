"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useMyContext } from "@/Context/CartContext";
import { AuthProvider, useAuth } from "@/Context/AuthContext";
import { MyContextProvider } from "@/Context/CartContext";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const CART_STORAGE_KEY = "cartItems";
const DELIVERY_FEE = 200;

const CartPage = () => {
  const { cart, setCart } = useMyContext();
  const { isAuthenticated } = useAuth();
  const [counts, setCounts] = useState<number[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCart({ items: parsedCartItems });
      setCounts(parsedCartItems.map(() => 1));
    }
  }, [setCart]);

  useEffect(() => {
    if (cart.items.length > 0) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart.items));
      setCounts(cart.items.map(() => 1));
    }
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
    setCounts(counts.filter((_, i) => i !== index));
  };

  const calculateSubtotal = () => {
    return cart.items.reduce((total, item, index) => total + item.price * counts[index], 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal + DELIVERY_FEE;
  };

  if (!isAuthenticated) {
    return <div>Please log in to view your cart.</div>;
  }

  return (
    <div className="w-full min-h-screen bg-background flex flex-col md:flex-row ">
      <div className="flex flex-col pl-10 ">
        <Link href="/" className="flex text-xl font-Poppins font-bold pt-10 pb-20 md:pb-0">
          <FaArrowAltCircleLeft className="h-10 w-10" />
          <span className="pt-1 pl-3">Go Back Home</span>
        </Link>
        <div className="justify-start">
          <h1 className="text-4xl font-semibold pt-20 pl-0 md:pl-16 ">Cart</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-0 px-2 md:px-10 py-7">
            {cart.items.length === 0 ? (
              <div>Your cart is empty.</div>
            ) : (
              cart.items.map((item, index) => (
                <div key={index} className="bg-white mx-5 w-[15rem] h-[20rem] flex flex-col">
                  <div className="w-full h-[70%] relative">
                    <AiOutlineClose
                      className="absolute top-0 right-0 z-50 cursor-pointer p-1 h-7 w-7"
                      onClick={() => handleDivCloseClick(index)}
                    />
                    <Image src={item.image} alt={item.title} width={100} height={100} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full h-[30%] pl-10 pt-3">
                    <div className="text-xl text-black font-Cinzel_Decorative font-semibold">{item.title}</div>
                    <div className="w-full hidden ">
                      <button className="minus-btn" onClick={() => handleMinusClick(index)}>
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
                        className="w-16 px-3"
                      />
                      <button className="plus-btn" onClick={() => handlePlusClick(index)}>
                        +
                      </button>
                    </div>
                    <div className="item-price">{item.price * counts[index]}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="justify-end ml-auto mr-5 bg-background border-[0.5px] border-secondary_color h-[20rem] my-32 w-[20rem]">
        <div className="w-full flex flex-col justify-center items-center pt-20 text-lg font-normal">
          <div className="text-2xl font-bold">
            Total: <span className="font-normal">{calculateTotal()} Rs</span>
          </div>
          <hr className="w-52 my-2 border-2 border-secondary_color" />
          <div className="text-2xl font-bold">
            Subtotal: <span className="font-normal">{calculateSubtotal()} Rs</span>
          </div>
          <hr className="w-52 my-2 border-2 border-secondary_color" />
          <div className="text-2xl font-bold">
            Delivery Fee: <span className="font-normal">{DELIVERY_FEE} Rs</span>
          </div>
          <hr className="w-52 my-2 border-2 border-secondary_color" />
          <div className="w-full items-center justify-center flex pt-5">
            <Link href="/checkout">
              <button className="px-5 w-40 py-2 border-2 border-black dark:border-white uppercase bg-secondary_color items-center justify-center text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]">
                CheckOut →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
