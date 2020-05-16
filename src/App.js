import React from 'react';
import './styles/tailwind.generated.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='bg-red-300 flex w-full h-screen items-center'>
      <HomePage />
    </div>
  );
}

export default App;
