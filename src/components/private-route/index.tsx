import { jwtDecode } from "jwt-decode";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context";
import { IUser } from "../../interfaces/user";
import GlobalLoading from "../global-loading";

const PrivateRoute = () => {
  const { isLoading, setIsLoading, setUser, user } = useAuth();
  const navigate = useNavigate();

  const listenToastChanges = useCallback(() => {
    toast.onChange((payload) => {
      if (payload.status === "removed") {
        setIsLoading(false);
        navigate("/");
      }
    });
  }, [navigate, setIsLoading]);

  const getAuth = useCallback(() => {
    setIsLoading(true);
    const token = localStorage.getItem("chat_token");
    if (token) {
      const { id, email, name } = jwtDecode<IUser>(token);
      setUser({ id, email, name });
      setIsLoading(false);
      return;
    }
    return toast.error(
      "You must be logged in to access this page. Please log in again.",
      {
        toastId: "no_access",
      }
    );
  }, [setIsLoading, setUser]);

  useEffect(() => {
    listenToastChanges();
    getAuth();
  }, [getAuth, listenToastChanges]);

  if (isLoading && !user) {
    return (
      <div>
        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          newestOnTop={false}
          autoClose={3000}
          pauseOnFocusLoss
          draggable
          theme="colored"
        />
        <GlobalLoading />;
      </div>
    );
  }

  return <div>Parabens, você acessou o chat</div>;
};

export default PrivateRoute;
