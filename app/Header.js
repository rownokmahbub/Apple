'use client'
import Link from 'next/link'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

const Header = () => {
  return (
    <header className=' sticky top-0 left-0 w-full backdrop-blur-sm bg-gradient-to-r from-slate-50/90 to-gray-50/90 z-50'>
        <div className="container mx-auto  flex justify-center items-center flex-wrap">
            <div className="px-10" >
                <Link href='/'>
                  <img src="./assets/icon.svg" alt="icons" />
                </Link>
            </div>
            <div className="flex justify-between items-center gap-7 text-sm  flex-wrap">
                <Link href='/about'>Store
                </Link>
                <Link href='/about'>Mac
                </Link>
                <Link href='/about'>Ipad
                </Link>
                <Link href='/about'>Iphone
                </Link>
                <Link href='/about'>Watch
                </Link>
                <Link href='/about'>AirPods
                </Link>
                <Link href='/about'>Tv & Home
                </Link>
                <Link href='/about'>Entertainment
                </Link>
                <Link href='/about'>Accessories
                </Link>
                <Link href='/about'>Support
                </Link>
                <Link href='/about'>
                  <BiSearch className='text-lg'/>
                </Link>
                <Link href='/about'>
                  <HiOutlineShoppingBag  className='text-lg'/>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header