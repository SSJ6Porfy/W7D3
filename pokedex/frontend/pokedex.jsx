import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { HashRouter, Route } from 'react-router-dom';

import { fetchAllPokemon, fetchPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon, receivePokemon, requestPokemon } from './actions/pokemon_actions';
import selectAllPokemon from './reducers/selectors';

document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore();
  const root = document.getElementById("root");

  ReactDom.render(<Root store={store}/> , root);

  window.receivePokemon = receivePokemon;
  window.requestPokemon = requestPokemon;
  window.fetchPokemon = fetchPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
});
