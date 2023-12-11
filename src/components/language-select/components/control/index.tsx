import { ControlProps } from "react-select";
import { ILanguageOptions } from "../..";

const LanguageControl = (props: ControlProps<ILanguageOptions>) => {
  return (
    <div
      ref={props.innerRef}
      {...props.innerProps}
      {...props}
      className="flex hover:cursor-pointer bg-transparent"
    />
  );
};

export default LanguageControl;
