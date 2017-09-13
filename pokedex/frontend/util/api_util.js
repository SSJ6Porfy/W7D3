export const fetchAllPokemon = function() {
  return $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  });
};
