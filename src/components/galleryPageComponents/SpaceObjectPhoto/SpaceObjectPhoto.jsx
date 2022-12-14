import React from 'react';
import ModalGallery from '../../modalGallery/ModalGallery.jsx';
import ss from './SpaceObjectPhoto.module.css';
export default function SpaceObjectPhoto({
  img,
  undertext,
  alt = 'Space Object',
}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <>
      <div
        className={ss.object_container}
        onClick={(e) => {
          if (
            e.target.className === ss.object_container ||
            e.target.className === ss.img ||
            e.target.className === ss.undertext
          ) {
            setIsModalOpen(true);
          }
        }}
      >
        <div className={ss.inner_container}>
          <img className={ss.img} src={img} alt={alt} />
          <h2 className={ss.undertext}>{undertext}</h2>
        </div>
      </div>
      {isModalOpen && (
        <ModalGallery
          objectName={undertext}
          img={img}
          closeCallback={setIsModalOpen}
        />
      )}
    </>
  );
}
