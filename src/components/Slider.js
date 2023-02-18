import React from "react";

import Slider from 'react-slick';
import Logo from './sma2.jpeg';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

export default function Slide() {
    return (
      <>
        <div className="w-full text-center  lg:w-full">
          <h3 className="text-5xl mb-2 px-12 font-bold leading-normal text-lightBlue-700">
            MITRA KAMI
          </h3>
          <div className="text-center mt-1"></div>
        </div>
        <div className="mt-4 py-10  border-t border-blueGray-200 text-center ">
          <Slider {...settings}>
            
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2 px-16 font-bold leading-normal text-lightBlue-700">
                SMA A
                </h3>
                <img src={Logo} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
            
           
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2 px-16 font-bold leading-normal text-orange-500">
                SMA B
                </h3>
                <img src={Logo} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            
           
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2 px-16 font-bold leading-normal text-emerald-500">
                SMA C
                </h3>
                <img src={Logo} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2 px-16 font-bold leading-normal text-indigo-500">
                SMA D
                </h3>
                <img src={Logo} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
           
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2 px-16 font-bold leading-normal text-black">
                SMA E
                </h3>
                <img src={Logo} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            


            {/* <div className="text-center mt-0">
              <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                SMA A
                <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>

              </div>
            </div>
            <div className="text-center mt-0">
              <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                SMA B
                <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>

              </div>
            </div>
            <div className="text-center mt-0">
              <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                SMA C
                <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>

              </div>
            </div>
            <div className="text-center mt-0">
              <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                SMA D
                <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>

              </div>
            </div>
            <div className="text-center mt-0">
              <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                SMA E
                <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>

              </div>
            </div> */}


          </Slider>
          </div>
      </>
    )
  }