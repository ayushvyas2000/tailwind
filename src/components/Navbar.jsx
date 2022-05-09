import React, { useState } from 'react'
import { HiMenu,HiX } from 'react-icons/hi'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const list=['Home','About','Testimonials','Contact']
  return (<>
    <header className='bg-emerald-500 shadow-lg text-white flex items-center p-5 justify-between lg:px-32 fixed top-0 left-0 right-0 z-50' >
        <a href='#Home' className='cursor-pointer text-xl font-bold'>The Dynamic Dev</a>
        <nav className='flex sm:space-x-10 lg:space-x-20 sm:block hidden'>
        {list.map((item,index)=>(
            <a className=' ease-in duration-500 opacity-70 hover:opacity-100' key={index} href={`#${item}`}>{item}</a>
        ))

        }
        </nav>
        <button onClick={()=>setToggle(true)} className="sm:hidden ease-in opacity-60 duration-500 hover:opacity-100">
            <HiMenu className='text-3xl' />
        </button>
    </header>
    <aside className={`${!toggle && 'translate-x-full'} text-white fixed sm:hidden top-0 transition-all duration-500 ease-in bg-emerald-500 w-full h-screen flex items-center justify-center z-50 overflow-hidden`} >
        <button onClick={()=>setToggle(false)} className='duration-500 transition-all ease-in opacity-60 hover:opacity-100 absolute m-5 top-0 right-0'>
            <HiX className='text-3xl' /></button>
        <div className=' flex space-y-5 flex-col items-center'>
        {
            list.map((item,index)=>(
                <a onClick={()=>setToggle(false)} className='py-2 px-5 border-b-2 uppercase ease-in duration-500 opacity-70 hover:opacity-100' key={index} href={`#${item}`}>{item}</a>
            ))
        }
        </div>
    </aside>
    </>
  )
}

export default Navbar