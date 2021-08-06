import { Component } from 'react';
import PokemonItem from './pokemonItem.js';

class PokemonList extends Component {
    render() {
        return (
            <li> Search for pokemon
            {this.props.pokedex.map((item) => {
            return <PokemonItem key={item.pokemon} choice={item} url={item.url_image}/>
        })}
        </li>
        ); 
    }
}

export default PokemonList