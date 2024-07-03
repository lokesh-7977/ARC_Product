"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { BsCart3 } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoSearchSharp } from "react-icons/io5";

export default function navbar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    return (
        <>
            <div className='hidden md:flex flex-row  w-full justify-between bg-background p-5 shadow-sm gap-5'>
                <div className='flex flex-row gap-5 w-full'>
                    <div className='flex flex-row gap-2 items-center'>
                        {/* <Image src={"/"} width={32} height={32} alt='Logo' /> */}
                        <h1 className='text-2xl font-bold uppercase'>Eco<span className='text-green-700'>Mart</span></h1>
                    </div>
                    <div className='flex flex-row items-center gap-2 border-[1px] p-2 bg-gray-100 text-gray-700 rounded-md flex-1'>
                        <IoSearchSharp />
                        <input type="text" placeholder='Search for products' className='outline-none text-sm bg-gray-100' />
                    </div>

                </div>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row items-center gap-2 border-[1px] rounded-md p-2 shadow-sm cursor-pointer' onClick={() => router.push("/")}>
                        <FaRegUserCircle className='text-lg' />
                        <p className='text-base font-medium'>Login</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 border-[1px] rounded-md p-2 shadow-sm cursor-pointer'>
                        <BsCart3 className='text-lg' />
                        <p className='text-base font-medium'>Cart</p>
                    </div>
                </div>
            </div>
            <div className='flex md:hidden flex-col  w-full  bg-background p-5 shadow-sm gap-5'>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-row gap-2 items-center'>
                        <Image src={"/shopping-cart.png"} width={20} height={20} alt='Logo' />
                        <h1 className='text-lg font-bold uppercase'>Eco<span className='text-green-700'>Mart</span></h1>
                    </div>
                    <div className='flex gap-3'>

                        <div className='flex flex-row items-center gap-1 border-[1px] rounded-md p-1 shadow-sm cursor-pointer' onClick={() => router.push("/")}>
                            <FaRegUserCircle className='text-base' />
                            <p className='text-sm font-medium'>Login</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 border-[1px] rounded-md p-1 shadow-sm cursor-pointer' onClick={() => router.push("/")}>
                            <BsCart3 className='text-base' />
                            <p className='text-sm font-medium'>Cart</p>
                        </div>
                    </div>

                </div>
                <div className='flex flex-row items-center gap-2 border-[1px] p-2 bg-gray-100 text-gray-700 rounded-md flex-1'>
                    <IoSearchSharp />
                    <input type="text" placeholder='Search for products' className='outline-none text-sm bg-gray-100' />
                </div>
            </div>
        </>
    )
}

