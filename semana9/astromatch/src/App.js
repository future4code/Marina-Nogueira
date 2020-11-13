import React, { useState } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import MatchScreen from './components/MatchScreen/MatchScreen'; 
import SwipeScreen from './components/SwipeScreen/SwipeScreen';
import TopMenu from './components/TopMenu/TopMenu';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 30px 1fr 30px;
  background-color: gray;
  justify-items: center;
`

const ScreenContainer = styled.div`
  display: grid;
  height: 90vh;
  width: 30vw;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  justify-items: center;
`

const clearMatches = () => {
  axios
  .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear')
  .then((response) => {
    console.log(response)
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error.message)
  })
}


function App() {
  const [renderedScreen, setRenderedScreen] = useState(true)

  const changeScreen = () => {
    setRenderedScreen(!renderedScreen)
  }
  
  return (
    <AppContainer>
      <ScreenContainer>
        <TopMenu 
          onClickChangeScreen={changeScreen}
          onClickClear={clearMatches}
        />
        {renderedScreen ? <SwipeScreen /> : <MatchScreen />}
      </ScreenContainer>
    </AppContainer>
  )
}

export default App