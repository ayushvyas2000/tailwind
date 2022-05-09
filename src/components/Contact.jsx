import React from 'react'
import AppWrap from './AppWrap'
import {HiMail,HiPhone} from 'react-icons/hi'
const Contact = () => {
    const contact=[{
      name:'email',
      value:'thedynamicdev200@gmail.com',
      component: <HiMail />
    },
    {
      name:'phone',
      value:'+91922191129',
      component: <HiPhone />
    },]
  return (
    <section>
      <div className=' m-auto justify-center items-center flex'>
        <a href="mailto:someone@mozilla.org" className='mx-5 opacity-60 duration-300 ease-in hover:opacity-100 bg-emerald-500 rounded-full shadow-md p-2 text-white text-2xl'>
          <HiMail /></a>
        <a href='tel:+91922191129' className='mx-5 opacity-60 duration-300 ease-in hover:opacity-100 bg-emerald-500 rounded-full shadow-md p-2 text-white text-2xl'>
          <HiPhone /></a>
      </div>

      <div className='h-36 flex justify-center items-center flex-col text-sm bg-white mt-16 text-emerald-600  rounded-lg shadow-lg'>
        {contact.map((item,index)=>(
          <div key={index} className='flex justify-between items-center'> 
          <div className='w-24 justify-center uppercase  py-4  flex items-center ' >
          {item.component}
          {item.name}
          </div>
          <div className=' w-52 py-4 px-1 flex items-center justify-start'>
          <p>{item.value}</p>
          </div>
          </div>
        ))
        }
      </div>
    </section>
  )
}

export default AppWrap(Contact,'Contact','Contact Us')