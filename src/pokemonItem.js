import { Component } from 'react';
import { Link } from 'react-router-dom';

class PokemonItem extends Component {
    render() {
        return(
        <div>
            <Link to={`/pokemon/${this.props.choice._id}`}>
                <li>Name: {this.props.choice.pokemon}  <img src={this.props.choice.url_image} alt={this.props.choice.pokemon}/></li>
            </Link>
            </div>
        )
    }
}
// Type: {this.props.choice.type_1}
export default PokemonItem;