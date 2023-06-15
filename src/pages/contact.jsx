import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  return (
    <main className="main__contact">
      <div className="menu__github--icon">
        <i className="fa fa-github"></i>
        <a
          class="contact__link--github"
          href="https://github.com/Maree13/Final-Project-DAWEB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
          {/* https://github.com/Maree13/ */}
          Final-Project-DAWEB
        </a>
      </div>
    </main>
  );
};
