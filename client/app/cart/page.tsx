"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useMyContext } from "@/Context/CartContext";
import { AuthProvider, useAuth } from "@/Context/AuthContext";
import { MyContextProvider } from "@/Context/CartContext";

const CART_STORAGE_KEY = "cartItems";

const Page = () => {
  const { cart, setCart } = useMyContext();
  const { isAuthenticated } = useAuth();
  const [counts, setCounts] = useState<number[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCartItems) {
      setCart({ items: JSON.parse(storedCartItems) });
      setCounts(JSON.parse(storedCartItems).map(() => 1));
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart.items));
    setCounts(cart.items.map(() => 1));
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

  if (!isAuthenticated) {
    return null;
  }

  return (
    <MyContextProvider>
    <div className="bg-background min-h-screen w-full flex">
      <div className="w-full">
      <div className="font-Cinzel_Decorative text-5xl text-text_black border-[0.5px] border-white/[0.2] pb-4 ">
            Cart
          </div>
      </div>
      <div className="cart-items">
        {cart.items.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          cart.items.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-image">
                <Image src={item.image} alt={item.title} width={100} height={100} />
              </div>
              <div className="item-details">
                <div className="item-title">{item.title}</div>
                <div className="item-actions">
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
                    className="count-input"
                  />
                  <button className="plus-btn" onClick={() => handlePlusClick(index)}>
                    +
                  </button>
                </div>
                <div className="item-price">{item.price}</div>
                <AiOutlineClose className="close-icon" onClick={() => handleDivCloseClick(index)} />
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <div className="summary-total">Total</div>
        <hr className="summary-divider" />
        <div className="summary-subtotal">
          SubTotal <span className="subtotal-amount">1500 Rs</span>
        </div>
        <hr className="summary-divider" />
        <div className="summary-delivery">
          Delivery <span className="delivery-amount">1500 Rs</span>
        </div>
        <div className="checkout-button">
          <Link href="/checkout">
            <button className="checkout-btn">CheckOut →</button>
          </Link>
        </div>
      </div>
    </div>
    </MyContextProvider>
  );
};

export default Page;
