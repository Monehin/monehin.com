import React from 'react';

const Homepage = () => {
  return (
    <div className='px-10 flex flex-col'>
      <h4 className='tracking-widest md:text-xl sm:text-sm font-thin pl-4'>
        Hi, I'm
      </h4>
      <h1 className='tracking-widest text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
        Emmanuel Monehin
      </h1>
      <p className='tracking-wide md:text-xl sm:text-sm'>
        I write code, think design, and create growth & development experiences
        for teams.
        <br /> <br />
      </p>
      <p className='tracking-wide md:text-xl sm:text-sm'>
        Currently Senior Engineering Program Coordinator at&nbsp;
        <a className='font-semibold' href='https://andela.com/'>
          Andela
        </a>
      </p>
    </div>
  );
};

export default Homepage;
