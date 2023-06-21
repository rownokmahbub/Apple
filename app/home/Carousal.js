'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class Carousal extends Component {
  render() {
    const settings = {
      
      infinite: true,
      slidesToShow: 1,
      centerMode: true,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows:false,
      swipe:true,
      dots: true,
      pauseOnHover: true
    };
    return (
      <div>
      

        <Slider {...settings}>
          <div className="w-full">
          <img className="w-full " src="assets/c1.jpeg" alt="carousal" />
          </div>
          <div>
          <img className="w-full " src="assets/c2.jpeg" alt="carousal" />
          </div>
          <div>
          <img className="w-full " src="assets/c3.jpeg" alt="carousal" />
          </div>
          <div>
          <img className="w-full " src="assets/c4.jpeg" alt="carousal" />
          </div>
          <div>
          <img className="w-full " src="assets/c5.jpeg" alt="carousal" />
          </div>
          <div>
          <img className="w-full " src="assets/c6.jpeg" alt="carousal" />
          </div>
        </Slider>
      </div>
    );
  }
}