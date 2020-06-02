import React, { useRef, useState, useEffect } from 'react';
import { TweenMax } from 'gsap';

const UnderscoreTextEffect = () => {
  let underscore = useRef(null);

  const [skillText, setSkillText] = useState('');
  const [color, setColor] = useState('#fff');

  function animateSkillsText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    TweenMax.to(underscore, 0.1, {
      color: colors[0],
    });
    setColor(colors[0]);
    setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        setSkillText(words[0].substring(0, letterCount));
        setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          setColor(colors[0]);
          letterCount += x;
          waiting = false;
        }, 2000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        setSkillText(words[0].substring(0, letterCount));
        letterCount += x;
      }
    }, 120);
    setInterval(function () {
      if (visible === true) {
        TweenMax.to(underscore, 0.5, {
          display: 'none',
        });
        visible = false;
      } else {
        TweenMax.to(underscore, 0.5, {
          display: 'inline-block',
        });
        visible = true;
      }
    }, 400);
  }

  useEffect(() => {
    setTimeout(() => {
      animateSkillsText(
        ['Product Management', 'Frontend Engineering', 'UI / UX', 'Music'],
        'text',
        ['rebeccapurple', 'tomato', 'red', 'grey']
      );
    }, 5000);
  }, []);
  return (
    <div>
      <div
        style={{ color: color }}
        className='skillsText tracking-wide md:text-xl sm:text-sm font-semibold'
      >
        {skillText}
        <div
          style={{ color: color }}
          ref={(e) => (underscore = e)}
          class='underscore'
          id='console'
        >
          &#95;
        </div>
      </div>
    </div>
  );
};

export default UnderscoreTextEffect;
