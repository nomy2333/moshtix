import React from 'react';
import {Element} from 'react-scroll';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VeInfo from './components/veInfo/index';
import Hilights from './components/Hightlights/Hilights';
import Pricing from './components/pricing';
import Footer from './components/header_footer/Footer';




function App() {
  return (
    <div className="App" style={{ height:"1500px" ,background:'white'}}>
     
      <Header/>

      <Element name="featured">
        <Featured/>
      </Element>    
      

      <Element name="venuefo">
        <VeInfo/>
      </Element>    
     

      <Element name="highlights">
        <Hilights/>
      </Element>      


      <Element name="pricing">
        <Pricing/>
      </Element>     
      
      <Footer/>
      
    </div>
  );
}

export default App;
