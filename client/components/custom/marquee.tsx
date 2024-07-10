import React from 'react'
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import { FaStore } from 'react-icons/fa';
const marquee = () => {
  return (
    <div className=' flex w-full bg-[#E7D4B5] h-8 font-Poppins text-sm'>
        <div className='flex w-[100%] md:w-[70%]'>
        <Marquee>
        <span className="mx-10">😃2M+ HAPPY CUSTOMERS</span>
            <span className="mx-10">💱 7 DAYS FREE EXCHANGE</span>
            <span className="mx-10">🚚 FREE SHIPPING ABOVE ₹499</span>
        </Marquee>
        </div>
        <div className='hidden md:flex w-[30%] gap-10 pl-20 pt-1 font-Cinzel_Decorative'>

            <Link href="/login" className='pt-1'>Login/signUp</Link>
            <div className='flex'>
                <FaStore className='text-secondary_color pr-1 h-6 w-6 '/>
            <Link href="/" className='pt-1'>Become a seller</Link>
            </div>
        </div>
        </div>
  )
}

export default marquee