/*eslint-disable*/
import React from "react";
import Teams1 from "@notus-pro/react/Teams1";
import Logo from './Black & Orange Minimal Startup H Letter Business Logo (1).png';
import './font.css';

export default function Homess() {
  return (
    <>
      <section className="mt-1 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="container mx-auto px-4 pb-32 pt-12">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                  <div className="md:pr-12">
                    <h3 className="text-5xl font-bold text-lightBlue-600 quiksand">
                      HIZRATECH?
                    </h3>
                    <p className="mt-4 text-3xl leading-relaxed text-blueGray-500 nunito">
                      Hizratech adalah
                      perusahaan yang
                      bergerak dalam
                      development system
                      yang akan
                      mewujudkan sistem
                      digital anda.
                      Hizratech juga
                      menyediakan
                      berbagai jasa layanan
                      publik yang siap
                      membantu klien yang
                      berkaitan dengan
                      teknologi.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-xl"
                    style={{
                      transform:
                        "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                    }}
                    src={Logo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      

      


     
    </>
  );
}
