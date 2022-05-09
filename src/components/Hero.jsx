import React from 'react'
import logo from '../assets/logo.svg'
import AppWrap from './AppWrap'

const Hero = () => {
  return (
    <div id='Home' className='w-full h-screen py-32'>
    <section  className=' max-w-screen-lg m-auto flex flex-col items-center p-10 
    space-y-7 md:justify-between md:flex-row-reverse md:p-20 md:py-32 justify-center shadow-lg
    bg-white rounded-xl'>
      <img src={logo} className='md:w-1/2 w-96' alt="logo" />
        
        <div className='md:w-1/2 items-center flex flex-col space-y-5'>
        <h1 className='md:leading-10 text-center sm:text-3xl md:text-4xl lg:text-5xl text-2xl font-medium'>Welcome to <br />
        <span className='text-emerald-600 capitalize italic'>the dynamic dev</span></h1>
        <a href='#About' className='bg-emerald-500 p-2 px-4 rounded-full uppercase duration-500 ease-in
         text-white font-medium opacity-60 hover:opacity-100 '>
            Learn More</a>
            </div>
    </section>
    </div>
  )
}

export default Hero