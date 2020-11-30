import React from 'react';

import ApplicationFormPage from './components/ApplicationFormPage';
import CreateTripsPage from './components/CreateTripsPage';
import HomePage from './components/HomePage';
import ListTripsPage from './components/ListTripsPage';
import ListTripsPageAdm from './components/ListTripsPageAdm';
import LoginPage from './components/LoginPage';
import Router from './components/Router';
import TripDetailsPage from './components/TripDetailsPage';

function App() {
  return(
    <div>
      APP JS
      <HomePage />
      <ListTripsPage />
      <ApplicationFormPage />
      <LoginPage />
      <ListTripsPageAdm />
      <TripDetailsPage />
      <CreateTripsPage />
      <Router />
    </div>
  )
}

export default App