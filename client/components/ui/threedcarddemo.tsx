import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { useMyContext } from "@/Context/CartContext";
import { useAuth } from "@/Context/AuthContext";
import { useRouter } from "next/navigation";
export function ThreeDCardDemo({
  card,
}: {
  card: {
    title: string;
    image: string;
    price: number;
  };
}) {
  const { cart, setCart } = useMyContext();
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();

  function addtoCart() {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    const newCart = {
      ...cart,
      items: [...cart.items, card],
    };
    console.log('Adding to cart:', card);
    console.log('Cart after adding:', newCart);
    setCart(newCart);
  }

  return (
    <CardContainer className="">
      <CardBody className="bg-white bg-opacity-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
          {card.price} Rs
        </CardItem>
        <div className="w-full flex items-center justify-center">
          <CardItem translateZ="100" className="w-[90%] mt-4">
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
          <button
            className="px-8 py-2 border-2 border-black dark:border-white uppercase bg-secondary_color text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            onClick={addtoCart}
          >
            Add to Cart →
          </button>
        </div>
      </CardBody>
    </CardContainer>
  );
}
