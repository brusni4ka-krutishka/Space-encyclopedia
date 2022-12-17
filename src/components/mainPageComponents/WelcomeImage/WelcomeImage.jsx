import React from 'react';
import welcomeImage from '../../../assets/images/mainPage/welcome.png';
import ss from './welcomeImage.module.css';

export default function WelcomeImage() {
  return (
    <div className={ss.container}>
      <div className={ss.text_block}>
        <h1 className={ss.text}>
          Добро пожаловать в <b className={ss.decor}> Space Encyclopedia!</b>
        </h1>
        <h2 className={ss.text}>
          Вы откроете для себя много <b>нового</b> и <b>интересного</b>
        </h2>
      </div>
      <img src={welcomeImage} alt='hello image' className={ss.image} />
    </div>
  );
}
