import React, { useEffect, useState } from 'react'
import AppWrap from './AppWrap'
import {HiChevronLeft,HiChevronRight} from 'react-icons/hi'
const Testimonials = () => {
  const testimonials=[
    {
      title:'Portfolio Websites',
      desc:'Made portfolio and information websites for clients across the world using best in business web frameworks',
      img:'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'   
    },
    {
      title:'Brand Logo',
      desc:'Designed and produced logos for brands across different niches using adobe suite and other premium softwares',
      img:'https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80'
    },
    {
      title:'Client Support',
      desc:'Provided support for clients in situations of down-times or change requests without high pricing',
      img:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ]
  const [index, setIndex] = useState(0)
  const [list,setList]= useState (testimonials)
  
  useEffect(()=>{
    const lastIndex=list.length-1
    if (index<0) {
      setIndex(lastIndex)
    }
    if (index>lastIndex) {
      setIndex(0)
    }
  },[index,list])
  
  useEffect(()=>{
    let slider=setInterval(()=>{
      setIndex(index+1)
    },5000)
    return () =>{
      clearInterval(slider)
    }
  },[index])
  

  return (
    <section className='bg-white h-128 w-full max-w-4xl rounded-xl shadow-lg relative flex items-center overflow-hidden'>
    <button onClick={()=>setIndex(index-1)} className='z-10 mx-5 shadow-md shadow-black rounded-full bg-white text-emerald-600 opacity-60 duration-500 hover:opacity-100 ease-in absolute text-4xl left-0'>
      <HiChevronLeft /></button>
    <button onClick={()=>setIndex(index+1)} className='z-10 mx-5 shadow-md shadow-black rounded-full bg-white text-emerald-600 opacity-60 duration-500 hover:opacity-100 ease-in absolute text-4xl right-0'>
      <HiChevronRight /></button>
    {list.map((item,itemIndex)=>{
      const {title,desc,img}=item
      let position='translate-x-full opacity-0';
      if (itemIndex===index) {
        position='translate-x-0 opacity-100'
      }
      if (
        itemIndex === index - 1 ||
        (index === 0 && itemIndex === list.length - 1)
      ) {
        position = '-translate-x-full opacity-0';
      }

      return(
    <article className={` duration-500 ease-in absolute left-0 top-0 w-full h-full ${position} `}>
    <img className=' w-full h-full object-cover' src={img} alt={title} />
    <div className='text-center left-0 right-0 absolute bottom-0 bg-opacity-70 text-white p-6 bg-black'>
    <h3 className='uppercase mb-5 text-3xl'>{title}</h3>
    <p>{desc}</p>
    </div>
    </article>
      )
    })
    }
    </section>
  )
}

export default AppWrap(Testimonials,'Testimonials','Our Testimonials')