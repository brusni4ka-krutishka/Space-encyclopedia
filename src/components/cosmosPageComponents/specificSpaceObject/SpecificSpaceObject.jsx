import React from 'react';
import ModalSpaceObjects from '../../modalSpaceObjects/modalSpaceObjects.jsx';
import ss from './specificSpaceObject.module.css';
export default function SpecificSpaceObject({
  img,
  undertext,
  alt = 'Space Object',
}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
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
      <img className={ss.img} src={img} alt={alt} />
      <h2 className={ss.undertext}>{undertext}</h2>
      {isModalOpen && (
        <ModalSpaceObjects
          objectName={undertext}
          fact={'Залупа'}
          img={img}
          characteristicsList={[]}
          description={'Залупа'}
          intrestingFactsList={[]}
          closeCallback={setIsModalOpen}
        />
      )}
    </div>
  );
}
