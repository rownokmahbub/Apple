import React from 'react'

const Hero2 = () => {
    return (
        <div className='bg-[#FAFAFA] h-screen pt-20'>
            <div
                className="flex flex-col items-center justify-center ">
          
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div className=" flex flex-col justify-center items-center">
                            <p className='text-5xl font-semibold'>IPhone 15 Pro</p>
                            <p className='text-2xl pt-2'>Two great sizes.Now <br /> with a splash of yellow.</p>

                            <div className="flex gap-10 mt-5">
                                <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Learn More</p>
                                <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Buy</p>
                            </div>
                        </div>
                    </div>


               
                <img src="assets/subhero.svg"
                     className="w-full max-w-screen-sm mx-auto  md:w-auto lg:max-w-screen-2xl" alt="subhero"/>
            </div>
        </div>
    )
}

export default Hero2