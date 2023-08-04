import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";

import { colors } from "../styles";

const PokeImage = styled("img")`
  max-width: 150px;
`;

const FavoriteButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${colors.gray.medium};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

function formatId(id) {
  id = String(id);
  const new_id =
    id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}` : `#${id}`;

  return new_id;
}

function PokemonData({ pokemon, onAddFavorite, onRemoveFavorite, isFavorite }) {
  const regularContent = (
    <>
      <RiStarFill color={colors.gray.light} />
      Mark as Favorite
    </>
  );

  const favoriteContent = (
    <>
      <RiStarFill color={colors.yellow[500]} />
      Remove Favorite
    </>
  );

  return (
    <div>
      <h2>{pokemon?.name}</h2>
      <p>{formatId(pokemon.id)}</p>
      <PokeImage
        src={pokemon.sprites.other["official-artwork"].front_default}
      />
      {pokemon.types.map((element) => (
        <p key={element.slot}>{element.type?.name}</p>
      ))}

      <p>Height: {pokemon.height / 10} m </p>
      <p>Weight: {pokemon.weight / 10} kg</p>

      <FavoriteButton
        onClick={() =>
          isFavorite ? onRemoveFavorite(pokemon) : onAddFavorite(pokemon)
        }
      >
        {isFavorite ? favoriteContent : regularContent}
      </FavoriteButton>
    </div>
  );
}

export default PokemonData;
