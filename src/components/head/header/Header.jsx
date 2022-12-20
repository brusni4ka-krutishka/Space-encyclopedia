import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar.jsx';
import Searchbar from '../searchbar/Searchbar.jsx';
import ss from './header.module.css';

export default function Header({ height = 100 }) {
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const [containerStyle, setContainerStyle] = useState({
    height: height + 'px',
  });

  useEffect(() => {
    const handleScroll = () => {
      setContainerStyle({
        ...containerStyle,
        transform:
          scrollY >= 100 && currentScrollY < scrollY ? 'translateY(-100%)' : '',
      });

      setCurrentScrollY(scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div style={containerStyle} className={ss.container}>
      <div className={ss.logo}>
        <Link to={'/'}>SE</Link>
      </div>
      <div className={ss.navbar}>
        <Navbar />
      </div>

      <div className={ss.search}>
        {useLocation().pathname !== '/' && <Searchbar />}
      </div>
    </div>
  );
}
