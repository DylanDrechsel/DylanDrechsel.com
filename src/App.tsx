import { useState } from 'react';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import StaticAnimation from './Pages/StaticAnimation/StaticAnimation.tsx'
import AboutMe from './Pages/AboutMe/AboutMe';

const App = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
    {!animationComplete && (
      <StaticAnimation onAnimationComplete={handleAnimationComplete}/>
    )}

    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/about_me'> About Me </Link>
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

        <Route path='about_me' element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
