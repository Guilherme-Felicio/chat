import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import GoogleIcon from "../../assets/icons/google-icon";

const GoogleButton = ({
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
      className={`w-full border border-gray-400  font-semibold bg-white rounded-lg text-gray flex items-center justify-center h-11 ${className}`}
    >
      <GoogleIcon className="mr-2" />
      {children}
    </button>
  );
};

export default GoogleButton;
