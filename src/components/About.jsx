import React from 'react'
import AppWrap from './AppWrap'
const About = () => {

  const details=[{
    name: 'website developer',
    desc: 'We have expertise in creating web-apps/websites using latest and most efficient tools in order to deliver seamless experience and beautiful designs.'
  },
  {
    name: 'logo designer',
    desc: 'Want a logo for your brand?  We got you covered.  The Dynamic Dev uses premium softwares like Adobe suite to create high quality brand logos along with undersstanding of geometry and color pallete.'
  },
  {
    name: 'content creator',
    desc: 'Social media presence is the way to go when it comes to make your presence into any king of market.  We with our impeccable content writing and editing skills, try to provide our clients the best media.'
  },
  ]
  return (
    <section className='bg-white max-w-screen-lg m-auto rounded-2xl p-10 shadow-lg'>
    <h1 className=' text-3xl text-emerald-600 capitalize tracking-wide font-medium m-auto'>Who are we?</h1>
    <div className=' flex flex-col md:flex-row justify-around'>
    {details.map((item,index)=>(
        <div key={index} className=' flex-1 flex flex-col justify-start items-start p-5 border-emerald-100 border-b-2 md:border-b-0 md:border-r-2' >
        <h3 className='text-xl my-5 font-medium uppercase tracking-wider text-emerald-400'>{item.name}</h3>
        <p className='text-justify'>{item.desc}</p>
        </div>
      ))
    }
    </div>
    </section>
  )
}

export default AppWrap(About,'About','About Us')