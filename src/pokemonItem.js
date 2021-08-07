import { Component } from 'react';

class PokemonItem extends Component {
    render() {
        return(
                <li>{this.props.choice.pokemon} <img src={this.props.choice.url_image} alt={this.props.choice.pokemon}/></li>
        )
    }
}

export default PokemonItem;