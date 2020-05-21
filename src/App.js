import React from 'react';
import './styles/tailwind.generated.css';
import Homepage from './pages/Homepage';
import BackgroundEffect from './components/BackgroundEffect';
// import About from './pages/About';

function App() {
  return (
    <div className='w-full flex flex-col '>
      <BackgroundEffect>
        <Homepage />
        {/* <About /> */}
      </BackgroundEffect>
    </div>
  );
}

export default App;
