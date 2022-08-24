import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/navigation/Navbar';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route 
          path='/'
          element={
            <Home />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
