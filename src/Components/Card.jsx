import './Card.css';
import React, { useContext } from 'react';
import {GameContext} from '../Contexts/GameContext';


function Card(props) {
    
    const {_,__,active} = useContext(GameContext);
    const [activeCard, setActiveCard] = active;

    var cardchars = props.text.split('');
    console.log(cardchars);
    return(
    <div className="card"
        style={{"backgroundColor": props.color, "zIndex": props.zIndex}}
        onClick={() => setActiveCard({"value": props.text, "color": props.color})}>
        {
            cardchars.map((letter) => {
            return <div>{letter}</div>
              })
        }
    </div>
    );

}
export default Card;