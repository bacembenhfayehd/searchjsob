import React from 'react'

import simple from '../../AssetsJ/simple.png'
import amazon from '../../AssetsJ/amazon.png'
import paypal from '../../AssetsJ/paypal.png'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[30px] py-[2rem] pb-[3rem] font-bold w-[400px]
       block'>The Value that holds us true and to account</h1>

       <div className='grid gap-[10rem] grid-cols-3 items-center'>

        
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex item-center gap-3'>
          <div className='inline-flex items-center'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center
             justify-center'>
              <img src={simple} alt=""  className='w-[70%]'/>

            </div>


           <span className='font-semibold text-textColor text-[18px] ml-[4px] ' >
             Simplicity
            </span>
            </div>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
            Things made beautiful simple are the heart of everything we do

          </p>
          

        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex item-center gap-3'>
          <div className='inline-flex items-center'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center
             justify-center'>
              <img src={amazon} alt=""  className='w-[70%]'/>

            </div>


           <span className='font-semibold text-textColor text-[18px] ml-[4px] ' >
             Simplicity
            </span>
            </div>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
            Things made beautiful simple are the heart of everything we do

          </p>
          

        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex item-center gap-3'>
          <div className='inline-flex items-center'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center
             justify-center'>
              <img src={paypal} alt=""  className='w-[70%]'/>

            </div>


           <span className='font-semibold text-textColor text-[18px] ml-[4px] ' >
             Simplicity
            </span>
            </div>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
            Things made beautiful simple are the heart of everything we do

          </p>
          

        </div>

       </div>


       <div className="card mt-[2rem] flex justify-between  bg-blueColor p-[5rem] rounded [10px]">
       <div>
        <h1 className='text-blueColor text-[30px] font-bold '>Ready to switch a carrer ?</h1>
        <h2 className='text-textColor text-[25px] font-bold'>Let's get started !</h2>
        
       </div>
       
       <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold 
       text-blueColor hover:bg-white border-blueColor'>Get started</button>

       </div>


      </div>

  )
}

export default Value