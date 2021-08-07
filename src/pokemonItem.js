import { Component } from 'react';

class PokemonItem extends Component {
    render() {
        return(
                <li>Name: {this.props.choice.pokemon} Type: {this.props.choice.type_1} <img src={this.props.choice.url_image} alt={this.props.choice.pokemon}/></li>
        )
    }
}

export default PokemonItem;