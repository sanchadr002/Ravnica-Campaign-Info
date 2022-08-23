import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/navigation/Navbar';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}

export default App;
