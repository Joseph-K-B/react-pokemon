import React, { Component } from 'react';
import PokemonList from './pokemonList.js';

class PokemonPage extends Component {
    state = { data:[], 
        loading: true, 
        query: null, 
        sortOrder:'asc', 
        type:'pokemon',
        page: 1}
    
    componentDidMount() {
        this.fetchData();
        };
    
        fetchData = async () => {
        let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex'
        let searchParams = new URLSearchParams();
    
        if (this.state.query) {
            searchParams.set('pokemon', this.state.query);
        };
        if (this.state.sortOrder) {
            searchParams.set('sort', 'pokemon');
            searchParams.set('direction', this.state.sortOrder);
        };
    url= url + `?${searchParams.toString()}`;

    let feedback = await fetch(url);
    let data = await feedback.json();

    this.setState({ data: data.results, loading: false});
    };

    queryFeedback = (e) => {
        this.setState ({ query: e.target.value });
      };
    
    updateOrder = (e) => {
    this.setState({sortOrder: e.target.value})
    };

    pokemonSearch = async () => {
        await this.setState ({ page: 1 })
        this.fetchData();
    }
    render() {
        const { loading } = this.state;
        return (
            <>
        <h2>Pokemon! Gotta catch em all!</h2>
            <section className='input'>
              <div>
              <select onChange={this.updateOrder}>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
                </select>
              <input onChange={this.queryFeedback} type='text'></input>
              <button onClick={this.pokemonSearch}>Play</button>
                </div>
                </section>
                <section>
                {loading && <p>Walking across a busy road staring at phone screen</p>}
                {!loading && (
                <PokemonList pokedex={this.state.data} />
                )}
                </section>
        </>
        )
    }
}
 export default PokemonPage