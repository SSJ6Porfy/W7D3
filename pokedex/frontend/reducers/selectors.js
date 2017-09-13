import { values } from 'lodash';

const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

export default selectAllPokemon;
