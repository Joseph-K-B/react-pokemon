import { Component } from 'react';
import './App.css'
import PokemonList from './pokemonList';
// import Dropdown from './dropdown';

class App extends Component {
  state = { data:[], loading: true, query: null, order:'asc'}

  componentDidMount() {
    this.fetchData();
  };

   fetchData = async () => {

     let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex'
     let searchParams = new URLSearchParams();

     if (this.state.query) {
       searchParams.set('pokemon', this.state.query);
     };
     if (this.state.sort) {
       searchParams.set('sort', 'pokemon');
       searchParams.set('direction', this.state.order);
     };

     url= url + `?${searchParams.toString()}`;

     let feedback = await fetch(url);
     let data = await feedback.json();
     console.log(data)
     this.setState({ data: data.results, loading:false});
   };

   sortAscending = (e) => {
     const { poke } =this.state;
     poke.sort((a,b) => a - b)
     this.setState({ poke })
   }

   sortDescending = (e) => {
    const { poke } =this.state;
    poke.sort((a,b) => a - b).reverse()
    this.setState({ poke })
  }

  queryFeedback = (e) => {
    this.setState ({ query: e.target.value });
  };

  updateOrder = (e) => {
    this.setState({order: e.target.value})
  };

  render() {
    //  const order = ('asc, dsc')
    // const type = []
    return (
      <>
        <h2>Pokemon! Gotta catch em all!</h2>
            <section>
              <div>
              <input onChange={this.queryFeedback} type='text'></input>
              <button onClick={this.fetchData}>Play</button>
              <select defaultValue={this.state.order} onChange={this.state.updateOrder}>
                <option value='asc'>Ascending</option>
                <option value='dsc'>Descending</option>
                </select>
                </div>
                </section>
                {this.state.loading && <p>Walking across a busy road staring at phone screen</p>}
                {!this.state.loading && (
                <PokemonList pokedex={this.state.data} />
          )}
        </>
    );
  }
}

export default App;
