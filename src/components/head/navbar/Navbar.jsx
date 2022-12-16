import React from 'react';
import { Link } from 'react-router-dom';
import ss from './navbar.module.css';

export default function Navbar() {
  return (
    <ul className={ss.navbar__list}>
      <li>
        <Link to={'/'}>Главная</Link>
      </li>
      <li>
        <Link to={'/cosmos'}>Космос</Link>
      </li>
      <li>
        <Link to={'/gallery'}>Галерея</Link>
      </li>
      <li>
        <Link to={'/about'}>О нас</Link>
      </li>
    </ul>
  );
}
