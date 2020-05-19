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
          <h1 className='py-5'>
            <Name />
          </h1>
          <p
            id='basic-info'
            className='tracking-wide md:text-xl sm:text-sm font-semibold'
          >
            I write Code, love Design, think Agile.
            <br /> <br />
          </p>
          <p
            id='current-job-text'
            className='tracking-wide md:text-xl sm:text-sm font-semibold'
          >
            Currently Senior Engineering Program Coordinator at&nbsp;
            <a className='font-semibold' href='https://andela.com/'>
              Andela
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
