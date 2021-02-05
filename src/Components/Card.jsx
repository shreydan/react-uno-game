import './Card.css';
import {GameContext} from '../Contexts/GameContext'
import React, { useContext } from 'react'


function Card(props) {
    
    const {active} = useContext(GameContext);
    const [, setActiveCard] = active;
    var cardchars = props.text.split('');
    const card = {value: props.text, color: props.color}
    return(
        <div className="card"
            style={{"backgroundColor": props.color, "zIndex": props.zIndex}}
            onClick={props.cardPlayable ? ()=> setActiveCard(card) : () => console.log('cant play')}
            >
            {
                cardchars.map((letter, key) => {
                return <div key={key}>{letter}</div>
                })
            }
        </div>
    );

}
export default Card;