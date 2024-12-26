import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Blackbars from './pages/Blackbars';
import Brightbars from './pages/Brightbars';
import Steelgrades from './pages/Steelgrades';
import Infrastructure from './pages/Infrastructure';
import Applications from './pages/Applications';
import Contactus from './pages/Contactus';
import Error from './pages/Error';
import './styles/main.css';
import './commonjs/common.js';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path='/blackbars' element={<Blackbars />} />
        <Route path='/brightbars' element={<Brightbars />} />
        <Route path='/steelgrades' element={<Steelgrades />} />
        <Route path='/infrastructure' element={<Infrastructure />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
