import styled from "@emotion/styled";
import { colors } from "../styles";

const StyledInput = styled("input")`
  ::placeholder {
    color: ${colors.gray.medium};
  }
`;

function Input({
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <div>
      {label ? <label htmlFor={id || name}>{label}</label> : ""}
      <StyledInput
        id={id || name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          backgroundColor: "transparent",
          outline: "none",
          border: "1px solid orange",
          borderRadius: "5px",
          padding: "4px",
          color: "orange",
        }}
      />
    </div>
  );
}

export default Input;
