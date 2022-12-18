import React from 'react';
import ss from './SpaceObjectPhoto.module.css';
export default function SpaceObjectPhoto({
  img,
  undertext,
  alt = 'Space Object',
}) {
  return (
    <>
      <div
        className={ss.object_container}
        onClick={(e) => {
          // if (
          //   e.target.className === ss.object_container ||
          //   e.target.className === ss.img ||
          //   e.target.className === ss.undertext
          // ) {
          //   setIsModalOpen(true);
          // }
        }}
      >
        <img className={ss.img} src={img} alt={alt} />
        <h2 className={ss.undertext}>{undertext}</h2>
      </div>
    </>
  );
}
