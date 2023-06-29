import styled from "styled-components";

const Input = styled.input`
  display: block;
  padding: 0 0 0 1%;
  margin: 1%;
  width: 90%;
  background-color: transparent;
  color: var(--formColorBlue);
  font-weight: 100;
  border: none;
  font-family: var(--fontFamilyText);
  font-size: clamp(0.5rem, 1px, 3vw + 1rem, 0.5rem);
  border-radius:10px;
  border: 1px solid var(--formColorBlue);
  );
  &:focus,
  &:active {
    outline: none;
  }
`;

export default Input;
