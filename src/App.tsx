import './App.scss';
// import { useState, useEffect } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import StartMenu from './Pages/StartMenu/StartMenu';
import Home from './Pages/Home/Home';
// import EyeOfSauron from './Common/Components/EyeOfSauron/EyeOfSauron';
// import ComponentExamples from './Common/GridSystem/ComponentExamples.tsx';

const App = () => {
  
  return (
    <div  className='app-main'>
      {/* <StartMenu /> */}
      <Home />
      
      {/* <ComponentExamples /> */}
      {/* <EyeOfSauron /> */}


    {/* <div> */}
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to='/'> Home </Link>
            </li>
          </ul>
        </nav>
      </div>
        
      <h1> DylanDrechsel.com </h1>

      <Routes>
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
            <h1 className="text-4xl font-bold text-green-700">
              DylanDrechsel.com (Home Page)
            </h1>
          </div>
        } />

      </Routes> */}
    {/* </div> */}
    </div>
  );
}

export default App;
