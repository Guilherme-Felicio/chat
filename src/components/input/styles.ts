import { styled } from "styled-components";
import { theme } from "../../project-styles";

const Input = styled.input`
  text-indent: 1.5rem;
  border-radius: 0.5rem;

  &:focus-visible {
    outline-color: ${theme.colors.green};
    border: none;
    outline-style: solid;
    outline-width: 2px;
  }
`;

export { Input };
