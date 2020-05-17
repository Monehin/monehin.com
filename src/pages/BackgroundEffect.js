import React, { useEffect, useRef, useState } from 'react';

const BackgroundEffect = (props) => {
  const randomInt = (min, max) => min + Math.floor((max - min) * Math.random());
  const colorList = [];
  for (let i = 0; i < 9; i++) {
    const bgColor = `rgba(
          ${randomInt(0, 225)},
          ${randomInt(0, 225)},
          ${randomInt(0, 225)},
          ${randomInt(0.5, 0.9)}
        )`;
    colorList.push(bgColor);
  }
  const [animation, setAnimation] = useState([]);
  let BackgroundAnimation = () => {
    const gooeyAnimation = [...Array(15)].map((data, ke) => {
      const styleLeft = Math.random() * 100;
      const styleTop = Math.random() * 100;
      const randomSize = randomInt(10, 300);
      const boxstyle = {
        backgroundColor: `${colorList[randomInt(0, 6)]}`,
        top: Math.floor(Math.random(styleLeft) * 100) + 'vh',
        left: Math.floor(Math.random(styleTop) * 100) + 'vw',
        transition: `${randomInt(0.2, 0.7)}s ease-in`,
        height: `${randomSize}px`,
        width: `${randomSize}px`,
        transform: `rotate(${randomInt(-90, 90)}deg)`,
      };
      return <div className={`box `} style={boxstyle}></div>;
    });
    setAnimation(gooeyAnimation);
    requestAnimationFrame(BackgroundAnimation);
  };

  useEffect(() => {
    BackgroundAnimation();
  }, []);

  return (
    <div id='bg-container' className='absolute top-0 left-0 w-screen h-screen'>
      {animation}
      {props.children}
    </div>
  );
};

export default BackgroundEffect;
