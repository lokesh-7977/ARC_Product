import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from 'react-icons/fa';
import {FaStore} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='bg-[#A0937D] h-[250px] text-3xl font-Cinzel_Decorative text-black px-5 flex flex-col w-full  items-center'>
      <div className='flex w-full '>
        <div className='flex justify-start pt-20 pl-4'>
      <FaStore className='text-black pr-1 h-10 w-10 '/>
      <div className='text-2xl font-semibold font-Cinzel_Decorative text-black pt-2'>ARC_Product</div>
      </div>
        <div className='flex-col justify-end ml-auto'>
        <h3 className=' font-normal pt-10 pb-7'>Stay sustainale and Subscribe now.</h3>
        <div className='flex w-fit pb-4 '>
          <input type='email' placeholder='Enter your email' className='px-7 py-2 text-xl bg-white'/>
          <button className='bg-text_black text-white px-4 py-2 text-xl '>Subscribe</button>
        </div>
        </div>
        </div>
        <hr className='w-full h-[0.5px] bg-black mt-7'/>
        <div className='flex w-full '>
          
        <div className='flex flex-col justify-start items-start space-x-4 md:space-x-10 pt-2'>
          
        <div className='text-lg'>&copy; All copyrights reserved.</div>
        
      </div>
      <div className='flex justify-end items-end ml-auto space-x-4 md:space-x-10 pt-2'>
      {/* <div className=' text-center font-semibold'>
        <h4 className=''>Connect with<span></span> Us </h4>
      </div> */}
        <a href='' target='_blank' rel='noreferrer' >
          <FaInstagram className='h-6 w-6'/>
        </a>
        
        <a href='' target='_blank' rel='noreferrer' >
          <FaLinkedinIn className='h-6 w-6'/>
        </a>
        <a href='https://twitter.com/yourTwitterHandle' target='_blank' rel='noreferrer' >
          <FaTwitter className='h-6 w-6'/>
        </a>
        <a href='https://www.facebook.com/yourFacebookPage' target='_blank' rel='noreferrer' >
          <FaFacebookF className='h-6 w-6'/>
        </a>
        
      </div>
      </div>
      {/* <hr className='w-full h-[0.5px] bg-black mt-5'/>
      <div className='text-lg'>&copy; All copyrights reserved.</div> */}
    </footer>
  )
}

export default Footer