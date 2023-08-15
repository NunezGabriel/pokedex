import { useState } from "react";

import Input from "./input";
import { Button } from "./login-form";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";

function SignupForm() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const { email, password, first_name, last_name } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ email, password, first_name, last_name });

    signup(formData);
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
            <label style={{ color: "orange" }} for="email">
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
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <label style={{ color: "orange" }} for="email">
              First Name
            </label>
            <Input
              name="first_name"
              value={first_name}
              onChange={handleChange}
              placeholder="Ash"
            />
          </div>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <label style={{ color: "orange" }} for="email">
              Last Name
            </label>

            <Input
              name="last_name"
              value={last_name}
              onChange={handleChange}
              placeholder="Ketchum"
            />
          </div>
        </div>
        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
}

export default SignupForm;
