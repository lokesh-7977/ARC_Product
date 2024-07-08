import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='bg-text_black text-white dark:text-black-500 py-10 px-5 flex flex-col w-full justify-center items-center'>
        <h3 className='text-xl font-bold py-10'>From the clothes we wear to the products we use,
        evrything holds the potential to either harm or heal our world.</h3>
      <div className='flex justify-center items-center space-x-4 md:space-x-10'>
      <div className=' text-center font-semibold'>
        <h4 className=''>Connect with<span></span> Us </h4>
      </div>
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
     
      
    </footer>
  )
}

export default Footer