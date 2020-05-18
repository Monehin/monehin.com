import React from 'react';

const Homepage = () => {
  return (
    <section className='flex h-screen w-full flex-col overflow-hidden'>
      <div className='flex h-screen w-full items-center'>
        <div className='px-10 flex w-full flex-col'>
          <h4 className='tracking-widest md:text-xl sm:text-sm font-semibold pl-4'>
            Hi, I'm
          </h4>
          <h1 className='tracking-widest text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
            Emmanuel Monehin
          </h1>
          <p className='tracking-wide md:text-xl sm:text-sm font-semibold'>
            I write Code, love Art, think Agile.
            <br /> <br />
          </p>
          <p className='tracking-wide md:text-xl sm:text-sm font-semibold'>
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
