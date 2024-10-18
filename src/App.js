import React from 'react';
import {Brand , CTA , Navbar} from './components';
import {Footer, Blogs , Possibility , Header , Features , WhatGPT3} from './containers';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
         <Navbar />
         <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App;
