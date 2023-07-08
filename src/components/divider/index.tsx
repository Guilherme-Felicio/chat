import { DetailedHTMLProps, HTMLAttributes } from "react";

const Divider = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`flex items-center justify-between  ${className}`}
    >
      <hr className="bg-gray w-full h-0.5 w-5/12" />
      <span>or</span>
      <hr className="bg-gray w-full h-0.5 w-5/12" />
    </div>
  );
};

export default Divider;
