import { Icon } from "../interfaces/icon";

const GoogleIcon = ({ width = 24, height = 25, ...props }: Icon) => {
  return (
    <span {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" transform="translate(0.5)" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.54 12.2614C23.54 11.4459 23.4668 10.6618 23.3309 9.90909H12.5V14.3575H18.6891C18.4225 15.795 17.6123 17.013 16.3943 17.8284V20.7139H20.1109C22.2855 18.7118 23.54 15.7636 23.54 12.2614Z"
          fill="#4285F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4999 23.4998C15.6049 23.4998 18.2081 22.4701 20.1108 20.7137L16.3943 17.8282C15.3645 18.5182 14.0472 18.926 12.4999 18.926C9.50471 18.926 6.96948 16.903 6.06516 14.1848H2.22311V17.1644C4.11539 20.9228 8.00448 23.4998 12.4999 23.4998Z"
          fill="#34A853"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.06523 14.1851C5.83523 13.4951 5.70455 12.758 5.70455 12.0001C5.70455 11.2421 5.83523 10.5051 6.06523 9.81506V6.83551H2.22318C1.44432 8.38801 1 10.1444 1 12.0001C1 13.8557 1.44432 15.6121 2.22318 17.1646L6.06523 14.1851Z"
          fill="#FBBC05"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4999 5.07386C14.1883 5.07386 15.7043 5.65409 16.8961 6.79364L20.1945 3.49523C18.2029 1.63955 15.5997 0.5 12.4999 0.5C8.00448 0.5 4.11539 3.07705 2.22311 6.83545L6.06516 9.815C6.96948 7.09682 9.50471 5.07386 12.4999 5.07386Z"
          fill="#EA4335"
        />
      </svg>
    </span>
  );
};

export default GoogleIcon;