import React, { useContext } from 'react'
import './App.css';
import ActiveCard from './Components/ActiveCard';
import Opponent from './Components/Opponent';
import Player from './Components/Player';
import {GameContext} from './Contexts/GameContext';

function App() {

  const {player, opponent, active} = useContext(GameContext);
  const [playerCards, setPlayerCards] = player;
  const [oppCards, setOppCards] = opponent;
  const [activeCard, setActiveCard] = active;
  return (
    <div className="App">
      <Opponent length={oppCards.length}/>
      <div className="gamePlayArea">
        <div></div>
        <ActiveCard activeCard={activeCard}></ActiveCard>
        <div></div>
      </div>
      <Player cards={playerCards}/>
    </div>
  );
}

export default App;
