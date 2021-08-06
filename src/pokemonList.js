import { Component } from 'react';
import PokemonItem from './pokemonItem.js';

class PokemonList extends Component {
    render() {
        return (
            <ul>
            {this.props.pokemon.map((item) => {
            return <PokemonItem key={item.pokemon} choice={item}/>
        })}
        </ul>
        ); 
    }
}

export default PokemonList