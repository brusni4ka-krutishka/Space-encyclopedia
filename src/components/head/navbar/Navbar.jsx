import React from 'react';
import { Link } from 'react-router-dom';
import ss from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={ss.navbar__list}>
      <Link to={'/'}>Главная</Link>
      <div className={ss.dropdown}>
        <Link className={ss.dropbtn} to={'/cosmos'}>
          Космос
        </Link>
        <div className={ss.dropdown_content}>
          <Link to={'/cosmos/stars'}>Звезды</Link>
          <Link to={'/cosmos/littlePlanets'}>Карликовые планеты</Link>
          <Link to={'/cosmos/planets'}>Планеты</Link>
          <Link to={'/cosmos/satellites'}>Спутники</Link>
        </div>
      </div>
      <Link to={'/gallery'}>Галерея</Link>
    </div>
  );
}
