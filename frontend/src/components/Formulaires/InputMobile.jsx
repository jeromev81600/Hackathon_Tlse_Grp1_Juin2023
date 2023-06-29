import styled from "styled-components";

const InputMobile = styled.input`
  display: block;
  background-color: transparent;
  color: var(--formColorBlue);
  font-family: var(--fontFamilyTitle);
  font-weight: 100;
  border: none;
  font-size: 0.8em;
  width: 100%;
  padding: 5%;
  margin: 2%;
  border-bottom: 0.5px solid var(--formColorBlue);
  &:focus,
  &:active {
    outline: none;
  }
`;

export default InputMobile;
