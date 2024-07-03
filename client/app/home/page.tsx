"use client";
import Navbar from './_components/navbar'
import Products from './_components/products'

export default function page(){
    return (
        <>
            <div className='w-full min-h-screen bg-gray-100 flex flex-col gap-3 pb-8'>
                <Navbar />
                <div className='mx-5 flex flex-col gap-3'>
                    {/* <Categories /> */}
                    {/* <Banner /> */}
                    <Products />
                </div>
            </div>
        </>
    )
}

