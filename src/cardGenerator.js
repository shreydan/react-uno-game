import Chance from 'chance';
const chance = new Chance();

export function cardGenerator(n) {
    var cards = [];
    var colors = {
        "red": "#f54747" ,
        "yellow": "#e3aa0e",
        "green": "#4ac25c",
        "blue": "#47b6e6"
    };
    var card = {};
    var cardTypes = ['color','wild'];
    var colorCardValues = ['1','2','3','4','5','6','7','8','9','REVERSE','SKIP','+2'];
    var colorCardWeights = [1,1,1,1,1,1,1,1,1,0.5,0.5,0.5];
    var wildCardValues = ['+4','WILD'];

    for(var i=1;i<=n;i++) {
        
        var cardType = chance.weighted(cardTypes,[90,10]);
        if(cardType === 'color') {
            var colorCardValue = chance.weighted(colorCardValues,colorCardWeights);
            var color = colors[Object.keys(colors)[Math.floor(Math.random()*Object.keys(colors).length)]];
            card = {
                "value": colorCardValue,
                "color": color
            }
        }
        else {
            var wildCardValue = wildCardValues[Math.floor(Math.random()*wildCardValues.length)];
            card = {
                "value": wildCardValue,
                "color": "black"
            }
        }

        cards.push(card);

    }

    return cards;

}

export function startingCard() {
    var colorCardValues = ['1','2','3','4','5','6','7','8','9'];
    var colorCardValue = colorCardValues[Math.floor(Math.random()*colorCardValues.length)];
    var colors = {
        "red": "#f54747" ,
        "yellow": "#e3aa0e",
        "green": "#4ac25c",
        "blue": "#47b6e6"
    };
    var color = colors[Object.keys(colors)[Math.floor(Math.random()*Object.keys(colors).length)]];

    return ({
                "value": colorCardValue,
                "color": color
            })

}