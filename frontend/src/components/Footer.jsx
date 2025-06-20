import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>We are your trusted partner for online doctor consultations and appointment bookings. Connect with verified medical professionals, access healthcare services from anywhere, and manage your medical records securely. We're committed to making healthcare simple, accessible, and reliable for everyone. Contact us anytime for support and care.</p>
            </div>

            {/* Middle section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            {/* Right section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-123456779</li>
                    <li>contact@mediconnect.com</li>
                </ul>
            </div>
        </div>   

        {/* Copyright section */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 @ MediConnect. All Rights Reserved.</p>
        </div>     
    </div>
  )
}

export default Footer