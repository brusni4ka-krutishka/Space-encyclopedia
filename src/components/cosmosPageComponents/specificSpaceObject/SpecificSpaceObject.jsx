import React from 'react';
import ModalSpaceObjects from '../../modalSpaceObjects/modalSpaceObjects.jsx';
import ss from './specificSpaceObject.module.css';
export default function SpecificSpaceObject({
  img,
  undertext,
  alt = 'Space Object',
  fact,
  description,
  characteristicsList = [],
  intrestingFactsList = [],
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
        <img className={ss.img} src={img} alt={alt} />
        <h2 className={ss.undertext}>{undertext}</h2>
      </div>
      {isModalOpen && (
        <ModalSpaceObjects
          objectName={undertext}
          fact={fact}
          img={img}
          characteristicsList={characteristicsList}
          description={description}
          intrestingFactsList={intrestingFactsList}
          closeCallback={setIsModalOpen}
        />
      )}
    </>
  );
}
