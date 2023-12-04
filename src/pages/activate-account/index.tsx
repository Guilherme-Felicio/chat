import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginApi from "../../api/login-api/loginApi";
import image from "../../assets/images/create-an-account.svg";

const ActivateAccount = () => {
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  async function actvateAccount() {
    try {
      if (!id) return;
      const response = await LoginApi.activateAccount(id);

      if (response.status === 200) {
        return setIsValidated(true);
      }
    } catch (e) {
      if (!axios.isAxiosError(e)) return console.error(e);

      if (e.status === 404) {
        setIsValidated(false);
      }
      if (e.status === 500) {
        toast.error(
          "An error has occoured. It was not possible to actvate the account"
        );
      }
    }
  }

  useEffect(() => {
    actvateAccount();
  }, []);

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
      <div className="flex flex-col items-center min-h-screen justify-center">
        <div className="max-w-[80%] text-center">
          {!isValidated ? (
            <>
              <h2 className="text-dark-green font-bold text-2xl mb-2">
                Invalid link
              </h2>
              <p>
                We regret to inform you that the provided account activation
                link is invalid. It seems there was an error in the process or
                the link has expired.
              </p>
              <Link
                to="/"
                className="underline underline-offset-2 text-dark-green"
              >
                Go to Login page
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-dark-green font-bold text-2xl mb-2">
                Account activated successfully
              </h2>
              <p>
                We are delighted to inform you that your account has been
                successfully activated! Thank you for choosing Chat. You can now
                log in and enjoy a good conversation with your friends.
              </p>
              <Link
                to="/"
                className="underline underline-offset-2 text-dark-green"
              >
                Go to Login page
              </Link>
            </>
          )}
        </div>
      </div>
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

export default ActivateAccount;
