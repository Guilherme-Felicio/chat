import { useTranslation } from "react-i18next";
import ReactSelect, { SingleValue } from "react-select";
import BrazilFlag from "../../assets/icons/brazil-flag";
import UsFlag from "../../assets/icons/us-flag";
import { theme } from "../../project-styles";
import LanguageOption from "./components/option";
import LanguageSigleValue from "./components/single-value";

export type ILanguageOptions = {
  value: string;
  label: string;
  icon: () => JSX.Element;
};

const LanguageSelect = () => {
  const { i18n, t } = useTranslation();
  const LANGUAGE_OPTIONS: ILanguageOptions[] = [
    {
      value: "pt-BR",
      label: t("languages.pt"),
      icon: BrazilFlag,
    },
    {
      value: "en",
      label: t("languages.us"),
      icon: UsFlag,
    },
  ];
  return (
    <div>
      <ReactSelect
        options={LANGUAGE_OPTIONS}
        classNamePrefix="select-language"
        isSearchable={false}
        value={LANGUAGE_OPTIONS.filter(
          (value) => value.value === i18n?.language
        )}
        styles={{
          indicatorSeparator: (baseStyles, state) => ({
            ...baseStyles,
            display: "none",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            padding: "0",
          }),
          valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0,
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0,
            color: "black",
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            width: "8rem",
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            display: "flex",
            ":hover": {
              cursor: "pointer",
              borderColor: theme.colors.green,
              boxShadow: `0 0 0 1px ${theme.colors.green}`,
            },
            background: "transparent",
            border: state.isFocused ? theme.colors.green : "none",
            boxShadow: state.isFocused
              ? `0 0 0 1px ${theme.colors.green}`
              : "none",
          }),
        }}
        onChange={(newValue) => {
          const country = newValue as SingleValue<ILanguageOptions>;
          i18n.changeLanguage(country?.value || "us");
        }}
        components={{
          Option: LanguageOption,
          SingleValue: LanguageSigleValue,
        }}
      />
    </div>
  );
};

export default LanguageSelect;
