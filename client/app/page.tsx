import React from 'react'
import { Navbar } from '@/components/custom/navbar'
import {Home} from '@/components/custom/home'
import Newlaunches from '@/components/custom/newlaunches'
import About from '@/components/custom/about'
import Footer from '@/components/custom/footer'
const page = () => {
  return (
    <div className='min-h-screen w-full bg-background '>
      <Navbar/>
      <div className="bg-grid-black/[0.2]">
      <Home/>
      <Newlaunches/>
      <About/>
      <Footer/>
      </div>
    </div>
  )
}

export default page