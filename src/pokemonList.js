import { Component } from 'react';
import PokemonItem from './pokemonItem.js';
import './App.css'

class PokemonList extends Component {
    render() {
        return (
            <ul className='pokemon'>
            {this.props.pokedex.map((item) => {
            return <PokemonItem key={item.pokemon} choice={item} url={item.url_image}/>
        })}
        </ul>
        ); 
    }
}

export default PokemonList