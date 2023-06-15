import React from 'react';
import { Link } from 'react-router-dom';

export const Games = () => {
  return (
    <main className="game-main">
      <figure className="game-image">
        <img
          className="game-image1"
          src="img/gameimg/Touches.png"
          alt="Touches"
        />
        <div className="game-text">
          <h2>Magical Touches</h2>
          <p>
            Imagine that your body is a musical instrument. Each part of the
            body produces its own sound. By touching with your palms, you can
            make a child sing, hum, crow, and much more.
          </p>
        </div>
      </figure>

      <figure className="game-image">
        <img
          className="game-image2"
          src="img/gameimg/Nonsense.png"
          alt="Nonsense"
        />
        <div className="game-text">
          <h2>Nonsense</h2>
          <p>
            We say the beginning of a sentence, and then come up with an
            absolutely "absurd," unreal continuation.
          </p>
        </div>
      </figure>

      <figure className="game-image">
        <img
          className="game-image4"
          src="img/gameimg/Bullseye.png"
          alt="Bullseye"
        />
        <div className="game-text">
          <h2>Bullseye</h2>
          <p>
            Crumple a piece of paper in your hands and, as if it were a ball,
            aim for the target.
          </p>
        </div>
      </figure>

      <figure className="game-image">
        <img
          className="game-image5"
          src="img/gameimg/Animal.png"
          alt="Animal"
        />
        <div className="game-text">
          <h2>I'm an Animal</h2>
          <p>
            Use gestures, poses, and sounds to represent an animal. The other
            player has to guess. The portrayal of animals should always be
            "lively".
          </p>
        </div>
      </figure>

      <figure className="game-image">
        <img
          className="game-image6"
          src="img/gameimg/Word.png"
          alt="Nonexistent Word"
        />
        <div className="game-text">
          <h2>Nonexistent Word</h2>
          <p>
            We create nonexistent words and imagine what they could mean in the
            language of extraterrestrial beings.
          </p>
        </div>
      </figure>

      <figure className="game-image">
        <img
          className="game-image3"
          src="img/gameimg/Weather.png"
          alt="Weather"
        />
        <div className="game-text">
          <h2>Weather</h2>
          <p>
            You can walk, you can tap with the pads of your fingers (preferably
            with your nails): first, the sun and a gentle breeze (we walk and
            tap slowly, softly, and quietly), then the wind picks up strength,
            and it starts to rain (we walk and tap faster and stomp our feet).
            The rain intensifies - we stomp harder, downpour - we jump,
            thunderstorm or hurricane - we jump, blow with all our might, and
            shout. The wind calms down, the rain subsides - we gradually walk
            quieter and slower. We conclude with "good weather."
          </p>
        </div>
      </figure>
    </main>
  );
};
