import React from 'react';

export const Sounds = () => {
  return (
    <>
      <div className="container-sounds">
        <figure className="figure-sound figure__sound--morning">
          <figcaption>Morning</figcaption>
          <img className="image image07" src="img/image07.svg" alt="img07" />
          <audio
            controls
            loop
            src="./sounds-folder/490244__bird_singing_morning.ogg"
          >
            <a href="./sounds-folder/490244__bird_singing_morning.ogg">
              Download audio
            </a>
          </audio>
        </figure>

        <figure className="figure-sound figure__sound--dishes">
          <figcaption>Dishes</figcaption>
          <img className="image image08" src="img/image08.svg" alt="img08" />
          <audio
            controls
            loop
            src="./sounds-folder/246177__home_washing-dishes.ogg"
          >
            <a href="./sounds-folder/246177__home_washing-dishes.ogg">
              Download audio
            </a>
          </audio>
        </figure>

        <figure className="figure-sound figure__sound--lake">
          <figcaption>Lake</figcaption>
          <img className="image image07" src="img/image07.svg" alt="img07" />
          <audio
            controls
            loop
            src="./sounds-folder/573191__waves-gentle-lake-water.ogg"
          >
            <a href="./sounds-folder/573191__waves-gentle-lake-water.ogg">
              Download audio
            </a>
          </audio>
        </figure>

        <figure className="figure-sound figure__sound--washing">
          <figcaption>Washing</figcaption>
          <img className="image image07" src="img/image07.svg" alt="img07" />
          <audio
            controls
            loop
            src="./sounds-folder/631883__home_washing-machine-cycle.ogg"
          >
            <a href="/sounds-folder/631883__home_washing-machine-cycle.ogg">
              Download audio
            </a>
          </audio>
        </figure>

        <figure className="figure-sound figure__sound--lullaby">
          <figcaption>Lullaby</figcaption>
          <img className="image image07" src="img/image07.svg" alt="img07" />
          <audio
            controls
            loop
            src="./sounds-folder/432152__music-box-magic-flute-mozart.ogg"
          >
            <a href="./sounds-folder/432152__music-box-magic-flute-mozart.ogg">
              Download audio
            </a>
          </audio>
        </figure>

        <figure className="figure-sound figure__sound--night">
          <figcaption>Night</figcaption>
          <img className="image image07" src="img/image07.svg" alt="img07" />
          <audio
            controls
            loop
            src="./sounds-folder/196161__crickets-birds-at-night-cedarsforest.ogg"
          >
            <a href="./sounds-folder/196161__crickets-birds-at-night-cedarsforest.ogg">
              Download audio
            </a>
          </audio>
        </figure>
      </div>
      <div className="button__off--container">
        <button className="button button__off--sounds" id="stopAll"></button>
      </div>
    </>
  );
};
