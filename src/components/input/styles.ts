import { css, styled } from "styled-components";
import ClosedEyeIcon from "../../assets/icons/closed-eye-icon";
import EyeIcon from "../../assets/icons/eye-icon";
import { theme } from "../../project-styles";

type IInput = {
  error?: string;
};

const InputContainer = styled.div<IInput>`
  display: flex;
  flex-direction: column;
  position: relative;

  input {
    text-indent: 1rem;
    border-radius: 0.5rem;
    width: 100%;
    ${({ error }) =>
      error &&
      css`
        border: ${theme.colors.red} 2px solid;
      `};

    &:focus-visible {
      border: none;
      outline-style: solid;
      outline-width: 2px;
      outline-color: ${({ error }) => error && theme.colors.red};
      outline-color: ${({ error }) => !error && theme.colors.green};
    }
  }
  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
  }
`;

const PasswordIcon = styled(EyeIcon)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${theme.colors.darkGreen};

  &:hover {
    color: ${theme.colors.green};
  }
`;

const HidePassword = styled(ClosedEyeIcon)`
  cursor: pointer;
  position: absolute;
  top: 8.5px;
  right: 10px;
  color: ${theme.colors.darkGreen};

  &:hover {
    color: ${theme.colors.green};
  }
`;

export { HidePassword, InputContainer, PasswordIcon };
