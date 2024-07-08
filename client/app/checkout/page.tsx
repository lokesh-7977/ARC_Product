import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { FaGoogle,FaArrowAltCircleLeft } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";
export function SignupFormDemo() {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted");
//   };
  return (
    <div className=" w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-xl text-neutral-800">
        Checkout
      </h2>
      

      <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Address</Label>
          <Input id="email" placeholder="Kolkata,West bengal" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="text">PostalCode</Label>
          <Input id="password" placeholder="712109" type="text" />
        </LabelInputContainer>
        

        
        
          
       
      </form>
    </div>
  );
}

const page = () => {
  return (
    <div className='flex flex-col md:flex-row w-full bg-background min-h-screen pb-10'>
         <div className="w-full md:w-[50%] pl-14 flex-col min-h-screen bg-background py-10 pr-10 ">
      <Link href='/' className="flex text-xl font-Poppins font-bold w-fit pb-10"> <FaArrowAltCircleLeft className="h-10 w-10"/><span className="pt-1 pl-3">Go Back Home</span> </Link> 
    <div className="flex w-fit"><SignupFormDemo/></div>
    </div>
    <div className='flex flex-col pt-10 '>
    <div className='flex-col justify-start'>
            <div className='font-Cinzel_Decorative text-5xl  text-text_black border-[0.5px] border-white/[0.2] pb-4 ml-20  md:ml-0'>Cart</div>
             <div className='bg-white w-fit px-7 py-9 flex gap-2 md:gap-20 relative'> {/* Make sure the div is relative for absolute positioning of the close icon */}
      
      <Image src='/assets/blazer.png' alt='blazer' width={100} height={100}/>
      <div className='text-xl font-bold py-5'>Red Blazer for Women</div>
      
        <div className='flex items-center'>
       
      </div>
      
      <div className='text-xl font-bold py-5 pr-7'>1500Rs </div>
      
    </div>
  
            
            </div>
            <div className='flex flex-col w-[20rem] h-[20rem] mr-32 mt-10'>
                <div className='font-Cinzel_Decorative text-text_black  pb-4 w-20 pl-32  flex pt-5 '>Total</div>
                <hr className='bg-black w-56 h-[2px] text-black ml-12'/>
                <div className='font-Cinzel_Decorative text-text_black  pb-4 w-20 pl-12 flex pt-5 font-bold'>SubTotal<span className='pl-28 font-regular '>1500Rs</span></div>
                <hr className='bg-black w-56 h-[2px] text-black ml-12'/>
                <div className='font-Cinzel_Decorative text-text_black  pb-4 w-20 pl-12 flex pt-5 font-bold '>Delivery<span className='pl-28 font-regular '>1500Rs</span></div>
                <div className='w-full items-center justify-center flex pt-5'>
               <Link href='/payment'> <button className="px-5 w-40 py-2  border-2 border-black dark:border-white uppercase bg-secondary_color items-center justify-center text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
       Payment →
      </button>
      </Link>
      </div>
    </div>
    </div>
    </div>
  )
}

export default page
const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
  
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };