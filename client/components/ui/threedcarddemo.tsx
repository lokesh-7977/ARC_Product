import Image from "next/image";
import React from "react";
import Swal from "sweetalert2";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { useMyContext } from "@/Context/CartContext";
import { useAuth } from "@/Context/AuthContext";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
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
      Swal.fire({
        icon: 'warning',
        title: 'Please login first',
        showConfirmButton: true,
        confirmButtonText: 'Login',
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/login');
        }
      });
      return;
    }

    const newCart = {
      ...cart,
      items: [...cart.items, card],
    };
    setCart(newCart);

    Swal.fire({
      icon: 'success',
      title: 'Item added to cart',
      showConfirmButton: true,
      confirmButtonText: 'Go to Cart',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/cart');
      }
    });
  }

  return (
    <div className="my-10 bg-white flex flex-col h-[16rem] md:h-[30rem]">
      <div className="h-[70%]">
  <Image
    src={card.image}
    height={1000}
    width={1000}
    alt="thumbnail"
    className="object-cover h-full w-full"
  />
</div>

      <div className="h-[30%] bottom-0 ">
        <div
          
          className="text-lg ml-2 md:ml-7 md:text-xl font-bold text-neutral-600 "
        >
          {card.title}
        </div>
        <div
          
          
          className="text-lg md:text-xl ml-2 md:ml-7"
        >
          {card.price} Rs
        </div>
        
        <div className="flex justify-center items-center pt-2">
    <button
      className="relative bottom-0  px-2 md:px-14 py-1 md:py-3 w-72 bg-black hover:bg-white border-2 border-black text-white hover:text-black flex items-center justify-center overflow-hidden hover-transition"
      onClick={addtoCart}
    >
      <span className="button-content flex items-center">
        <FaShoppingCart className="w-5 h-5 mr-2" />
        Add to Cart →
      </span>
    </button>
  </div>
      </div>
    </div>
  );
}
