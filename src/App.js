import { Component } from 'react';
import './App.css'
import PokemonList from './pokemonList';

class App extends Component {
  state = { data:[], loading: true, query: null}
   fetchData = async () => {
     let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex'
     if (this.state.query) {
       url = url + `?pokemon=${this.state.query}`;
     }
     let feedback = await fetch(url);
     let data = await feedback.json();

     this.setState({ data: data.feedback, loading:false});
   };
  componentDidMount() {
    this.fetchData();
  };
  queryFeedback = (e) => {
    this.setState ({ query: e.target.value });
  };
  render() {
    return (
      <>
        <h2>Pokemon! Gotta catch em all!</h2>
        {this.state.loading && <p>Walking across a busy road staring at phone screen</p>}
        {!this.state.loading && (
          <main>
            <section>
              <imput onChange={this.queryFeedback} type='text'></imput>
              <button onClick={this.fetchData}>Play</button>
              <PokemonList pokedex={this.state.data} />
            </section>
          </main>
        )}
        </>
    );
  }
}

export default App;
