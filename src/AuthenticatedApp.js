import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Button } from "./components/login-form";
import styled from "@emotion/styled";
import { useAuth } from "./context/auth-context";
import SearchPage from "./pages/search-page";
import FavoritesPage from "./pages/favorites-page";
import {
  createFavorite,
  removeFavorite,
  getFavorites,
} from "./services/favorites-service";

const Container = styled.div`
  margin: 90px auto;
  border: 1px solid orange;
  width: fit-content;

  background-color: #191919;
  padding: 30px;
  border-radius: 15px;
  gap: 25px;
  min-height: 400px;
`;
function AuthenticatedApp() {
  const { logout } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  function handleAddFavorite(pokemon) {
    const data = {
      pokemon_name: pokemon?.name,
      pokemon_id: pokemon.id,
      pokemon_type: pokemon.types[0].type?.name,
      pokemon_avatar_url:
        pokemon.sprites.other["official-artwork"].front_default,
    };

    createFavorite(data)
      .then((newFavorite) => setFavorites([...favorites, newFavorite]))
      .catch(console.log);
  }

  function handleRemoveFavorite(pokemon) {
    const favorite = favorites.find(
      (fav) => fav.pokemon_name === pokemon?.name
    );

    removeFavorite(favorite.id).then(() => {
      const newFavorites = favorites.filter(
        (fav) => fav.pokemon_name !== pokemon?.name
      );

      setFavorites(newFavorites);
    });
  }

  return (
    <Container>
      <Button
        style={{
          maxHeight: "70px",
          marginBottom: "30px",
          gap: "15px",
          alignItems: "center",
        }}
        onClick={logout}
      >
        Logout
      </Button>
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              favorites={favorites}
              onAddFavorite={handleAddFavorite}
              onRemoveFavorite={handleRemoveFavorite}
            />
          }
        />
        <Route
          path="favorites"
          element={<FavoritesPage favorites={favorites} />}
        />
      </Routes>
    </Container>
  );
}

export default AuthenticatedApp;
