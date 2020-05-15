import React from 'react';
import './styles/tailwind.generated.css';

function App() {
  return (
    <div className='bg-red-300 flex w-full h-screen items-center'>
      <div className='px-10 flex flex-col'>
        <h4 className='tracking-widest text-2xl font-thin'>Hi, I'm</h4>
        <h1 className='tracking-widest text-6xl font-medium'>
          Emmanuel Monehin
        </h1>
      </div>
    </div>
  );
}

export default App;
