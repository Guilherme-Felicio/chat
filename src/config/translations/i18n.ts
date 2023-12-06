import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import pt from "./pt";

const resources = {
  en: {
    translation: en,
  },
  "pt-BR": {
    translation: pt,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
