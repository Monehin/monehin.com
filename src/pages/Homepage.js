import React from 'react';
import logo from '../assets/images/monehin_logo.png';
// import { ReactComponent as Name } from '../assets/svg/name.svg';
const Homepage = () => {
  return (
    <section className='home flex h-screen w-full flex-col overflow-hidden'>
      <div>
        <img className='absolute h-20 w-20 p-5' src={logo} alt='logo' />
      </div>
      <div className='flex h-screen w-full items-center flex-center justify-center'>
        <div className='px-10 flex flex-col justify-center text-center'>
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
          <p
            id='what-i-do-text'
            className='tracking-wide md:text-xl sm:text-sm font-semibold'
          >
            Team Managment | Frontend Engineering | UI / UX
          </p>
        </div>
      </div>
      <div className='flex px-10 py-5 justify-center'>
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
