import React from "react";
import './font.css';
import Slider from 'react-slick';
import Logo from './assets/img/logo/sman1rengatbarat.jpeg';
import Logo2 from './assets/img/logo/sman2rengatbarat.jpeg';
import Logo3 from './assets/img/logo/sman1batanggansalinhu.jpeg';
import Logo4 from './assets/img/logo/sman1kelayanginhu.jpeg';
import Logo5 from './assets/img/logo/smantebingtinggi.jpeg';
import Logo6 from './assets/img/logo/sman3tapung.jpeg';
import Logo7 from './assets/img/logo/sman1tambang.jpeg';
import Logo8 from './assets/img/logo/tut.png';
import Logo9 from './assets/img/logo/sman3tualng.jpeg';
import Logo10 from './assets/img/logo/sman1sungaimandau.jpeg';
import Logo11 from './assets/img/logo/tut.png';
import Logo12 from './assets/img/logo/sman2tapunghilir.jpeg';
import Logo13 from './assets/img/logo/smkn1kotogasir.jpeg';
import Logo14 from './assets/img/logo/tut.png';
import Logo15 from './assets/img/logo/tut.png';
import Logo16 from './assets/img/logo/sman1siak.jpeg';
import Logo17 from './assets/img/logo/tut.png';
import Logo18 from './assets/img/logo/sman2bungaraya.jpeg';
import Logo19 from './assets/img/logo/tut.png';
import Logo20 from './assets/img/logo/sman2tualang.jpeg';
import Logo21 from './assets/img/logo/sman1peranapinhu.jpeg';
import Logo22 from './assets/img/logo/tut.png';
import Logo23 from './assets/img/logo/tut.png';
import Logo24 from './assets/img/logo/tut.png';
import Logo25 from './assets/img/logo/sman2tambang.jpeg';
import Logo26 from './assets/img/logo/sman1seberida.jpeg';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  };

export default function Slide() {
    return (
      <>
        <div className="w-full text-center  lg:w-full">
          <h3 className="text-5xl mb-2 px-12 font-bold leading-normal text-lightBlue-700 quiksand">
            MITRA KAMI
          </h3>
          <div className="text-center mt-1"></div>
        </div>
        <div className="mt-4 py-10 px-16 border-t border-blueGray-200 ">
          <Slider {...settings}>
            
              <div className="w-6/12 sm:w-4/12 px-4 mb-12">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 RENGAT BARAT
                </h3>
                <img src={Logo} alt="..." className=" max-w-full h-auto align-middle border-none " />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 2 RENGAT BARAT
                </h3>
                <img src={Logo2} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 BATANG GASAL
                </h3>
                <img src={Logo3} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 KELAYANG
                </h3>
                <img src={Logo4} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 TEBING TINGGI
                </h3>
                <img src={Logo5} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 3 TAPUNG
                </h3>
                <img src={Logo6} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 TAMBANG
                </h3>
                <img src={Logo7} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 2 GUNUNG SAHILAN
                </h3>
                <img src={Logo8} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 3 TUALANG
                </h3>
                <img src={Logo9} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 SUNGAI MANDAU
                </h3>
                <img src={Logo10} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 5 TAPUNG
                </h3>
                <img src={Logo11} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 2 TAPUNG HILIR
                </h3>
                <img src={Logo12} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 KOTO GASIP
                </h3>
                <img src={Logo13} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 KANDIS
                </h3>
                <img src={Logo14} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 4 KANDIS
                </h3>
                <img src={Logo15} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 SIAK
                </h3>
                <img src={Logo16} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 2 SIAK
                </h3>
                <img src={Logo17} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 2 BUNGA RAYA
                </h3>
                <img src={Logo18} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 2 KERINCI KANAN
                </h3>
                <img src={Logo19} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 2 TUALANG
                </h3>
                <img src={Logo20} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 PERANAP
                </h3>
                <img src={Logo21} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 LUBUK DALAM
                </h3>
                <img src={Logo22} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 MINAS
                </h3>
                <img src={Logo23} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 5 TUALANG
                </h3>
                <img src={Logo24} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 2 TAMBANG
                </h3>
                <img src={Logo25} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>
              <div className="w-6/12 sm:w-4/12 px-4 ">
              <h3 className="text-xl text-left mb-2  font-bold leading-normal text-lightBlue-700">
                SMAN 1 SEBERIDA
                </h3>
                <img src={Logo26} alt="..." className=" max-w-full h-auto align-middle border-none" />
              </div>

          </Slider>
          </div>
      </>
    )
  }