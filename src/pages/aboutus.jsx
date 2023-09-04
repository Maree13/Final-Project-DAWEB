import React from 'react';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <main className="main__aboutus">
      <div className="figure__aboutus figure__aboutus--vira">
        <figure className="figure__foto--vira">
          <img
            className="img__profile img__profile--vira"
            src="img/Vira.jpg"
            alt="Vira profile"
          />
          <div class="figure__aboutus--textpart">
            <h1 class="figure__profile--title">Vira</h1>
            <p className="figure__profile--paragraph">
              Mám ráda život a hory. V každé situaci se snažím najít pozitiv. A
              hlavním důvodem, proč se já chci přidat do IT, jsou lidé. Chci
              pracovat, studovat a komunikovat s lidmi, kteří jsou otevření
              všemu: novým změnám, výzvám, známostem, pohybu.
            </p>
          </div>
        </figure>
      </div>
      <div className="figure__aboutus figure__aboutus--mari">
        <figure className="figure__foto--mari">
          <img
            className="img__profile img__profile--mari"
            src="img/Mari.JPG"
            alt="Mari profile"
          />
          <div class="figure__aboutus--textpart">
            <h1 class="figure__profile--title">Mari</h1>
            <p className="figure__profile--paragraph">
              In my educational journey, I have always been more towards the
              arts, so programming is a special challenge for me. I have chosen
              web development because I can combine logic and graphic design in
              it. I like to be involved in projects that have an outreach and
              can help people. I am happiest in the mountains and in the love of
              good coffee.
              {/* Na svojej ceste za vzdelanim som bola vždy skôr humanitne
              zameraná, a tak je pre mňa programovanie veľkou výzvou. Web som si
              vybrala preto, lebo v ňom môžem skĺbiť logiku a design. Rada sa
              podieľam na projektoch, ktoré maju presah a môžu ľuďom pomôcť.
              Najšťastnejšia som na samote v horách a milujem kávu. */}
            </p>
          </div>
        </figure>
      </div>
    </main>
  );
};
