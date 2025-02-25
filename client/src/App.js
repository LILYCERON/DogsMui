import './App.css';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router';
import Landing from './components/landing/Landing';
import Home from './components/home/Home';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
