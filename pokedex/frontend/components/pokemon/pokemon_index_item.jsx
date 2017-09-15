import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = function(props) {
  let pokemon = props.pokemon;
  // debugger;
  return (
    <li>
      <Link to={"/pokemon/" + pokemon.id}>
        {pokemon.name}
        <img src={pokemon.image_url} height='50'/>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
