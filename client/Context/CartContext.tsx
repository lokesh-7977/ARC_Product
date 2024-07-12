"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  title: string;
  price: number;
  image: string;
}

interface CartContextType {
  cart: { items: CartItem[] };
  setCart: React.Dispatch<React.SetStateAction<{ items: CartItem[] }>>;
  addItemToCart: (item: CartItem) => void;
}

const CART_STORAGE_KEY = "cartItems";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<{ items: CartItem[] }>({ items: [] });

  useEffect(() => {
    const storedCartItems = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCartItems) {
      setCart({ items: JSON.parse(storedCartItems) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart.items));
  }, [cart.items]);

  const addItemToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const updatedItems = [...prevCart.items, item];
      return { items: updatedItems };
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
