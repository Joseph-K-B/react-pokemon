import React, { Component } from 'react';
import './info.css'

class PokeInfo extends Component {
    state = { data: {} };

    loadData = async () => {
        const { id } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`
        const feed = await fetch (url);
        const data = await feed.json();
        this.setState ({ data });
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        const { data } = this.state;
        return(
            <section>
                <h1>{ data.pokemon }</h1>
                <div className='info'>
                    <img src={data.url_image} alt={data.pokemon} />
                    <ul>
                        <li>Type: {data.type_1}</li>
                        <li>Ability: {data.ability_1}</li>
                        <li>Attack: {data.attack}</li>
                        <li>Defense: {data.defense}</li>
                        <li>Height: {data.height}</li>
                        <li>Weight: {data.weight}</li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default PokeInfo