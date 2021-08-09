import React, { Component } from 'react';

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
        console.log(this.props.match)
        const { data } = this.state;
        return(
            <section>
                <h1>{ data.pokemon }</h1>
                <div className='info'>
                    <img src={data.url_image} alt={data.pokemon} />
                </div>
            </section>
        );
    }
}

export default PokeInfo