import React, { useEffect, useState } from 'react';
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
          scrollY >= 100 && currentScrollY < scrollY
            ? 'translateY(-100%)'
            : 'translateY(0)',
      });

      setCurrentScrollY(scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div style={containerStyle} className={ss.container}>
      <div className={ss.logo}>SE</div>
      <div className={ss.navbar}>
        <Navbar />
      </div>
      <div className={ss.search}>
        <Searchbar />
      </div>
    </div>
  );
}
