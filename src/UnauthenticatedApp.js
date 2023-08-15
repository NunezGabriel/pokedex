import { useState } from "react";
import styled from "@emotion/styled";

import { colors } from "./styles";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";

export const CustomLink = styled("button")`
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.gray.medium};
  transition: 1s;
  &:hover {
    color: orange;
  }
`;

export const Container = styled.div`
  margin: 90px auto;
  border: 1px solid orange;
  width: fit-content;
  display: grid;
  background-color: #191919;
  padding: 30px;
  border-radius: 15px;
  gap: 25px;
  min-height: 400px;
`;

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkClick() {
    setShowLogin(!showLogin);
  }

  return (
    <Container>
      <h1 style={{ color: "orange" }}>Welcome to your pokedex</h1>
      {showLogin ? <LoginForm /> : <SignupForm />}

      <CustomLink onClick={handleLinkClick}>
        {showLogin ? "Create Account" : "Login"}
      </CustomLink>
    </Container>
  );
}

export default UnauthenticatedApp;
