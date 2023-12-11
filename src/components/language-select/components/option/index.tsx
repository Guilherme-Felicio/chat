import { OptionProps } from "react-select";
import { ILanguageOptions } from "../..";

const LanguageOption = (props: OptionProps<ILanguageOptions>) => {
  return (
    <div
      ref={props.innerRef}
      {...props.innerProps}
      className={`flex items-center h-8 hover:cursor-pointer pl-2 ${
        props.isSelected && "bg-slate-200"
      }`}
    >
      <span className="block w-4 mr-1">{props.data.icon()}</span>
      <span>{props.data.label}</span>
    </div>
  );
};

export default LanguageOption;
