import React from 'react'
import StoreHero from './StoreHero'
import HeroCarousal from './HeroCarousal'

const page = () => {
  return (
    <div className='bg-[#F5F5F7] min-h-screen'>
        <div className=' container mx-auto'>
        <StoreHero/>
        <HeroCarousal/>
       
        </div>
       
    </div>
  )
}

export default page