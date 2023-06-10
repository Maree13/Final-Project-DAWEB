import React from 'react';

export const Intro = () => {
  return (
    <main className="main main__menu">
      <figure className="figure-image figure-image01">
        <img
          className="image image01"
          src="img/image01_brunette_with_laptop.jpeg"
          alt="brunette_with_laptop"
        />

        <a className="a a__main" href="stories.html">
          Bedtime stories
        </a>
      </figure>
      <figure className="figure-image">
        <img
          className="image image02"
          src="img/image02_woman exercising in the park.jpeg"
          alt="woman exercising in the park"
        />
        <a className="a a__main" href="games.html">
          Games for stress relief
        </a>
      </figure>
      <figure className="figure-image">
        <img
          className="image image03"
          src="img/image03_man and woman sitting in lotus position with leaves and flowers.jpeg"
          alt="man and woman sitting in lotus position with leaves and flowers"
        />
        <a className="a a__main" href="sounds.html">
          Soothing sounds
        </a>
      </figure>
    </main>
  );
};
