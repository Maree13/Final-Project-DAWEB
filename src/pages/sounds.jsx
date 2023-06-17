import React from 'react';

export const Sounds = () => {
  return (
    <>
      <div className="container-sounds">
        <figure className="figure-sound figure__sound--morning">
          <figcaption>Morning</figcaption>
          <img
            className="image image07"
            src="img/img_morning.jpeg"
            alt="morning"
          />
          <audio
            controls
            loop
            // src="./sounds-folder/490244__bird_singing_morning.ogg"
          >
            <source
              src="./sounds-folder/490244__bird_singing_morning.ogg"
              type="audio/ogg; codecs=vorbis"
            />
            <source
              src="./sounds-folder/490244__bird_singing_morning.wav"
              type="audio/wav"
            />
            <a href="./sounds-folder/490244__bird_singing_morning.ogg">
              Download audio
            </a>
          </audio>
        </figure>

        <figure className="figure-sound figure__sound--dishes">
          <figcaption>Dishes</figcaption>
          <img
            className="image image08"
            src="img/img_dishes.jpeg"
            alt="dishes"
          />
          <audio
            controls
            loop
            // src="./sounds-folder/246177__home_washing-dishes.ogg"
          >
            <source
              src="./sounds-folder/246177__home_washing-dishes.ogg"
              type="audio/ogg; codecs=vorbis"
            />
            <source
              src="./sounds-folder/246177__home_washing-dishes.wav"
              type="audio/wav"
            />
            <a href="./sounds-folder/246177__home_washing-dishes.ogg">
              Download audio
            </a>
          </audio>
        </figure>

        <figure className="figure-sound figure__sound--lake">
          <figcaption>Lake</figcaption>
          <img
            className="image image07"
            src="img/img_waves.jpeg"
            alt="meditation"
          />
          <audio
            controls
            loop
            // src="./sounds-folder/573191__waves-gentle-lake-water.ogg"
          >
            <source
              src="./sounds-folder/573191__waves-gentle-lake-water.ogg"
              type="audio/ogg; codecs=vorbis"
            />
            <source
              src="./sounds-folder/573191__waves-gentle-lake-water.wav"
              type="audio/wav"
            />
            <a href="./sounds-folder/573191__waves-gentle-lake-water.ogg">
              Download audio
            </a>
          </audio>
        </figure>

        <figure className="figure-sound figure__sound--washing">
          <figcaption>Washing</figcaption>
          <img
            className="image image07"
            src="img/img_laundry.jpeg"
            alt="laundry"
          />
          <audio
            controls
            loop
            // src="./sounds-folder/631883__home_washing-machine-cycle.ogg"
          >
            <source
              src="./sounds-folder/631883__home_washing-machine-cycle.ogg"
              type="audio/ogg; codecs=vorbis"
            />
            <source
              src="./sounds-folder/631883__home_washing-machine-cycle.wav"
              type="audio/wav"
            />
            <a href="/sounds-folder/631883__home_washing-machine-cycle.ogg">
              Download audio
            </a>
          </audio>
        </figure>

        <figure className="figure-sound figure__sound--lullaby">
          <figcaption>Lullaby</figcaption>
          <img
            className="image image07"
            src="img/img_lullaby.jpeg"
            alt="img07"
          />
          <audio
            controls
            loop
            // src="./sounds-folder/432152__music-box-magic-flute-mozart.ogg"
          >
            <source
              src="./sounds-folder/432152__music-box-magic-flute-mozart.ogg"
              type="audio/ogg; codecs=vorbis"
            />
            <source
              src="./sounds-folder/432152__music-box-magic-flute-mozart.wav"
              type="audio/wav"
            />
            <a href="./sounds-folder/432152__music-box-magic-flute-mozart.ogg">
              Download audio
            </a>
          </audio>
        </figure>

        <figure className="figure-sound figure__sound--night">
          <figcaption>Night</figcaption>
          <img className="image image07" src="img/img_sleep.jpeg" alt="img07" />
          <audio
            controls
            loop
            // src="./sounds-folder/196161__crickets-birds-at-night-cedarsforest.ogg"
          >
            <source
              src="./sounds-folder/196161__crickets-birds-at-night-cedarsforest.ogg"
              type="audio/ogg; codecs=vorbis"
            />
            <source
              src="./sounds-folder/196161__crickets-birds-at-night-cedarsforest.wav"
              type="audio/wav"
            />
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
