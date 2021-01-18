import './Player.css'
import Card from '../Components/Card';

function Player(props) {
    var cards = props.cards;
    return (
        <div className="player">
            {
                cards.map((card, key)=>{
                    return <Card text={card.value} color={card.color} zIndex={key}/>
                  })
            }
        </div>
    );
}

export default Player;