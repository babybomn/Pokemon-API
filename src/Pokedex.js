import React, { Component } from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css';
class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            { id: 1, base_experience: 92 },
            { id: 2, base_experience: 79 },
            { id: 3, base_experience: 92 },
            { id: 4, base_experience: 84 },
            { id: 5, base_experience: 77 },
            { id: 6, base_experience: 58 },
            { id: 7, base_experience: 74 },
            { id: 8, base_experience: 38 },
            { id: 9, base_experience: 54 },
            { id: 10, base_experience: 76 },
            { id: 11, base_experience: 40 },
            { id: 12, base_experience: 90 },
            { id: 13, base_experience: 9 },
            { id: 14, base_experience: 25 },
            { id: 15, base_experience: 52 },
            { id: 16, base_experience: 46 },
            { id: 17, base_experience: 20 },
            { id: 18, base_experience: 23 },
            { id: 19, base_experience: 49 },
            { id: 20, base_experience: 46 },
            { id: 21, base_experience: 84 },
            { id: 22, base_experience: 100 },
            { id: 23, base_experience: 50 },
            { id: 24, base_experience: 23 },
            { id: 25, base_experience: 62 },
            { id: 26, base_experience: 87 },
            { id: 27, base_experience: 37 },
            { id: 28, base_experience: 17 },
            { id: 29, base_experience: 17 },
            { id: 30, base_experience: 62 },
            { id: 31, base_experience: 13 },
            { id: 32, base_experience: 24 },
            { id: 33, base_experience: 14 },
            { id: 34, base_experience: 89 },
            { id: 35, base_experience: 88 },
            { id: 36, base_experience: 56 },
            { id: 37, base_experience: 43 },
            { id: 38, base_experience: 27 },
            { id: 39, base_experience: 5 },
            { id: 40, base_experience: 89 },
            { id: 41, base_experience: 51 },
            { id: 42, base_experience: 63 },
            { id: 43, base_experience: 49 },
            { id: 44, base_experience: 78 },
            { id: 45, base_experience: 55 },
            { id: 46, base_experience: 85 },
            { id: 47, base_experience: 6 },
            { id: 48, base_experience: 3 },
            { id: 49, base_experience: 14 },
            { id: 50, base_experience: 65 },
            { id: 51, base_experience: 21 },
            { id: 52, base_experience: 88 },
            { id: 53, base_experience: 93 },
            { id: 54, base_experience: 18 },
            { id: 55, base_experience: 60 },
            { id: 56, base_experience: 29 },
            { id: 57, base_experience: 74 },
            { id: 58, base_experience: 46 },
            { id: 59, base_experience: 88 },
            { id: 60, base_experience: 65 },
            { id: 61, base_experience: 79 },
            { id: 62, base_experience: 82 },
            { id: 63, base_experience: 79 },
            { id: 64, base_experience: 33 },
            { id: 65, base_experience: 55 },
            { id: 66, base_experience: 17 },
            { id: 67, base_experience: 80 },
            { id: 68, base_experience: 97 },
            { id: 69, base_experience: 17 },
            { id: 70, base_experience: 81 },
            { id: 71, base_experience: 84 },
            { id: 72, base_experience: 35 },
            { id: 73, base_experience: 31 },
            { id: 74, base_experience: 33 },
            { id: 75, base_experience: 63 },
            { id: 76, base_experience: 42 },
            { id: 77, base_experience: 45 },
            { id: 78, base_experience: 28 },
            { id: 79, base_experience: 16 },
            { id: 80, base_experience: 24 },
            { id: 81, base_experience: 40 },
            { id: 82, base_experience: 67 },
            { id: 83, base_experience: 79 },
            { id: 84, base_experience: 15 },
            { id: 85, base_experience: 29 },
            { id: 86, base_experience: 79 },
            { id: 87, base_experience: 37 },
            { id: 88, base_experience: 37 },
            { id: 89, base_experience: 96 },
            { id: 90, base_experience: 63 },
            { id: 91, base_experience: 3 },
            { id: 92, base_experience: 31 },
            { id: 93, base_experience: 55 },
            { id: 94, base_experience: 23 },
            { id: 95, base_experience: 55 },
            { id: 96, base_experience: 6 },
            { id: 97, base_experience: 2 },
            { id: 98, base_experience: 26 },
            { id: 99, base_experience: 97 },
            { id: 100, base_experience: 5 }


        ]
    };
    render() {
        return (
            <div className="Pokedex">
                <h1 className="heading">Pokedex - The Pokemon Library</h1>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        );
    }
}
export default Pokedex;
