import { Component } from 'react';
import './App.css'
import PokemonList from './pokemonList';
// import Dropdown from './dropdown';

class App extends Component {
  state = { data:[], loading: true, query: null}
   fetchData = async () => {
     let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex'
     if (this.state.query) {
       url = url + `?pokemon=${this.state.query}`;
     }
     let feedback = await fetch(url);
     let data = await feedback.json();
     console.log(data)
     this.setState({ data: data.results, loading:false});
   };
  componentDidMount() {
    this.fetchData();
  };
  queryFeedback = (e) => {
    this.setState ({ query: e.target.value });
  };
  render() {
    // const order = ['ascending', 'descending']
    // const type = []
    return (
      <>
        <h2>Pokemon! Gotta catch em all!</h2>
        {this.state.loading && <p>Walking across a busy road staring at phone screen</p>}
        {!this.state.loading && (
          <main>
            <section>
              <div>
              <input onChange={this.queryFeedback} type='text'></input>
              <button onClick={this.fetchData}>Play</button>
              {/* <Dropdown
        label='Order:'
        choices={order}
        changeEvent={this.keywordChange}
        />
        <Dropdown
        label='Type:'
        choices={hornChoices}
        changeEvent={this.hornChange}
        /> */}
        </div>
              <PokemonList pokedex={this.state.data} />
            </section>
          </main>
        )}
        </>
    );
  }
}

export default App;
