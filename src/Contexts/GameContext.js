import React, {createContext, useState} from 'react'
import {cardGenerator, startingCard} from '../cardGenerator'

export const GameContext = createContext();
var initialTurnRandomizer = Math.round(Math.random());
export const GameProvider = props => {

    const [playerCards, setPlayerCards] = useState(cardGenerator(7));
    const [oppCards, setOppCards] = useState(cardGenerator(7));
    const [activeCard, setActiveCard] = useState(startingCard());
    const [ModalViz, setModalViz] = useState(false);
    const [playerTurn, setTurn] = useState(1);

    // 0: opponent's turn, 1: player's turn

    const value = {
        player: [playerCards, setPlayerCards],
        opponent: [oppCards, setOppCards],
        active: [activeCard, setActiveCard],
        turn: [playerTurn, setTurn],
        modalVisibility: [ModalViz, setModalViz]
    }

    return (
        <GameContext.Provider value={value}>
            {props.children}
        </GameContext.Provider>
    )
}
