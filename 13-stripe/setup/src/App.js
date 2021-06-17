import React, { useState } from 'react';
import sublinks from './data';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import Hero from './Hero';
import Navbar from './Navbar';
import Home from './Home';


function App() {

  return (
    <>
    <Navbar />
    <Sidebar />
    <Hero />
    <Submenu />

    </>
  );
}

export default App;
