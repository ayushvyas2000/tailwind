import React from 'react'


const AppWrap = (Component,idName,heading,classNames) => function HOC() {
    return (
        <div id={idName} className={`space-y-10 w-full min-h-screen flex flex-col justify-center items-center  ${classNames}`}>
          <h1 className='tracking-widest text-3xl text-emerald-600 uppercase font-medium'>{heading}</h1>
          <Component/>
        </div>
    
    )
  }
  
  export default AppWrap