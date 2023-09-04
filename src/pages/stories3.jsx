import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const Stories3 = () => {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main className="stories3-main">
      <h1 ref={myRef}>The Sleepy Star's Dreamy Adventure 3</h1>
      <p>
        Once upon a time, in a twinkling galaxy far, far away, there lived a
        tiny star named Stella. Stella was the sleepiest star in the whole sky.
        Every night, she would shine her gentle light upon the Earth before
        bedtime.
      </p>
      <p>
        One night, as Stella started to twinkle, she felt a little sad. She
        wished she could have her own dreams just like the children on Earth
        did. The Moon, seeing Stella's sadness, decided to help her.
      </p>
      <p>
        "Dear Stella," whispered the Moon, "I will grant you a special dream
        tonight."
      </p>
      <p>
        Stella closed her eyes and drifted into a deep slumber. In her dream,
        she found herself on a magical journey through the cosmos. She sailed on
        shimmering stardust and danced with the comets. She visited distant
        planets and made friends with talking constellations.
      </p>
      <p>
        As Stella's dream continued, she felt a warm breeze carrying her to a
        peaceful garden filled with flowers made of moonlight. The gentle
        swaying of the moonlit petals and the soft melodies of twinkling stars
        made her heart feel calm and content.
      </p>
      <p>
        Stella's dream adventure finally led her to a quiet meadow where the
        Dreamkeeper, a wise old star, was waiting for her. The Dreamkeeper
        shared stories of bravery, kindness, and the wonders of the universe.
        Stella listened intently, feeling her worries melt away.
      </p>
      <p>
        When the time came for Stella to wake up, she opened her eyes with a
        smile. She felt rejuvenated and filled with a sense of wonder. The Moon
        had granted her the gift of beautiful dreams, and now Stella knew that
        every night could be a magical adventure.
      </p>
      <p>
        From that day on, Stella's gentle light shone even brighter, spreading
        tranquility and calmness to all the children on Earth. And as they
        drifted off to sleep, they would gaze up at the sky, knowing that
        Stella's dreams were watching over them, guiding them into a peaceful
        night's rest.
      </p>
      <p>
        And so, dear children, remember that dreams can take you on wonderful
        journeys, just like Stella's dreamy adventure. Close your eyes, let your
        imagination soar, and let the magic of the night fill your heart with
        tranquility. Goodnight, sleep tight, and let your dreams take flight.
      </p>
    </main>
  );
};
