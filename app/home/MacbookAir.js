import React from 'react'

const MacbookAir = () => {
  return (
    <div className='bg-[#F5F6F7] h-screen pt-20'>
    <div
        className="flex flex-col items-center justify-center ">
  
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div className=" flex flex-col justify-center items-center">
                    <p className='text-5xl font-semibold'>MacBook Air 15''</p>
                    <p className='text-2xl pt-2'>Impressively Big. Impressively Thin</p>

                    <div className="flex gap-10 mt-5">
                        <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Learn More</p>
                        <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Buy</p>
                    </div>
                </div>
            </div>


       
        <img src="assets/macbookair.jpeg"
             className="w-full h-full " alt="subhero"/>
    </div>
</div>
  )
}

export default MacbookAir