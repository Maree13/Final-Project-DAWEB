import React from 'react';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <main className="main__aboutus">
      <div className="figure__aboutus figure__aboutus--vira">
        <figure className="figure__foto--mari">
          <img
            className="img__profile img__profile--vira"
            src="img/Vira.jpg"
            alt="Vira profile"
          />
          <h1>Vira</h1>
          <p className="paragraph">
            Mám ráda život a hory. V každé situaci se snažím najít pozitiv. A
            hlavním důvodem, proč se já chci přidat do IT, jsou lidé. Chci
            pracovat, studovat a komunikovat s lidmi, kteří jsou otevření všemu:
            novým změnám, výzvám, známostem, pohybu.
          </p>
        </figure>
      </div>
      <div className="figure__aboutus figure__aboutus--mari">
        <figure className="figure__foto--mari">
          <img
            className="img__profile img__profile--mari"
            src="img/Mari.JPG"
            alt="Mari profile"
          />
          <h1>Mari</h1>
          <p className="paragraph">
            Som slovensko-čiernohorského pôvodu, ale bývam v Prahe, kde sa cítim
            ako doma. Vždy som bola skôr humanitne zameraná, a tak je pre mňa
            programovanie veľkou výzvou. Web som si vybrala preto, lebo spája v
            sebe logiku a estetično. Rada by som sa podielala na projektoch,
            ktoré maju presah. Najšťastnejšia som na samote v horách a milujem
            kávu.
          </p>
        </figure>
      </div>
    </main>
  );
};
