'use client'
import React from "react";

const Accessories = () => {
  return (
    <div className="container mx-auto md:my-24 h-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div class="relative">
          <img
            src="assets/ipad.svg"
            class="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div class="relative min-h-[540px]">
            <div class="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center ">
              <p className="text-3xl font-semibold">IPad</p>
                <p className="text-xl pt-2 text-center">
                Lovable. Drawable. Magical.
                </p>
                <div className="flex gap-10 mt-2">
                        <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Learn More</p>
                        <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Buy</p>
                    </div>
              </div>
            </div>
          </div>
        </div>
       
        <div class="bg-black relative text-white ">
          <img
            src="assets/macbook.svg"
            class="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div class="relative min-h-[540px]">
            <div class="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center text-white">
                <p className="text-3xl font-semibold">MacBook Pro</p>
                <p className="text-xl pt-2">
                Supercharged by M2 Pro and M2 Max.
                </p>

                <div className="flex gap-10 mt-5">
                    <p className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Learn More
                    </p>
                    <p className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Buy
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
    
        <div class="bg-black relative text-white ">
          <img
            src="assets/home.svg"
            class="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div class="relative min-h-[540px]">
            <div class="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center text-white">
                <p className="text-3xl font-semibold">HomePod</p>
                <p className="text-xl pt-2">
                Profound sound.
                </p>

                <div className="flex gap-10 mt-5">
                    <p className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Learn More
                    </p>
                    <p className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Buy
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
       
        <div class="relative">
          <img
            src="assets/airpodspro.svg"
            class="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div class="relative min-h-[540px]">
            <div class="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center text-white">
                <p className="text-3xl font-semibold">AirPods Pro</p>
                <p className="text-xl pt-2">
                  Up to 2x more Active <br /> Noise Cancellation.
                </p>

                <div className="flex gap-10 mt-5">
                  <p className="text-lg ">Learn More</p>
                  <p className="text-lg ">Buy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <img
            src="assets/iphone.svg"
            class="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div class="relative min-h-[540px]">
            <div class="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center ">
              <img src="assets/fitness.svg" alt="" />
            
                <p className="text-xl pt-2 text-center">
                Welcome to the year of you. <br /> Now all you need is iPhone.
                </p>

                <div className="flex gap-10 mt-2">
                        <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Learn More</p>
                        <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Buy</p>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <img
            src="assets/icard.svg"
            class="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div class="relative min-h-[540px]">
            <div class="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center ">
             <img src="assets/icardapple.svg" alt="" />
                <p className="text-xl pt-2 text-center">
                Get up to 3% Daily Cash <br /> back with every purchase.
                </p>
                <div className="flex gap-10 mt-2">
                        <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Learn More</p>
                        <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Buy</p>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
