import React from 'react';
import welcomeImage from '../../../assets/images/mainPage/welcome.png';
import ss from './welcomeImage.module.css';
export default function WelcomeImage() {
  return <img src={welcomeImage} alt='hello image' className={ss.image} />;
}
