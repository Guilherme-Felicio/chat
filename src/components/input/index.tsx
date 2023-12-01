import React, { InputHTMLAttributes, useState } from "react";
import ErrorText from "../ErrorText";
import * as S from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  LeftIcon?: JSX.Element;
  RightIcon?: JSX.Element;
  error?: string;
}

const Input = React.forwardRef(
  ({ className, error, style, type, ...rest }: Props, ref: any) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <S.InputContainer className={`${className} `} error={error} style={style}>
        <input
          className="border-2 border-solid border-dark-green h-11"
          {...rest}
          ref={ref}
          type={type !== "password" ? type : showPassword ? "text" : "password"}
        />

        {type === "password" && showPassword && (
          <S.PasswordIcon onClick={() => setShowPassword(!showPassword)} />
        )}

        {type === "password" && !showPassword && (
          <S.HidePassword onClick={() => setShowPassword(!showPassword)} />
        )}
        {error && <ErrorText>{error}</ErrorText>}
      </S.InputContainer>
    );
  }
);

export default Input;
