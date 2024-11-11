// components/LogoAnimation.js
import React from 'react';
import Lottie from 'lottie-react';
import logoAnimation from '../assets/logoAnimation.json'; // Lottie animation file

const LogoAnimation = () => (
  <Lottie animationData={logoAnimation} loop={true} style={{ width: 100, height: 100 }} />
);

export default LogoAnimation;
