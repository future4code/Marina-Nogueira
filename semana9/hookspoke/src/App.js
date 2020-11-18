import React, { useState, useEffect } from 'react';
import PokeCard from './components/PokeCard/PokeCard';
import axios from 'axios';
import styled from 'styled-components';

const PokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-conten: center;
  align-items: center;
`

export default function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(error => {
        console.log(error)
      }) 
})

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  }
    
  return (
    <PokeContainer>
      <select onChange={changePokeName}>
        <option value="">Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
          )
        })}
      </select>

      {pokeName && <PokeCard pokemon={pokeName} />}
    </PokeContainer>
  )
}
