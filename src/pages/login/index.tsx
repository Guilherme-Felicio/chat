import axios from "axios";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginApi from "../../api/login-api/loginApi";
import image from "../../assets/images/login-styleset.png";
import Button from "../../components/button";
import Divider from "../../components/divider";
import GlobalLoading from "../../components/global-loading";
import GoogleButton from "../../components/google-button";
import Input from "../../components/input";
import LanguageSelect from "../../components/language-select";

export type ILoginValues = {
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<ILoginValues>();

  const { t } = useTranslation();

  const login = useCallback(
    async (values: ILoginValues) => {
      setLoading(true);
      try {
        const resp = await LoginApi.login(values.email, values.password);
        if (!resp.data.token) return;
        localStorage.setItem("chat_token", resp.data.token);
        navigate("/home");
      } catch (error) {
        if (!axios.isAxiosError(error)) return console.error(error);

        if (error.response?.status === 401) {
          setError("root", {
            type: "401",
            message: "Invalid email or password",
          });
          toast.error("Invalid email or password");
        }
      } finally {
        setLoading(false);
      }
    },
    [navigate, setError]
  );

  return (
    <>
      <div className="absolute left-2 top-3">
        <LanguageSelect />
      </div>
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

        <form
          className="flex items-center mb-20 mt-10 justify-center md:h-full md:w-full md:mb-0 md:min-h-full"
          onSubmit={handleSubmit(login)}
        >
          <div className="w-4/5 ">
            <h1 className="text-5xl font-medium text-center lg:text-left">
              {t("login_page.title")}🤝
            </h1>
            <p className="text-2xl font-normal text-gray mt-2 mb-7">
              {t("login_page.subtitle")}
            </p>
            <label htmlFor="email" className="w-full">
              {t("login_page.email")}
            </label>
            <Input
              type="email"
              id="email"
              className="w-full mt-2 mb-6"
              {...register("email")}
              error={errors.root?.message}
              disableErrorText
            />

            <label htmlFor="password" className="w-full">
              {t("login_page.password")}
            </label>
            <Input
              type="password"
              id="password"
              className="w-full mt-2"
              {...register("password")}
              error={errors.root?.message}
              disableErrorText
            />

            <Button className="mt-8" type="submit">
              {t("login_page.sign_in")}
            </Button>
            <span
              className="pt-1 text-gray text-xs hover:text-dark-green hover:cursor-pointer"
              onClick={() => navigate("/sign-up/")}
            >
              {t("login_page.sign_up")}
            </span>

            <Divider className="my-6" />

            <GoogleButton type="button">{t("login_page.google")}</GoogleButton>
          </div>
        </form>

        <div className="bg-dark-green flex mt-20 items-center justify-center h-40 w-40 rounded-6xl mb-10 md:h-full md:min-h-screen md:w-full md:m-0">
          <img
            src={image}
            alt="person texting"
            className="h-full w-full md:max-h-full md:w-auto "
          />
        </div>
      </section>
    </>
  );
}
export default Login;
