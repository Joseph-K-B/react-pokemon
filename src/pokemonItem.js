import { Component } from 'react';

class PokemonItem extends Component {
    render() {
        return(
            <ul>
                <li>{this.props.choice.pokemon}</li>
            </ul>
        )
    }
}

export default PokemonItem;