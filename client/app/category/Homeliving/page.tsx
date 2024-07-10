import React from 'react'
import Image from "next/image"
import Navbar from '@/components/custom/navbar';
import Footer from '@/components/custom/footer';
const page = () => {
    const Card=() => {
        return (
            <div className='w-[20rem] h-[20rem] bg-white '>
                <Image src="/assets/paperbags.png" alt="" height={300} width={200} className='w-full h-[70%]'/>
                <div className='text-xl text-left pl-7 font-Cinzel_Decorative font-semibold pt-5 w-full h-[30%] '>Paperbags  <br/> Rs: 20</div>
            </div>
        )
    };
  return (
    <div className='w-full min-h-screen'>
        <Navbar/>
        <div className='w-full flex flex-col gap-10 py-40 px-20  bg-background'>
            <h1 className='text-4xl font-bold font-Cinzel_Decorative'>Latest Products </h1>
            <div className='flex flex-wrap'>
                <Card/>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default page