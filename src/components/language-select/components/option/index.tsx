import { OptionProps, components } from "react-select";
import { ILanguageOptions } from "../..";

const LanguageOption = (props: OptionProps<ILanguageOptions>) => {
  return (
    <components.Option {...props}>
      <div
        className={`flex items-center h-8 hover:cursor-pointer pl-2 ${
          props.isSelected && "bg-slate-200"
        } text-black`}
      >
        <span className="block w-4 mr-1">{props.data.icon()}</span>
        <span>{props.data.label}</span>
      </div>
    </components.Option>
  );
};

export default LanguageOption;
