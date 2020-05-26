import React, { useRef, useEffect } from 'react';
import logo from '../assets/logo/monehin_logo.svg';
import { TweenMax, Power3 } from 'gsap';
// import { ReactComponent as Name } from '../assets/svg/name.svg';
const Homepage = () => {
  let nav = useRef(null);
  let highlight = useRef(null);
  let centerSection = useRef(null);
  let currentJob = useRef(null);
  let emoji = useRef(null);

  useEffect(() => {
    TweenMax.from(centerSection, 2, { height: '0%', ease: Power3.easeInOut });
    TweenMax.to(centerSection, 2, {
      width: '85%',
      ease: Power3.easeInOut,
      delay: '1',
    });
    TweenMax.from([nav, highlight], 2, {
      opacity: '0',
      ease: Power3.easeInOut,
      delay: '1.8',
    });
    TweenMax.from([currentJob], 2, {
      opacity: '0',
      ease: Power3.easeInOut,
      delay: '1.8',
    });
    TweenMax.from([emoji], 3, {
      opacity: '0',
      ease: Power3.easeInOut,
      delay: '3',
    });
  });
  return (
    <section className='h-screen w-full'>
      <div
        ref={(e) => (nav = e)}
        className='relation w-full justify-between'
        style={{
          display: 'grid',
          gridTemplateColumns: '7.5% 1fr 1fr 7.5%',
          minHeight: '10vh',
        }}
      >
        <img
          className=' py-5'
          style={{ gridColumn: '2/3' }}
          src={logo}
          alt='logo'
        />
        <h2 className=' self-center  font-semibold tracking-wide self-end text-right'>
          Thoughts
        </h2>
      </div>
      <div
        className='flex items-center justify-center text-white h-80'
        style={{ height: '80%' }}
      >
        <div
          ref={(e) => (centerSection = e)}
          className='flex w-full h-full bg-black items-center justify-center'
        >
          <div
            ref={(e) => (highlight = e)}
            className='px-10 flex flex-col justify-center text-center'
          >
            <h4
              id='intro-text'
              className=' pl-4 tracking-wide md:text-xl sm:text-sm font-semibold'
            >
              Hi, I'm
            </h4>
            <h1
              id='my-name'
              className='tracking-widest text-xl sm:text-4xl md:text-6xl lg:text-6xl font-bold'
            >
              {/* <Name /> */}
              Emmanuel Monehin
            </h1>
            <p
              id='basic-info'
              className='tracking-wide md:text-xl sm:text-sm font-semibold'
            >
              I write Code, love Design, think Agile.
              <br /> <br />
            </p>
            <p className='tracking-wide md:text-xl sm:text-sm font-semibold'>
              Product Management | Frontend Engineering | UI / UX
            </p>
            <p ref={(e) => (emoji = e)} className='m-4'>
              <span style={{ fontSize: '3rem' }}>{`✌`}</span>
            </p>
          </div>
        </div>
      </div>
      <div
        ref={(e) => (currentJob = e)}
        className='flex px-10 py-5 justify-center'
        style={{ minHeight: '10vh' }}
      >
        <p
          id='current-job-text'
          className='tracking-wide md:text-sm sm:text-sm font-semibold text-center'
        >
          Currently Senior Engineering Program Coordinator at&nbsp;
          <a
            className='font-semibold text-purple-900 md:text-xl '
            href='https://andela.com/'
          >
            Andela
          </a>
        </p>
      </div>
    </section>
  );
};

export default Homepage;
