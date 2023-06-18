import React from "react";

const Accessories = () => {
  return (
    <div className="container mx-auto  md:my-24">
  <div className="grid grid-cols-1 md:grid-cols-2  items-center">
      <div className="bg-[#FBFBFB] ">
        <div className="flex flex-col items-center justify-center px-4 mx-auto sm:max-w-xl md:max-w-full py-10 md:px-0">
          <div className="flex flex-col items-center max-w-2xl md:px-8">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl ">
              <div className=" flex flex-col justify-center items-center">
                <p className="text-3xl font-semibold">IPhone 15 Pro</p>
                <p className="text-xl pt-2">Lovable. Drawable. Magical.</p>

                <div className="flex gap-10 mt-5">
                  <p className="text-lg text-blue-500">Learn More</p>
                  <p className="text-lg text-blue-500">Buy</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/ipad.svg"
            className="w-full md:mx-auto max-h-[300px] object-fill"
            alt=""
          />
        </div>
      </div>
      <div className="bg-black relative text-white ">
        <div className="flex flex-col items-center justify-center px-4 mx-auto sm:max-w-xl md:max-w-full py-10 md:px-0">
          <div className="flex flex-col items-center max-w-2xl md:px-8">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl ">
              <div className=" flex flex-col justify-center items-center">
                <p className="text-3xl font-semibold">IPhone 15 Pro</p>
                <p className="text-xl pt-2">Pro. Beyond.</p>

                <div className="flex gap-10 mt-5">
                  <p className="text-lg text-blue-500">Learn More</p>
                  <p className="text-lg text-blue-500">Buy</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/macbook.svg"
            className="w-full md:mx-auto max-h-[300px] object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="bg-black relative text-white ">
        <div className="flex flex-col items-center justify-center px-4 mx-auto sm:max-w-xl md:max-w-full py-10 md:px-0">
          <div className="flex flex-col items-center max-w-2xl md:px-8">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl ">
              <div className=" flex flex-col justify-center items-center">
                <p className="text-3xl font-semibold">IPhone 15 Pro</p>
                <p className="text-xl pt-2">Pro. Beyond.</p>

                <div className="flex gap-10 mt-5">
                  <p className="text-lg text-blue-500">Learn More</p>
                  <p className="text-lg text-blue-500">Buy</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/macbook.svg"
            className="w-full md:mx-auto max-h-[300px] object-cover"
            alt=""
          />
        </div>
      </div>
      <div class="relative">
  <img src="assets/airpodspro.svg" class="absolute inset-0 object-cover w-full h-full" alt="" />
  <div class="relative min-h-[540px]">
   
      <div class="flex flex-col items-center justify-between pt-10">
      <div className=" flex flex-col justify-center items-center text-white">
              <p className="text-3xl font-semibold">IPhone 15 Pro</p>
              <p className="text-xl pt-2">Pro. Beyond.</p>

              <div className="flex gap-10 mt-5">
                <p className="text-lg ">Learn More</p>
                <p className="text-lg ">Buy</p>
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
