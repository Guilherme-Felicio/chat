import Button from "../../components/button";
import Divider from "../../components/divider";
import GoogleButton from "../../components/google-button";
import Input from "../../components/input";
import image from "../../images/login-styleset.png";

function Login() {
  return (
    <section className="h-screen flex items-center flex-col-reverse md:flex-row md:columns-2 md:p-2.5">
      <form className="flex items-center justify-center md:h-full md:w-full">
        <div className="w-4/5 ">
          <h1 className="text-5xl font-medium text-center lg:text-left">
            Let’s chat 🤝
          </h1>
          <p className="text-2xl font-normal text-gray mt-2 mb-7">
            Sign in to start to chat with your friends
          </p>
          <label htmlFor="email" className="w-full">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            className="w-full mt-2 mb-6"
          />

          <label htmlFor="password" className="w-full">
            Password
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            className="w-full mt-2"
          />

          <Button className="mt-8">Sign in</Button>
          <Divider className="my-6" />

          <GoogleButton>Sign In with google</GoogleButton>
        </div>
      </form>

      <div className="bg-dark-green flex items-center justify-center h-40 w-40 rounded-6xl mb-10 md:h-full md:w-full md:m-0">
        <img
          src={image}
          alt="person texting"
          className="h-full w-full md:max-h-full md:w-auto"
        />
      </div>
    </section>
  );
}
export default Login;
