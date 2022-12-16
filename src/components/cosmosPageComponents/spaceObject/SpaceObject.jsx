import React from 'react';
import ss from './spaceObject.module.css';
export default function SpaceObject({
  ObjectImg,
  ObjectName,
  isReversed = false,
  alt = 'space object',
}) {
  return (
    <div
      className={ss.q}
      style={{ flexDirection: isReversed ? 'row-reverse' : 'row' }}
    >
      <div className={ss.img_container}>
        <img src={ObjectImg} alt={alt} />
        <h2>{ObjectName}</h2>
      </div>
      <div className={ss.space}></div>
    </div>
  );
}
