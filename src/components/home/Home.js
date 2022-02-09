import React from 'react';
import './home.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Body from '../body/Body';

function Home() {
  return (
 <div className='home' >
   <Header/>
   <Body/>
   <Footer/>
 </div>
 );
}

export default Home;
