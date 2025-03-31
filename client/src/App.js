import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import InvitePage from './pages/Invite/Invite';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="invite" element={<InvitePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
