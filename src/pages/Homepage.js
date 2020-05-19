import React from 'react';
import { ReactComponent as Name } from '../assets/svg/name.svg';
const Homepage = () => {
  return (
    <section className='flex h-screen w-full flex-col overflow-hidden'>
      <div className='flex h-screen w-full items-center'>
        <div className='px-10 flex w-full flex-col'>
          <h4
            id='intro-text'
            className=' pl-4 tracking-wide md:text-xl sm:text-sm font-semibold'
          >
            Hi, I'm
          </h4>
          <h1
            id='my-name'
            className='tracking-widest text-xl sm:text-4xl md:text-6xl lg:text-7xl font-bold'
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
          <p
            id='what-i-do-text'
            className='tracking-wide md:text-xl sm:text-sm font-semibold'
          >
            and create growth and development experiences with Engineering teams
          </p>
        </div>
      </div>
      <div className='flex px-10 py-5'>
        <p
          id='current-job-text'
          className='tracking-wide md:text-xl sm:text-sm font-semibold'
        >
          Currently Senior Engineering Program Coordinator at&nbsp;
          <a
            className='font-semibold text-purple-900 md:text-3xl '
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
