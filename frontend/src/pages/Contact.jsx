import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-10 mb-20 text:sm ml-10'>
        <img className='w-full md:max-w-[360px] rounded-2xl' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6 '>
          <p className='font-semibold text-lg'>Our OFFICE</p>
          <p className='text-gray-600'>Sector 5 <br/>Gurugram</p>
          <p className='text-gray-600'>Tel : (+91) 12345-67890 <br/> Email : contact@mediconnect.in</p>
          <p className='font-semibold text-lg'>Careers at MediConnect</p>
          <p className='text-gray-600'>Learn more about opening</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-amber-50 transition-all duration-500 cursor-pointer'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact