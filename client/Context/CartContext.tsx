"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  title: string;
  price: number;
  image: string;
}

interface CartContextType {
  cart: {
    items: CartItem[];
  };
  setCart: React.Dispatch<React.SetStateAction<{ items: CartItem[] }>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<{ items: CartItem[] }>({ items: [] });

  return (
    <CartContext.Provider value={{ cart, setCart }}>
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
