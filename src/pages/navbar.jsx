import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { english as lang } from '../lang/en';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => setShowLinks(!showLinks);

  return (
    <div onClick={toggleMenu} className="menu__toggle">
      {showLinks ? (
        <FaTimes style={{ fontSize: '24px', color: 'var(--text-color)' }} />
      ) : (
        <FaBars style={{ fontSize: '24px', color: 'var(--text-color)' }} />
      )}
    </div>
  );
};
