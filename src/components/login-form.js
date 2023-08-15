import { useState } from "react";

import Input from "./input";
import { useAuth } from "../context/auth-context";
import { colors } from "../styles/colors";
import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid orange;
  color: orange;
  margin: 0 auto;
  padding: 5px 100px;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    background-color: orange;
    color: black;
  }
`;

function LoginForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    login(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "70px" }}>
        <div style={{ display: "grid", gap: "30px" }}>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <label style={{ color: "orange" }} for="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="example@mail.com"
            />
          </div>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <label style={{ color: "orange" }} for="password">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="********"
            />
          </div>
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default LoginForm;
