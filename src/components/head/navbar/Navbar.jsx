import React from 'react';
import ss from './navbar.module.css';

export default function Navbar() {
  return (
    <ul className={ss.navbar__list}>
      <li>Главная</li>
      <li>Космос</li>
      <li>Галерея</li>
      <li>О нас</li>
    </ul>
  );
}
