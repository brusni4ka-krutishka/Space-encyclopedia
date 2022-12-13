import React from 'react';
import ss from './searchbar.module.css';
export default function Searchbar() {
  return (
    <input
      className={ss.searchbar}
      type='text'
      placeholder='Поиск небесного тела'
    />
  );
}
