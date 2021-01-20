import React, {createContext, useState} from 'react'
import cardGenerator from '../cardGenerator'

export const GameContext = createContext();
export const GameProvider = props => {

    const [playerCards, setPlayerCards] = useState(cardGenerator(7));
    const [oppCards, setOppCards] = useState(cardGenerator(7));
    const [activeCard, setActiveCard] = useState({"value": null, "color": null});

    const value = {
        player: [playerCards, setPlayerCards],
        opponent: [oppCards, setOppCards],
        active: [activeCard, setActiveCard]
    }

    return (
        <GameContext.Provider value={value}>
            {props.children}
        </GameContext.Provider>
    )
}
