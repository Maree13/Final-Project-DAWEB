import React from 'react';
import { Link } from 'react-router-dom';

export const Intro = () => {
  return (
    <main className="main main__menu">
      <figure className="figure-image figure-image01">
        <img
          className="image image01"
          src="img/image01_brunette_with_laptop.jpeg"
          alt="brunette_with_laptop"
        />

        <Link className="a a__main" to="/stories">
          Bedtime stories
        </Link>
      </figure>
      <figure className="figure-image">
        <img
          className="image image02"
          src="img/image02_woman exercising in the park.jpeg"
          alt="woman exercising in the park"
        />
        <Link className="a a__main" to="games.html">
          Games for stress relief
        </Link>
      </figure>
      <figure className="figure-image">
        <img
          className="image image03"
          src="img/image03_man and woman sitting in lotus position with leaves and flowers.jpeg"
          alt="man and woman sitting in lotus position with leaves and flowers"
        />
        <Link className="a a__main" to="/sounds">
          Soothing sounds
        </Link>
      </figure>
    </main>
  );
};
