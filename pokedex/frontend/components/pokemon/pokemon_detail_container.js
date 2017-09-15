import { connect } from 'react-redux';
import { receivePokemon, requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = state => ({
  poke: state.entities.pokemon[state.entities.ui.pokeDisplay]
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (pokemonId) => dispatch(requestPokemon(pokemonId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
