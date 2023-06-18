import React from 'react'

const Hero2 = () => {
    return (
        <div className='bg-[#FAFAFA]  md:h-[82vh] my-10'>
            <div
                className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
                <div className="flex flex-col items-center max-w-2xl md:px-8">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div className=" flex flex-col justify-center items-center">
                            <p className='text-5xl font-semibold'>IPhone 15 Pro</p>
                            <p className='text-2xl pt-2'>Two great sizes.Now <br /> with a splash of yellow.</p>

                            <div className="flex gap-10 mt-5">
                                <p className='text-lg text-blue-500'>Learn More</p>
                                <p className='text-lg text-blue-500'>Buy</p>
                            </div>
                        </div>
                    </div>


                </div>
                <img src="assets/subhero.svg"
                     className="w-full" alt="subhero"/>
            </div>
        </div>
    )
}

export default Hero2