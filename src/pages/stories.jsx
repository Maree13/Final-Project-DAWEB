import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Stories = () => {
  return (
    <main className="stories-main">
      <figure className="stories-image">
        <Link to="/stories1">
          <img
            className="stories-image3"
            src="img/Stories/stories 1.svg"
            alt="story1"
          />
        </Link>
        <Link className="button-stories" to="/stories/stories1">
          Read
        </Link>
      </figure>

      <figure className="stories-image">
        <Link to="/stories2">
          <img
            className="stories-image3"
            src="img/Stories/stories 2.svg"
            alt="story2"
          />
        </Link>
        <Link className="button-stories" to="/stories/stories2">
          Read
        </Link>
      </figure>

      <figure className="stories-image">
        <Link to="/stories3">
          <img
            className="stories-image3"
            src="img/Stories/stories 3.svg"
            alt="story3"
          />
        </Link>
        <Link className="button-stories" to="/stories/stories3">
          Read
        </Link>
      </figure>

      <Outlet />
    </main>
  );
};
