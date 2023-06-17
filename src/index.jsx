import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  Navigate,
} from 'react-router-dom';
import './style.css';
import { Intro } from './pages/intro';
import { Sounds } from './pages/sounds';
import { english as lang } from './lang/en';
import { Navbar } from './pages/navbar';
import { Stories } from './pages/stories';
import './storiesstyle.css';
import { Stories1 } from './pages/stories1';
import { Stories2 } from './pages/stories2';
import { Stories3 } from './pages/stories3';
import { Games } from './pages/games';
import { AboutUs } from './pages/aboutus';
import { Contact } from './pages/contact';
import './gamestyle.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <menu className="menu__header">
          <div className="menu menu__logo">
            <img className="logo" src="img/logo.svg" alt="logo" />
          </div>
          <h1 class="app-name"></h1>
          <Navbar />
          <div className="menu menu__languages">
            <a className="a a__languages">Uk</a>
            <a className="a a__languages">Sk</a>
            <a className="a a__languages">Cz</a>
            <a className="a a__languages">En</a>
          </div>
        </menu>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p className="footer__copyright--text">
          &copy; 2023 Czechitas, Vira Derevjanko, Mariana Sarovic, mentor
          projektu Matej Sima
        </p>
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
        path: '/',
        element: <Navigate to="/intro" replace />,
      },
      {
        path: 'intro',
        element: <Intro />,
      },
      {
        path: 'sounds',
        element: <Sounds />,
      },
      {
        path: 'stories',
        element: <Stories />,
        children: [
          {
            path: 'stories1',
            element: <Stories1 />,
          },
          {
            path: 'stories2',
            element: <Stories2 />,
          },
          {
            path: 'stories3',
            element: <Stories3 />,
          },
        ],
      },
      {
        path: 'games',
        element: <Games />,
      },
      {
        path: 'aboutus',
        element: <AboutUs />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
