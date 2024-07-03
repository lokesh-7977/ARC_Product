"use client";
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export default function  productCard(){
    return (
        <Card className='pt-3 w-[280px]'>
            <CardContent className='flex flex-col gap-2 items-center'>
                <div>
                    {/* <Image src="https://eco-mart.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduhrur1jj%2Fimage%2Fupload%2Fv1705909922%2Ffolder_eco_mart%2Fpsagcvspa4q9bawlxgyj.webp&w=1920&q=75" alt="Product" className='h-52' /> */}
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-lg font-medium leading-6 text-center'>Black Cotton Fabrics Sneaker Shoes Slip-Ons & Sneakers for Men</h1>
                    <div className='flex flex-row gap-2 items-center justify-center'>
                        <p className='text-sm font-semibold text-green-700'>$95.00</p>
                        <p className='text-xs font-light line-through'>$105.00</p>
                    </div>
                </div>
                <button className=' rounded-full w-fit py-1 px-3 text-sm font-medium bg-green-600 text-white'>Add to Cart</button>
            </CardContent>
        </Card>
    )
}

