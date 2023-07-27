const ErrorText = ({ children }: { children: string }) => {
  return <span className="text-red-500">{children}</span>;
};

export default ErrorText;
