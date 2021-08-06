import { Component } from 'react';
import PokemonItem from './pokemonItem.js';

class PokemonList extends Component {
    render() {
        return (
            <li>
            {this.props.pokedex.map((item) => {
            return <PokemonItem key={item.pokemon} choice={item}/>
        })}
        </li>
        ); 
    }
}

export default PokemonList