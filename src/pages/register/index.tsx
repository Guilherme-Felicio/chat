import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/button";
import Input from "../../components/input";
import image from "../../assets/images/create-an-account.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchemaValidation } from "./schema";

type FormValues = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const SignUp = () => {
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

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log(values);
  };

  return (
    <section className="min-h-screen flex items-center flex-col-reverse md:flex-row md:columns-2 md:p-2.5">
      <form
        className="flex items-center mb-20 justify-center md:h-full md:w-full md:m-0 md:min-h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-4/5 ">
          <h1 className="text-5xl font-medium text-center lg:text-left">
            Create an account
          </h1>
          <p className="text-2xl font-normal text-gray mt-2 mb-7">
            Start to chat with your friends now!
          </p>
          <label htmlFor="name" className="w-full">
            Name
          </label>
          <Input
            type="text"
            {...register("name")}
            className="w-full mt-2 mb-6"
            error={errors.name?.message}
          />

          <label htmlFor="email" className="w-full">
            Email
          </label>
          <Input
            type="email"
            {...register("email")}
            className="w-full mt-2 mb-6"
            error={errors.email?.message}
          />

          <label htmlFor="password" className="w-full">
            Password
          </label>
          <Input
            type="password"
            {...register("password")}
            className="w-full mt-2 mb-6"
            error={errors.password?.message}
          />

          <label htmlFor="repeatPassword" className="w-full">
            Confirm the password
          </label>
          <Input
            type="password"
            {...register("repeatPassword")}
            className="w-full mt-2"
            error={errors.repeatPassword?.message}
          />

          <Button className="mt-8" type="submit">
            Sign Up
          </Button>
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
  );
};

export default SignUp;
