import { SingleValueProps, components } from "react-select";
import { ILanguageOptions } from "../..";
import TranslateIcon from "../../../../assets/icons/translate-icon";

const LanguageSigleValue = (props: SingleValueProps<ILanguageOptions>) => {
  return (
    <components.SingleValue {...props}>
      <div className="flex items-center">
        <span className="mr-2">
          <TranslateIcon />
        </span>
        <span>{props.data.label}</span>
      </div>
    </components.SingleValue>
  );
};

export default LanguageSigleValue;
