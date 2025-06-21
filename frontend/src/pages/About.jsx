import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 ml-10'>
        <img className = 'w-full md:max-w-[300px] rounded-2xl' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to MediConnect, where we make healthcare more accessible by connecting patients with trusted doctors for easy, fast appointment scheduling. Our platform is designed to simplify your healthcare journey and put you in control of your wellness.</p>
          <p>Built by a team of healthcare and technology experts, we offer a secure and user-friendly experience for both patients and providers. Browse doctor profiles, read reviews, and book appointments with just a few clicks.</p>
          <p>We are committed to trust, transparency, and personalized care. Whether you need a routine check-up or a specialist consultation, MediConnect is here to support your health every step of the way.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-12 ml-10'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-12 ml-10 mr-10 pt-8'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-black transition-all duration-200 cursor-pointer'>
          <b>Efficiency</b>
          <p className='text-gray-700'>Experience healthcare tailored just for you. Our platform adapts to your needs, offering personalized doctor recommendations and appointment options.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-black transition-all duration-200 cursor-pointer'>
          <b>Convenience</b>
          <p>Get customized care and suggestions based on your preferences and health history, making every visit more relevant and convenient.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-black transition-all duration-200 cursor-pointer'>
          <b>Personalization</b>
          <p>We personalize your journey, ensuring you find the right doctors, services, and reminders that fit your unique lifestyle.</p>
        </div>
      </div>
    </div>
  )
}

export default About