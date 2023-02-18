import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Cards2 from '../Cards2';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Hizra from '../Hizratech';
import Skew from '../Skew';
import Whatoffer from '../Whatoffer';
import Why from '../Why';
import Why2 from '../Why2';
import Slider from '../Slider';
import Footer2 from '../Footer2';
import Homess from '../Homess';


function Home() {
  return (
    <>
      <HeroSection />
      {/* <Skew /> */}
      <Homess />
      {/* <Hizra /> */}
      <Whatoffer />
      {/* <Why /> */}
       {/* <Skew /> */}
      <Why />
      <Slider />
      <Skew />

      <Footer2 />
    </>
  );
}

export default Home;
