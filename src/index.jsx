import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import './style.css';
import { Intro } from './pages/intro';
import { Sounds } from './pages/sounds';
import { english as lang } from './lang/en';
import { Navbar } from './pages/navbar';

const App = () => {
  return (
    <div className="container">
      <header>
        <menu className="menu__header">
          <div className="menu menu__logo">
            <img className="logo" src="img/logo.svg" alt="logo" />
          </div>
          <Navbar />
          <div className="menu menu__hyperlinks">
            <div className="menu__pages">
              <Link className="a a__pages" to="intro">
                {lang.menu.intro}
              </Link>
              <Link className="a a__pages" to="AboutUs">
                {lang.menu.aboutus}
              </Link>
              <Link className="a a__pages" to="contact">
                {lang.menu.contact}
              </Link>
            </div>
            <div className="menu menu__languages">
              <a className="a a__languages">Uk</a>
              <a className="a a__languages">Sk</a>
              <a className="a a__languages">Cz</a>
              <a className="a a__languages">En</a>
            </div>
          </div>
        </menu>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer__copyright">
          <span className="footer__copyright--text">
            &copy; 2023 text about the project its support and copyright
          </span>
        </div>
      </footer>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'intro',
        element: <Intro />,
      },
      {
        path: 'sounds',
        element: <Sounds />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
