import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge, union } from 'lodash';

const defaultState = {pokeDisplay: 1};
const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POKEMON:
      let newState = merge({}, state);
      newState.pokeDisplay = action.pokemon.pokemon.id;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
