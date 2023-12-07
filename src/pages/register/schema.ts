import i18next from "i18next";
import * as Yup from "yup";
import { FormValues } from ".";

export const signUpSchemaValidation: Yup.ObjectSchema<FormValues> =
  Yup.object().shape({
    name: Yup.string().required(i18next.t("errors.required")),
    email: Yup.string().email().required(i18next.t("errors.required")),
    password: Yup.string()
      .min(8, i18next.t("errors.required"))
      .matches(/[a-z]/, i18next.t("errors.password_rule"))
      .matches(/[A-Z]/, i18next.t("errors.password_rule"))
      .required(),
    repeatPassword: Yup.string()
      .required(i18next.t("errors.password_rule"))
      .test(
        "passwords-match",
        i18next.t("errors.confirm_password"),
        function (value) {
          return value === this.parent.password;
        }
      ),
  });
