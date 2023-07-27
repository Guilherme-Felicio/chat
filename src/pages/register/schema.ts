import * as Yup from "yup";

export const signUpSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Required field"),
  email: Yup.string().email().required("Required field"),
  password: Yup.string()
    .min(8, "Required field")
    .matches(
      /[a-z]/,
      "The password must have 8 characters, with at least one uppercase and one lowercase letter."
    )
    .matches(
      /[A-Z]/,
      "The password must have 8 characters, with at least one uppercase and one lowercase letter."
    ),
  repeatPassword: Yup.string()
    .required(
      "The password must have 8 characters, with at least one uppercase and one lowercase letter."
    )
    .test(
      "passwords-match",
      'A "The entered value and the password field are not the same."',
      function (value) {
        return value === this.parent.password;
      }
    ),
});
