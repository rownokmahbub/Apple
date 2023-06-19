import React from 'react'

const Iwatch = () => {
    return (
        <div className="bg-black h-auto  text-white">
        <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
          <div className="flex flex-col items-center max-w-2xl md:px-8">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div className=" flex flex-col justify-center items-center">
                <div className="flex items-center">
                    <img className='w-20' src="/assets/iconwhite.svg" alt="" />
                <p className="text-5xl font-semibold">Watch</p>
                </div>
               
                <p className="text-xl pt-2 text-red-600">SERIES 8</p>
                <p className="text-xl pt-2">A healthy leap ahead.</p>

  
                <div className="flex gap-10 mt-5">
                  <p className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">Learn More</p>
                  <p className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">Buy</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/watch.svg"
            className="w-full md:mx-auto"
            alt=""
          />
        </div>
     
      </div>
    )
}

export default Iwatch