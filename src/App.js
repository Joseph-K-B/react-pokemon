import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import PokemonList from './pokemonList';
import PokemonPage from './PokemonPage'
import Header from './Header.js';


class App extends Component {
  render() {
    return (
      <section className='app'>
        <BrowserRouter>
        <Header />
          <Switch>
            <Route path='/pokemon' component={PokemonPage}></Route>
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
