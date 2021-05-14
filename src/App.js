import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './constants';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL)
      .then((res) => {
        setCharacter(res.data.results);
      })
      .catch(err => {console.log('Error: failed to retrieve', err)})
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {character.map(ele => {
        return <Character key = {ele.id} data ={ ele }/>
      })}
    </div>
  );
}

export default App;
