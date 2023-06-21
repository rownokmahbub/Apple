'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class HeroCarousal extends Component {
  render() {
    const settings = {
      
      infinite: true,
      slidesToShow: 5,
      centerMode: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      centerPadding: "100px",
      swipe:true,
      
    };
    return (
      <div className="bg-[#F5F5F7] py-10 container ml-auto">
      

        <Slider {...settings}>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="assets/store/macbook.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Mac</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="assets/store/iphone.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Iphone</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="assets/store/ipad.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Ipad</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="assets/store/iwatch.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Apple Watch</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="assets/store/airpods.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Airpods</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="assets/store/airtag.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Airtags</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="assets/store/appletv.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Apple TV 4K</p>
          </div> <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="assets/store/homepod.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">HomePod</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="assets/store/accessories.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Accessories</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="assets/store/giftcard.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Apple GiftCard</p>
          </div>
        </Slider>
      </div>
    );
  }
}