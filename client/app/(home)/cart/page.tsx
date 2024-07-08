"use client"
import React,{useState} from 'react'
import { Navbar } from '@/components/custom/navbar'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
const Page = () => {
   // Move this before any early return
    const [count, setCount] = useState(0); // Ensure this is also at the top
    const [isDivVisible, setIsDivVisible] = useState(true);
    const handleMinusClick = () => {
      if (count > 0) setCount(count - 1);
    };
  
    const handlePlusClick = () => {
      setCount(count + 1);
    };
  
   // Step 1: State for the div's visibility

  const handleDivCloseClick = () => setIsDivVisible(false);  // Function to hide the div
  

  return (
    <div className='bg-background min-h-screen w-full flex'>
        <Navbar/>
        <div className='flex flex-col md:flex-row w-full items-center justify-between gap-10 md:gap-20'>
            <div className='flex-col justify-start pt-10 md:pt-0 pl-0 md:pl-10'>
            <div className='font-Cinzel_Decorative text-5xl  text-text_black border-[0.5px] border-white/[0.2] pb-4 '>Cart</div>
            {isDivVisible && (<div className='bg-white w-fit px-2 md:px-7 py-9 flex gap-2 md:gap-40 relative'> {/* Make sure the div is relative for absolute positioning of the close icon */}
      
      <Image src='https://plus.unsplash.com/premium_photo-1720188548640-3c5602bb7832?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='blazer' width={100} height={100}/>
      <div className='text-xl font-bold py-5'>Red Blazer for Women</div>
      
        <div className='hidden md:flex items-center'>
        <button className='px-3 py-1 bg-gray-200' onClick={handleMinusClick}>-</button>
        <input type='number' value={count} onChange={(e) => setCount(Number(e.target.value))} className='w-16 text-center' />
        <button className='px-3 py-1 bg-gray-200' onClick={handlePlusClick}>+</button>
      </div>
      
      <div className='text-xl font-bold py-5 pr-0 md:pr-7'>1500Rs </div>
      <AiOutlineClose className='absolute top-0 right-0 m-2 cursor-pointer' onClick={handleDivCloseClick} />
    </div>
  )}
            
            </div>
            <div className='flex ml-2 md:ml-0 flex-col border-2 border-secondary_color bg-white w-[20rem] h-[20rem] mr-0 md:mr-32 mt-20'>
                <div className='font-Cinzel_Decorative text-text_black  pb-4 w-20 pl-32  flex pt-5 '>Total</div>
                <hr className='bg-black w-56 h-[2px] text-black ml-12'/>
                <div className='font-Cinzel_Decorative text-text_black  pb-4 w-20 pl-12 flex pt-5 font-bold'>SubTotal<span className='pl-28 font-regular '>1500Rs</span></div>
                <hr className='bg-black w-56 h-[2px] text-black ml-12'/>
                <div className='font-Cinzel_Decorative text-text_black  pb-4 w-20 pl-12 flex pt-5 font-bold '>Delivery<span className='pl-28 font-regular '>1500Rs</span></div>
                <div className='w-full items-center justify-center flex pt-5'>
               <Link href='/checkout'> <button className="px-5 w-40 py-2  border-2 border-black dark:border-white uppercase bg-secondary_color items-center justify-center text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
       CheckOut →
      </button>
      </Link>
      </div>
            </div>
        </div>
    </div>
  )
}

export default Page