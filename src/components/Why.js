/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import './font.css';
import Teams1 from "@notus-pro/react/Teams1";
import Logo from './23.png';
import Logo2 from './3.png';
import Logo3 from './4.png';


//import 'Sl.css';



export default function Homess() {
  return (
    <>
     
     <section className="py-1 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-32">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>

          </div>
        </div>
      </section>
     <section className="pb-16 bg-blueGray-200 relative pt-32">
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
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="text-5xl mb-2 font-bold leading-normal text-lightBlue-600 quiksand">
                Why HKS ?
              </h3>
              <div className="text-center mt-16"></div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">

                <Link to="/sys-dev">
                 
                    <img
                      alt="..."
                      className="align-middle px-12 border-none max-w-full h-auto rounded-lg"
                      src={Logo}
                    />
                  
                </Link>
                <h5 className="text-2xl font-bold pb-4 text-center text-lightBlue-600 nunito">
                  Kualitas Terbaik
                </h5>
                <h5 className="text-sl font-bold pb-4 text-center text-black nunit">
                  Team akan melakukan yang terbaik untuk klien serta mengutamakan kualitas yang tidak merngecewakan klien.
                </h5>
              </div>

              <div className="w-full lg:w-4/12 px-4">

                <Link to="">
                                <img
                      alt="..."
                      className="align-middle px-12 border-none max-w-full h-auto rounded-lg"
                      src={Logo2}
                    />
                  
                </Link>
                <h5 className="text-2xl font-bold pb-4 text-center text-lightBlue-600 nunito">
                  Klien Terpercaya
                </h5>
                <h5 className="text-sl font-bold pb-4 text-center text-black nunit">
                  klien sepenuhnya bisa mempercayain hizratech sebagai mitranya,serta hizratech siap untuk menyelesaikan kendala yang dihadapi oleh klien.
                </h5>
              </div>

              <div className="w-full lg:w-4/12 px-4">

                <Link to="">
                    <img
                      alt="..."
                      className="align-middle px-12 border-none max-w-full h-auto rounded-lg"
                      src={Logo3}
                    />
                  
                </Link>
                <h5 className="text-2xl font-bold pb-4 text-center text-lightBlue-600 nunito">
                  Layanan Bervariasi
                </h5>
                <h5 className="text-sl font-bold pb-4 text-center text-black nunit">
                  Hizratech menyediakan berbagai jasa layanan sesuai dengan kebutuhan klien.

                </h5>
              </div>
            </div>
          </div>

        </div>
       
      </section>

      

      


     
    </>
  );
}
