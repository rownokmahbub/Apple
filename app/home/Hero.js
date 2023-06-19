import React from "react";

const Hero = () => {
  return (
    <div className="bg-black h-auto  text-white">
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div className=" flex flex-col justify-center items-center">
              <p className="text-5xl font-semibold">IPhone 15 Pro</p>
              <p className="text-xl pt-2">Pro. Beyond.</p>

              <div className="flex gap-10 mt-5">
                <p className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">Learn More</p>
                <p className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">Buy</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/hero.svg"
          className="w-full max-w-screen-sm mx-auto  md:w-auto lg:max-w-screen-xl"
          alt=""
        />
      </div>{" "}
    
    </div>
  );
};

export default Hero;
