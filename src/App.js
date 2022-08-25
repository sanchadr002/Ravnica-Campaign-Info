import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/navigation/Navbar';
import './App.css';
import TheGuildsHome from './components/guilds/TheGuildsHome';

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
        <Route 
          path='/guilds'
          element={
            <TheGuildsHome />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
