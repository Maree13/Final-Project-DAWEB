import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const Stories3 = () => {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main className="stories3-main">
      <h1 ref={myRef}>Stories 3</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dolorem
        quisquam quas ea provident quae ex? Enim quae aperiam vero. Laborum
        corrupti quod id ducimus earum aspernatur libero in. Vero! Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Itaque quas modi error a,
        vero necessitatibus dolor sed laboriosam libero at perferendis
        doloremque odit unde assumenda cumque debitis tempore maiores similique.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vitae est
        perspiciatis ipsam neque necessitatibus vel quis reprehenderit, tenetur
        debitis omnis esse tempore quo minima sit laborum id porro reiciendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur labore
        excepturi temporibus maxime animi tempora, illo quas libero nesciunt
        odit vitae, nulla totam fugiat repudiandae! Sint est doloremque cum
        quaerat.
      </p>
    </main>
  );
};
