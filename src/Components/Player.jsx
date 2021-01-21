import './Player.css'
import Card from '../Components/Card';


function Player(props) {
    var cards = props.cards;
    
    return (
        <div className="player">
            {
                cards.map((card, key)=>{
                    return <Card text={card.value} 
                                 color={card.color} 
                                 zIndex={key}
                                 onclick={console.log(card.value,card.color)}
                            />
                  })
            }
        </div>
    );
}

export default Player;