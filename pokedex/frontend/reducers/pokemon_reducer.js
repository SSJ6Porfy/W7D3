import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge, union } from 'lodash';

const defaultState = {
  name: "",
  image_url: "",
  type: "",
  attack: "",
  defense: "",
  moves: "",
  items: ""
};

const pokemonReducer = (state = defaultState, action) => {
  Object.freeze(state);
  console.log(action);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_POKEMON:
      let newState = merge({}, state);
      newState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
