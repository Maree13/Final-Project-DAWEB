import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const Stories1 = () => {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main className="stories1-main">
      <h1 ref={myRef}>The Tree That Wanted to Travel</h1>
      <p>
        In a small village, near a great forest, lived a very special tree named
        Tilly. Tilly had lived in the village for a very long time, her branches
        wide, and her leaves were the greenest of green. But Tilly had a secret
        - she wanted to travel. </p>
        <p> "But trees don't travel, Tilly," her friend, the
        wise old owl Oliver, said one day. "Trees are too heavy and rooted in
        one place." </p>
        <p>"I know that," Tilly replied, "but I still want to see
        what's beyond our forest, feel the different soils, meet new plants and
        animals." </p> 
        <p>"You are an odd tree," Oliver hooted, but he didn't dismiss
        Tilly's dreams. </p>
        <p>
        One day, a strong gust of wind swept across the village,
        carrying with it seeds from all the plants and trees, including Tilly's.
        Her seeds were tiny, packed with life, and ready to start their own
        journeys. 
        </p>
        <p>"Look, Tilly!" said Oliver, "Part of you is travelling.
        Wherever your seeds land, a part of you will grow." 
        </p>
        <p>Tilly was delighted.
        She watched as the wind carried her seeds over the hills, past the
        rivers, and beyond the horizon. As her seeds travelled, Tilly realized
        she was part of a larger world. And even though she was rooted in her
        village, she was connected to far-off places through her seeds. And so,
        Tilly was content. She continued to flourish in her little village,
        always looking forward to where her seeds might travel next, meeting new
        plants and animals through the stories her seedlings sent back with the
        wind.
      </p>
    </main>
  );
};
