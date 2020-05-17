import React from 'react';
import BackgroundEffect from './BackgroundEffect';

const Homepage = () => {
  return (
    <BackgroundEffect>
      <div className='flex h-screen w-full items-center'>
        <div className='px-10 flex w-full flex-col'>
          <h4 className='tracking-widest md:text-xl sm:text-sm font-thin pl-4'>
            Hi, I'm
          </h4>
          <h1 className='tracking-widest text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
            Emmanuel Monehin
          </h1>
          <p className='tracking-wide md:text-xl sm:text-sm'>
            I write code, think design, and create growth & development
            experiences for teams.
            <br /> <br />
          </p>
          <p className='tracking-wide md:text-xl sm:text-sm'>
            Currently Senior Engineering Program Coordinator at&nbsp;
            <a className='font-semibold' href='https://andela.com/'>
              Andela
            </a>
          </p>
        </div>
      </div>
    </BackgroundEffect>
  );
};

export default Homepage;
