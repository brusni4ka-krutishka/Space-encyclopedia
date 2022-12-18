import React, { useState } from 'react';
import ss from './searchbar.module.css';
import { littlePlanetSet } from '../../../data/LittlePlanetsset.js';
import { planetSet } from '../../../data/Planetset.js';
import { satelliteSet } from '../../../data/Satellitesset.js';
import { starSet } from '../../../data/Starset.js';
import ModalSpaceObjects from '../../modalSpaceObjects/ModalSpaceObjects.jsx';
import { Link } from 'react-router-dom';
export default function Searchbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const spaceObjects = [
    ...littlePlanetSet,
    ...planetSet,
    ...satelliteSet,
    ...starSet,
  ];
  const [input, setInput] = useState('');
  const [objectName, setObjectName] = useState('');
  const [img, setImg] = useState('');
  const [fact, setFact] = useState('');
  const [objectDescription, setObjectDescription] = useState('');
  const [characteristicsList, setCharacteristicsList] = useState('');
  const [intrestingFactsList, setIntrestingFactsList] = useState('');

  return (
    <div className={ss.container}>
      <input
        className={ss.searchbar}
        type='text'
        placeholder='Поиск небесного тела'
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      {input.length > 0 && (
        <div className={ss.results_container_rel}>
          <div className={ss.results_container_abs}>
            {spaceObjects
              .filter((item) =>
                item.undertext.toLowerCase().includes(input.toLowerCase())
              )
              ?.map((item) => {
                return (
                  <Link>
                    <h4
                      key={item.img}
                      className={ss.result}
                      onClick={() => {
                        setObjectName(item.undertext);
                        setImg(item.img);
                        setFact(item.fact);
                        setObjectDescription(item.description);
                        setCharacteristicsList(item.characteristicsList);
                        setIntrestingFactsList(item.intrestingFactsList);
                        setIsModalOpen(true);
                      }}
                    >
                      {item.undertext}
                    </h4>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
      <div style={{ position: 'absolute' }}>
        {isModalOpen && (
          <ModalSpaceObjects
            objectName={objectName}
            fact={fact}
            img={img}
            characteristicsList={characteristicsList}
            description={objectDescription}
            intrestingFactsList={intrestingFactsList}
            closeCallback={setIsModalOpen}
          />
        )}
      </div>
    </div>
  );
}
