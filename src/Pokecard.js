import React, {Component} from 'react';
import './Pokecard.css'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);


class PokeCard extends Component {
    render() {
        let imgSrc  = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h1>Please name me</h1>
                <img src={imgSrc} alt="brad,chad,thad"></img>
                <div className="Pokecard-data">Type: {this.props.exp}</div>
            </div>
        )
    }
}

export default PokeCard;
