import React from 'react'

import { BiTimeFive } from "react-icons/bi";
import logo1 from '../../AssetsJ/logo1.png'
import logo2 from '../../AssetsJ/logo2.png'
import logo3 from '../../AssetsJ/logo3.png'
import logo4 from '../../AssetsJ/logo4.png'
import logo5 from '../../AssetsJ/logo5.png'
import logo6 from '../../AssetsJ/logo6.png'
import logo7 from '../../AssetsJ/logo7.png'
import logo8 from '../../AssetsJ/logo8.png'



const Data =[
  {
    id:1,
    image:logo1,
    title:'web developer',
    time:'Now',
    location:'canada',
    des: 'Lorem constructor, dolor fnraeoni ddei fjran hraokjf .Aloraa lambutguni urus',
    company: 'Electronic Arts'
  },

  {
    id:2,
    image:logo2,
    title:'UX Dsigner',
    time:'Part-time',
    location:'Sousse',
    des: 'Lorem constructor, dolor fnraeoni ddei fjran hraokjf .Aloraa lambutguni urus',
    company: 'Sehll'
  },

  {
    id:3,
    image:logo3,
    title:'Software Eng',
    time:'Now',
    location:'Madrid',
    des: 'Lorem constructor, dolor fnraeoni ddei fjran hraokjf .Aloraa lambutguni urus',
    company: 'Line'
  },
  {
    id:4,
    image:logo4,
    title:'Corporate',
    time:'Full-time',
    location:'London',
    des: 'Lorem constructor, dolor fnraeoni ddei fjran hraokjf .Aloraa lambutguni urus',
    company: 'Constructions UK'
  },
  {
    id:5,
    image:logo5,
    title:'Chef',
    time:'Contract',
    location:'Portugal',
    des: 'Lorem constructor, dolor fnraeoni ddei fjran hraokjf .Aloraa lambutguni urus',
    company: 'Plan B'
  },
  {
    id:6,
    image:logo6,
    title:'UI Dsigner',
    time:'Part-time',
    location:'Algeria',
    des: 'Lorem constructor, dolor fnraeoni ddei fjran hraokjf .Aloraa lambutguni urus',
    company: 'SBS.'
  },
  {
    id:7,
    image:logo1,
    title:'Java Dev',
    time:'Remote',
    location:'Florida',
    des: 'Lorem constructor, dolor fnraeoni ddei fjran hraokjf .Aloraa lambutguni urus',
    company: 'Google'
  },
  {
    id:8,
    image:logo8,
    title:'Software Eg',
    time:'Now',
    location:'California',
    des: 'Lorem constructor, dolor fnraeoni ddei fjran hraokjf .Aloraa lambutguni urus',
    company: 'Meta'
  },
]


const Jobs = () => {
  return (
    <div>
    <div className='jobContainer justify-center flex gap-10 flex-wrap items-center py-10'>

    {
     
     Data.map(({id,image,title,time,location,des,company})=>{
      
      return( 
             <div  key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700
      hover:shadow-lg">

        <span className='flex justify-between items-center gap-4'>
          <h1  className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
          <span className='flex items-center text-[#ccc] gap-1'>
            <BiTimeFive/>{time}
          </span>

        </span>
        <h6 className='text-[#ccc]'>{location}</h6>
        <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white '>
          {des}
        </p>
       

        <div className="company flex items-center gap-1">
          <img src={image}alt="" className='w-[20%]' />
          <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>

        </div>

        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold 
        text-textColor hover:bg-white group:hover .item:text-textColor group:hover .item:text-white
        '>Apply Now</button>

      </div>



      )
       
     })

    }




     
     </div>

      </div>

    
  )
}

export default Jobs