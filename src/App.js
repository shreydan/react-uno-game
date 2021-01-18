import React, { useContext } from 'react'
import './App.css';
import Opponent from './Components/Opponent';
import Player from './Components/Player';
import {GameContext} from './Contexts/GameContext';

function App() {

  const {player, opponent} = useContext(GameContext);
  const [playerCards, setPlayerCards] = player;
  const [oppCards, setOppCards] = opponent;
  return (
    <div className="App">
      <Opponent length={oppCards.length}/>
      <Player cards={playerCards}/>
    </div>
  );
}

export default App;
