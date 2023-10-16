import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, Navbar } from '../components';
import { Home } from '../pages';

const Main = () => {
  return (
    <>
      <header
        className='fixed-top d-flex align-items-center bg-white shadow-md'
        id='header'
      >
        <Navbar />
      </header>
      <main id='main'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <footer className='footer relative' role='contentinfo'>
        <Footer />
      </footer>
    </>
  );
};

export default Main;
