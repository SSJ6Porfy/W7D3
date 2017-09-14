import React from 'react';
import selectAllPokemon from '../../reducers/selectors';
import PokemonIndexItem from './pokemon_index_item';

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
    console.log(result);
    return (
      <ul>
        { result }
      </ul>
    );
  }

}

export default PokemonIndex;
