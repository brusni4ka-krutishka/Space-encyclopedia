import React from 'react';
import TextAndImage from '../components/mainPageComponents/TextAndImage/TextAndImage.jsx';
import starsBG from '../assets/images/mainPage/starsbg.png';
import planetsImage from '../assets/images/mainPage/universe.jpeg';
import milkyWay from '../assets/images/mainPage/milkyway.png';
import WelcomeImage from '../components/mainPageComponents/WelcomeImage/WelcomeImage.jsx';

export default function MainPage() {
  return (
    <>
      <WelcomeImage />
      <TextAndImage
        textBackgroundImage={starsBG}
        head={'Космос'}
        body={`Это все пространство, где расположены планета Земля, солнце, луна, звезды и другие планеты. Космос называют Вселенной – и она не имеет границ. `}
        pathToImage={planetsImage}
        pathToPage={'/cosmos'}
        isReversed={true}
      />
      <TextAndImage
        textBackgroundImage={starsBG}
        head={'Галерея'}
        body={`Если вы хотите увидеть завораживающие снимки, то вам определенно сюда :)`}
        pathToImage={milkyWay}
        pathToPage={'/gallery'}
      />
    </>
  );
}
