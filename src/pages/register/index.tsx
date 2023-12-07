import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginApi from "../../api/login-api/loginApi";
import image from "../../assets/images/create-an-account.svg";
import Button from "../../components/button";
import GlobalLoading from "../../components/global-loading";
import Input from "../../components/input";
import { signUpSchemaValidation } from "./schema";

export type FormValues = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const SignUp = () => {
  const [wasEmailSend, setWasEmailSend] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    mode: "onBlur",
    resolver: yupResolver(signUpSchemaValidation),
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    const { name, email, password, repeatPassword } = values;
    setLoading(true);
    try {
      const response = await LoginApi.createUser({
        name,
        email,
        password,
        confirmPassword: repeatPassword,
      });

      if (response.status === 200) {
        setWasEmailSend(true);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          toast.error("Account Already Exists");
          return;
        }

        if (error.response?.status === 500) {
          toast.error("Account Creation Failed");
          return;
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center flex-col-reverse md:flex-row md:columns-2 md:p-2.5">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {loading && <GlobalLoading />}

      {wasEmailSend ? (
        <div className="flex flex-col items-center min-h-[100%] justify-center">
          <div className="max-w-[80%] text-center">
            <h2 className="text-dark-green font-bold text-2xl mb-2">
              {t("register_page.email_sent_title")}
            </h2>
            <p>{t("register_page.email_sent_paragraph")}</p>
            <Link
              to="/"
              className="underline underline-offset-2 text-dark-green"
            >
              {t("register_page.go_back")}
            </Link>
          </div>
        </div>
      ) : (
        <form
          className="flex items-center mb-20 justify-center md:h-full md:w-full md:m-0 md:min-h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-4/5 ">
            <h1 className="text-5xl font-medium text-center lg:text-left">
              {t("register_page.title")}
            </h1>
            <p className="text-2xl font-normal text-gray mt-2 mb-7">
              {t("register_page.subtitle")}
            </p>
            <label htmlFor="name" className="w-full">
              {t("register_page.name")}
            </label>
            <Input
              type="text"
              {...register("name")}
              className="w-full mt-2 mb-6"
              error={errors.name?.message}
            />

            <label htmlFor="email" className="w-full">
              {t("register_page.email")}
            </label>
            <Input
              type="email"
              {...register("email")}
              className="w-full mt-2 mb-6"
              error={errors.email?.message}
            />

            <label htmlFor="password" className="w-full">
              {t("register_page.password")}
            </label>
            <Input
              type="password"
              {...register("password")}
              className="w-full mt-2 mb-6"
              error={errors.password?.message}
            />

            <label htmlFor="repeatPassword" className="w-full">
              {t("register_page.confirm_password")}
            </label>
            <Input
              type="password"
              {...register("repeatPassword")}
              className="w-full mt-2"
              error={errors.repeatPassword?.message}
            />

            <Button className="mt-8" type="submit">
              {t("register_page.sign_up")}
            </Button>
            <Link
              to="/"
              className="underline underline-offset-2 text-dark-green text-center block text-xs mt-2"
            >
              {t("register_page.go_back")}
            </Link>
          </div>
        </form>
      )}

      <div className="bg-dark-green flex mt-20 items-center justify-center h-40 w-40 rounded-6xl mb-10 md:h-full md:min-h-screen md:w-full md:m-0">
        <img
          src={image}
          alt="person texting"
          className="h-full w-full md:max-h-full md:w-auto "
        />
      </div>
    </section>
  );
};

export default SignUp;
