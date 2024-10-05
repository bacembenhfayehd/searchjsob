import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-start justify-center'>
      <div >
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          We always help our seekers and companies find the
           best jobs, and employers find the best candidates.
        </p>
      </div>

      <div className='grid ml-12'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>Company</span>
        <ul className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </ul>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>Resources</span>
        <ul className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact</li>
        </ul>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>Support</span>
        <ul className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
        </ul>
      </div>

      <div className='grid ml-4'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>Contact Info</span>
        <small className='text-white text-[14px]'>
          hfaidhbacem2017@gmail.com
        </small>
        <div className='icons flex gap-4 py-[1rem]'>
          <FaInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
          <FaFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
          <FaLinkedin className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
