import './App.css';
import Navigation from './GlobalComponents/Navigation'
import HorizontalLine from './GlobalComponents/HorizontalLine'
import Title from './HomeComponents/Title'


function App() {
  return (
		<div className='App'>
         <Navigation />
         <HorizontalLine />
         <Title />
         <HorizontalLine />
      {/* <img src="images/kadr_lewy.svg" loading="lazy" style="transform: translate3d(0vw, 0vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;" data-w-id="1cdef75e-e144-d199-7705-3c4153906baa" id="w-node-_1cdef75e-e144-d199-7705-3c4153906baa-3cf6449c" alt="" class="kadr"></img> */}
		</div>

	);
}

export default App;
