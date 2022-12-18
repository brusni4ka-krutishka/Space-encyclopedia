import React, { useState } from 'react';
import ss from './searchbar.module.css';
import { littlePlanetSet } from '../../../data/LittlePlanetsset.js';
import { planetSet } from '../../../data/Planetset.js';
import { satelliteSet } from '../../../data/Satellitesset.js';
import { starSet } from '../../../data/Starset.js';
export default function Searchbar() {
  const arr = [...littlePlanetSet, ...planetSet, ...satelliteSet, ...starSet];
  const [input, setInput] = useState('');
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
            {arr
              .filter((item) =>
                item.undertext.toLowerCase().includes(input.toLowerCase())
              )
              ?.map((item) => {
                return (
                  <h4 key={item.img} className={ss.result}>
                    {item.undertext}
                  </h4>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
