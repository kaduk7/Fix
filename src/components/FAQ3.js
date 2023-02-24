import React from "react";

import Logo from './2.png';
import Footer2 from "./Footer2.js";
import Akor from'./According';
import Footer from './Footer2';
export default function FAQ3() {
  return (
    <>

      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://temp.hizratech.com/static/media/faq1.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={Logo}
                        className="shadow-xl rounded-lg h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-bold leading-normal mb-2 text-lightBlue-700 mb-2">
                    Tanya Jawab Hizratech
                  </h3>
                 
                </div>
                <div className="container px-4 mx-auto">
                  <div className="text-left mt-12 text-2xl">
                    <Akor/>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  
    </>
  );
}
