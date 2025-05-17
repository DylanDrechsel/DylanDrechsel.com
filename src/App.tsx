import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AboutMe from './Pages/AboutMe/AboutMe';

function App() {

  return (
    <>
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
        <Route path='/' element={
          <div>
            <h1> DylanDrechsel </h1>
          </div>
        } />

        <Route path='about_me' element={<AboutMe />} />
      </Routes>
    </>
  )
}

export default App;
