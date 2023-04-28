import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Info from './components/Info/Info';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <>
    
    <BrowserRouter>
    <Header></Header>
    <Bio></Bio>
        <Routes>
          <Route index element={< Info />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>

    <Footer></Footer>
    </>
  )
}

export default App;
