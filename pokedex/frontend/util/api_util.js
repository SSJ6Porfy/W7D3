export const fetchAllPokemon = function() {
  return $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  });
};

export const fetchPokemon = function(pokemonId) {
  return $.ajax({
    method: "GET",
    url: `api/pokemon/${pokemonId}`
  });
};
