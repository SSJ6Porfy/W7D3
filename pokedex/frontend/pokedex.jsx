import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { requestAllPokemon } from './middleware/thunk';
import selectAllPokemon from './reducers/selectors';

document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore();
  ReactDom.render(<Root store={store}/> , document.getElementById("root"));

  window.selectAllPokemon = selectAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
});
