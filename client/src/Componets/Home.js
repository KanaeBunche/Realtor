import React from 'react';
import './HomeStyle.css';
import HompageSVG from './estate.svg';
import Rent from './Rent';
import Buy from './Buy';
import List from './List';
import About from './About';
import Contact from './Contact';
import Serve from './Serve';
import Ink from './link';

const Home = ({setCurrentpage}) => {
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

console.log("Screen Width:", screenWidth);
console.log("Screen Height:", screenHeight);


const backgroundImageStyle = {
      backgroundImage: `url(${HompageSVG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };

  return (

      
<div className="homepage" style={backgroundImageStyle}>
<div className="home-container">
<h1 className="title title-left">Yejide</h1> 
      <h1 className='title2 title2-left'>Bunche.</h1>
      <p className="subtitle subtitle-left"> Real Estate</p> 
<svg className="arrow arrow-right" width="103" height="103" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z" fill="black"/>
</svg>
 </div>
     <About/>
      <Serve />
      <Ink/>
      <Buy/>
      <Rent/>
      <List/>
      <Contact />
    </div>
  );
}

export default Home;


