import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/navigation/Navbar';
import TheGuildsHome from './components/guilds/TheGuildsHome';
import CampaignConceptHome from './components/campaign_concept/CampaignConceptHome';
import CharacterCreationHome from './components/character_creation/CharacterCreationHome';

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
        <Route 
          path='/campaign'
          element={
            <CampaignConceptHome />
          }
        />
        <Route 
          path='/character'
          element={
            <CharacterCreationHome />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
