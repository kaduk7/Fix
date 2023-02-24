import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Comp  from './Comp 1.json';
import Lottie from 'lottie-react';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='ttttt'>
      <Lottie animationData={Comp} />
      </div>    
    </div>

  );
}

export default HeroSection;
