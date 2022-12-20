import React from 'react';
import { Link } from 'react-router-dom';
import ss from './spaceObject.module.css';
export default function SpaceObject({
  ObjectImg,
  ObjectName,
  isReversed = false,
  linkTo,
  alt = 'space object',
}) {
  return (
    <div
      className={ss.q}
      style={{ flexDirection: isReversed ? 'row-reverse' : 'row' }}
    >
      <div className={ss.img_container}>
        <Link to={linkTo}>
          <img src={ObjectImg} alt={alt} />
          <h2>{ObjectName}</h2>
        </Link>
      </div>
      <div className={ss.space}></div>
    </div>
  );
}
