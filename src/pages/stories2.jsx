import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const Stories2 = () => {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main className="stories2-main">
      <h1 ref={myRef}>Flicker's Glow: A Firefly's Rhythm</h1>
      <p>
        Once upon a time, in a land full of twilight hues, there lived a little
        firefly named Flicker. Flicker was the tiniest amongst his firefly
        friends, but his glow was the brightest. He shone like a tiny lantern,
        filling the evening with a gentle, soothing light. Each night, Flicker
        and his friends would wake up as the sky turned a deep blue. They would
        light up the meadows and forests, creating a magical spectacle of
        twinkling lights. Children would look out their windows and smile at the
        fireflies' light show before they drifted off to sleep. But Flicker had
        a problem. Even though he was very good at lighting up the night, he had
        a hard time falling asleep when the morning came. He would buzz around,
        restless, while all his friends snoozed peacefully. The bright daylight
        would make his little glow seem faint, and he would feel lonely and out
        of place. One night, Flicker decided to seek the help of Wise Owl, the
        oldest and most knowledgeable creature in the forest. Owl lived in the
        tallest tree and was known to have answers to everything. Arriving at
        Owl's home, Flicker buzzed nervously, "Wise Owl, I can't sleep when the
        morning comes. What should I do?" Wise Owl looked at Flicker with soft
        eyes and said, "Flicker, each creature has its own rhythm. Just as the
        sun and the moon rise and set, your glow too has its time. Maybe you're
        trying too hard to fit into others' schedules. Try listening to your own
        rhythm." Flicker thought about what Wise Owl had said. He realized he
        had been so focused on trying to be like his friends, he hadn't
        considered what was natural for him. So, the next morning, instead of
        trying to force himself to sleep, Flicker continued to buzz around a bit
        longer. He enjoyed the quiet of the morning, watched the sun rise, and
        then, as the world started to wake up, Flicker felt a pleasant tiredness
        wash over him. Following his own rhythm, he drifted off into a peaceful
        sleep. From then on, Flicker did not worry about sleeping at the same
        time as his friends. He embraced his unique rhythm and shone his light
        even brighter. And when he finally fell asleep, he dreamt of beautiful
        things - of shimmering stars, sparkling rivers, and the warm, welcoming
        glow of the coming night.
      </p>
    </main>
  );
};
