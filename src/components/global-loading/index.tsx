import LoadingIcon from "../../assets/icons/loading-icon";

const GlobalLoading = ({ opacity }: { opacity: number }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-[${opacity}] bg-white z-50`}
    >
      <div className=" p-8 rounded-lg text-center flex justify-center flex-col items-center">
        <LoadingIcon className="animate-bounce" width={50} height={50} />
        <p className="text-2xl font-bold text-dark-green">
          Loading
          <span className="animate-fade-in" style={{ animationDelay: "0.0s" }}>
            .
          </span>
          <span className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            .
          </span>
          <span className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            .
          </span>
        </p>
      </div>
    </div>
  );
};

export default GlobalLoading;