import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button = ({
  children,
  className,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...props}
      className={`w-full font-semibold bg-dark-green rounded-lg text-white flex items-center justify-center h-11 hover:bg-green ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
