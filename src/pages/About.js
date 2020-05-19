import React from 'react';

const About = () => {
  return (
    <section className='w-full h-screen flex'>
      <div className='tracking-widest about-title h-full flex w-1/2 justify-center items-center font-extrabold text-4xl '>
        About Me
      </div>
      <div className='h-screen w-1/2 overflow-y-scroll '>
        <div className='flex flex-col justify-around h-screen items-center h-1/2'>
          <h1 className='tracking-wide font-bold text-3xl'>Background</h1>
          <p className=''>
            Quis in id irure ad in. Consectetur dolor et do dolore do eiusmod
            cupidatat tempor ea culpa proident dolor. Nisi sit enim velit aute.
            Sunt ea minim officia reprehenderit sit exercitation sunt laborum.
            Elit amet Lorem voluptate amet excepteur aliquip excepteur laborum
            incididunt. Fugiat consequat do ut ullamco minim exercitation
            eiusmod. Quis in id irure ad in. Consectetur dolor et do dolore do
            eiusmod cupidatat tempor ea culpa proident dolor. Nisi sit enim
            velit aute. Sunt ea minim officia reprehenderit sit exercitation
            sunt laborum. Elit amet Lorem voluptate amet excepteur aliquip
          </p>
        </div>
        <div className='flex flex-col justify-around h-screen items-center'>
          <h1 className='tracking-wide font-bold text-3xl'>
            Skills & Competences
          </h1>
          <p className=''>
            Quis in id irure ad in. Consectetur dolor et do dolore do eiusmod
            cupidatat tempor ea culpa proident dolor. Nisi sit enim velit aute.
            Sunt ea minim officia reprehenderit sit exercitation sunt laborum.
            Elit amet Lorem voluptate amet excepteur aliquip excepteur laborum
            incididunt. Fugiat consequat do ut ullamco minim exercitation
            eiusmod.
          </p>
        </div>
        <div className='flex flex-col justify-around h-screen items-center'>
          <h1 className='tracking-wide font-bold text-3xl'>Projects</h1>
          <p className=''>
            Quis in id irure ad in. Consectetur dolor et do dolore do eiusmod
            cupidatat tempor ea culpa proident dolor. Nisi sit enim velit aute.
            Sunt ea minim officia reprehenderit sit exercitation sunt laborum.
            Elit amet Lorem voluptate amet excepteur aliquip excepteur laborum
            incididunt. Fugiat consequat do ut ullamco minim exercitation
            eiusmod.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
