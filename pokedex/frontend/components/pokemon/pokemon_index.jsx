import React from 'react';
import selectAllPokemon from '../../reducers/selectors';

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
          <li key={pokemon.id + idx}>
            {pokemon.name}
            <img src={pokemon.image_url} height='50'/>
          </li>
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
