import React from 'react'

const StoreHero = () => {
  return (
    <div className='bg-[#F5F5F7] py-10'>
        <div className="flex justify-between items-center ">
            <div className='text-5xl font-semibold text-gray-400'> <span className='text-black'>Store</span> The best way to buy the <br /> products you love.</div>
            <div className="space-y-5">
                <div className='flex gap-2'>
                  <img className='w-10 h-10 rounded-full' src="assets/store/person1.jpeg" alt="person" />
                  <div>
                    <p className='text-sm font-medium'>Need shopping help?</p>
                    <p className='text-sm text-blue-500 cursor-pointer'>Ask a Specialist</p>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <img className='w-10 h-10 rounded-full border border-dashed border-black' src="assets/icon.svg" alt="person" />
                  <div>
                    <p className='text-sm font-medium'>Visit an apple store</p>
                    <p className='text-sm text-blue-500 cursor-pointer'>Find one near you</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoreHero