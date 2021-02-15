import React, { useContext } from 'react'
import './App.css';
import ActiveCard from './Components/ActiveCard';
import Modal from './Components/Modal';
import Opponent from './Components/Opponent';
import Player from './Components/Player';
import {GameContext} from './Contexts/GameContext';

function App() {

  const {player, opponent, active, modalVisibility} = useContext(GameContext);
  const [playerCards] = player;
  const [oppCards] = opponent;
  const [activeCard] = active;
  const [ModalViz] = modalVisibility;
  return (
    <div className="App">
      <Modal text='hajimemashite' visible={ModalViz}></Modal>
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
