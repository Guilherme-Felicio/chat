import { InputHTMLAttributes } from "react";
import * as S from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  LeftIcon?: JSX.Element;
  RightIcon?: JSX.Element;
}

const Input = ({ className }: Props) => {
  return (
    <S.Input
      className={`border-2 border-solid border-gray-300 h-11  ${className} `}
    />
  );
};

export default Input;
