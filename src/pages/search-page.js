import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Input from "../components/input";
import PokemonData from "../components/pokemon-data";
import { getPokemon } from "../services/pokeapi-service";

function useAsync(asyncCallback) {
  const [state, setState] = useState({
    status: "idle", // idle = inactive // success // error // pending
    data: null,
    error: null,
  });

  useEffect(() => {
    const promise = asyncCallback();

    if (!promise) return;

    setState({ status: "pending", data: null, error: null });

    promise
      .then((data) => {
        setState({ status: "success", data, error: null });
      })
      .catch((error) => {
        setState({
          status: "error",
          data: null,
          error,
        });
      });
  }, [asyncCallback]);

  return { ...state };
}

function SearchPage({ favorites, onAddFavorite, onRemoveFavorite }) {
  const [query, setQuery] = useState("");

  // "El pokemon no existe! intente de nuevo"

  const fetchPokemon = useCallback(
    function () {
      if (!query) return;

      return getPokemon(query);
    },
    [query]
  );

  const { status, data: pokemon, error } = useAsync(fetchPokemon);

  const isFavorite = Boolean(
    favorites.find((fav) => fav.pokemon_name === pokemon?.name)
  );

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(event.target.elements.query.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="query" placeholder="pokemon name" />
        <button>Search</button>
      </form>
      {status === "pending" && "Loading..."}
      {status === "idle" && "Ready to search"}
      {status === "success" && (
        <PokemonData
          pokemon={pokemon}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={isFavorite}
        />
      )}
      {status === "error" && <p style={{ color: "red" }}>{error.message}</p>}

      <Link to="/favorites">Go to Favorites</Link>
    </div>
  );
}

export default SearchPage;
