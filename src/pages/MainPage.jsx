import React from 'react';
import TextAndImage from '../components/mainPageComponents/TextAndImage/TextAndImage.jsx';
import starsBG from '../assets/images/mainPage/starsbg.png';
import planetsImage from '../assets/images/mainPage/planets.png';
import milkyWay from '../assets/images/mainPage/milkyway.png';

export default function MainPage() {
  return (
    <>
      <TextAndImage
        textBackgroundImage={starsBG}
        head={'Cолнечная система'}
        body={`Планетная система, включающая в себя цетральную звезду - Солнце, и все
      естественные космические объекты, вращающиеся вокруг Солнца.`}
        pathToImage={planetsImage}
        pathToPage={''}
      />
      <TextAndImage
        textBackgroundImage={starsBG}
        head={'Галерея'}
        body={`Если вы хотите увидеть завораживающие снимки, то вам определенно сюда :)`}
        pathToImage={milkyWay}
        pathToPage={''}
        isReversed={true}
      />
    </>
  );
}
