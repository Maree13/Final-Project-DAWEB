import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { english as lang } from '../lang/en';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => setShowLinks(!showLinks);

  // const renderMenuLinks = () => {
  //   if (showLinks) {
  //     return (
  //       <div className="menu menu__hyperlinks">
  //         <div className="menu__pages menu__pages--mobile">
  //           <Link className="a a__pages" to="/intro">
  //             {lang.menu.intro}
  //           </Link>
  //           <Link className="a a__pages" to="/AboutUs">
  //             {lang.menu.aboutus}
  //           </Link>
  //           <Link className="a a__pages" to="/contact">
  //             {lang.menu.contact}
  //           </Link>
  //         </div>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <>
      <div onClick={toggleMenu} className="menu__toggle">
        {showLinks ? (
          <FaTimes style={{ fontSize: '24px', color: 'var(--text-color)' }} />
        ) : (
          <FaBars style={{ fontSize: '24px', color: 'var(--text-color)' }} />
        )}
      </div>
      <div
        className={`menu menu__hyperlinks ${
          showLinks ? 'menu__pages--mobile' : 'menu__pages'
        }`}
      >
        <Link className="a a__pages" to="/intro">
          {lang.menu.intro}
        </Link>
        <Link className="a a__pages" to="/AboutUs">
          {lang.menu.aboutus}
        </Link>
        <Link className="a a__pages" to="/contact">
          {lang.menu.contact}
        </Link>
      </div>
    </>
  );
};
