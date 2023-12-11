import { IndicatorsContainerProps, components } from "react-select";
import { ILanguageOptions } from "../..";

const LanguageIndicator = (
  props: IndicatorsContainerProps<ILanguageOptions>
) => {
  return (
    <components.IndicatorsContainer {...props} className="p-0 text-green" />
  );
};

export default LanguageIndicator;
