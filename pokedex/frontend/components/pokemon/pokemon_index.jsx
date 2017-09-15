import React from 'react';
import selectAllPokemon from '../../reducers/selectors';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetail from './pokemon_detail';
import PokemonDetailContainer from './pokemon_detail_container';
import { HashRouter, Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    let result = this.props.pokemon.map((pokemon, idx)=> {
          return (
            <PokemonIndexItem key={pokemon.id + idx} pokemon={pokemon}/>
          );
      });
    return (
      <div>
        <ul>
          { result }
        </ul>
        <Route path='/pokemon/:id' component={PokemonDetailContainer}/>
      </div>
    );
  }
}

export default PokemonIndex;
