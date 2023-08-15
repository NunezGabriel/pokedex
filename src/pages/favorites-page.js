import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { CustomLink } from "../UnauthenticatedApp";

const typeColors = {
  grass: "#74CB48",
  electric: "#F9CF30",
  fire: "#F57D31",
  normal: "white",
  poison: "#c729ff",
};

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PokeCard = styled("div")`
  text-align: center;
  border: 2px solid ${({ type }) => typeColors[type]};
  color: ${({ type }) => typeColors[type]};
`;

function FavoritesPage({ favorites }) {
  return (
    <Wrapper>
      {favorites.map((fav, index) => (
        <PokeCard key={`poke${index}`} type={fav.pokemon_type}>
          {fav.pokemon_name}
        </PokeCard>
      ))}

      <Link to="/" style={{ textDecoration: "none", margin: "0 auto" }}>
        <CustomLink>Go to search</CustomLink>
      </Link>
    </Wrapper>
  );
}

export default FavoritesPage;
