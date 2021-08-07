import { Component } from 'react';
import './App.css'
import PokemonList from './pokemonList';
// import Dropdown from './dropdown';

class App extends Component {
  state = { data:[], loading: true, query: null, sortOrder:'asc', type:'pokemon'}

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
    //  if (this.state.type) {
    //    searchParams.set('type', this.state.type)
    //  }

     url= url + `?${searchParams.toString()}`;
     console.log(url)

     let feedback = await fetch(url);
     let data = await feedback.json();
     this.setState({ data: data.results, loading:false});
   };

  queryFeedback = (e) => {
    this.setState ({ query: e.target.value });
  };

  updateOrder = (e) => {
    this.setState({sortOrder: e.target.value})
  };
  
  updateType = (e) => {
    this.setState({type: e.target.value})
  }

  render() {
    //  const order = ('asc, dsc')
    // const type = []
    return (
      <>
        <h2>Pokemon! Gotta catch em all!</h2>
            <section class='input'>
              <div>
              <select onChange={this.updateOrder}>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
                </select>
                <select onChange={this.updateType}>
                <option value='type_1'>X</option>
                </select>
              <input onChange={this.queryFeedback} type='text'></input>
              <button onClick={this.fetchData}>Play</button>
                </div>
                </section>
                <section>
                {this.state.loading && <p>Walking across a busy road staring at phone screen</p>}
                {!this.state.loading && (
                <PokemonList pokedex={this.state.data} />
                )}
                </section>
        </>
    );
  }
}

export default App;
