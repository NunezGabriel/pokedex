const BASE_URI = "https://pokeapi.co/api/v2/pokemon/";

export function getPokemon(query) {
  console.log(BASE_URI + query.toLowerCase());
  return fetch(BASE_URI + query.toLowerCase()).then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.log(response);
    throw new Error("404 Not found");
  });
}
