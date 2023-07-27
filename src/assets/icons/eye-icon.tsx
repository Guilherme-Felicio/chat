import { Icon } from "../interfaces/icon";

const EyeIcon = ({ width = 29.75, height = 24, ...props }: Icon) => {
  return (
    <i {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 34 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.315 14.0073C22.315 16.8786 19.883 19.1988 16.8734 19.1988C13.8638 19.1988 11.4319 16.8786 11.4319 14.0073C11.4319 11.136 13.8638 8.8158 16.8734 8.8158C19.883 8.8158 22.315 11.136 22.315 14.0073Z"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.8733 26C22.2389 26 27.2397 22.9837 30.7205 17.7632C32.0885 15.7184 32.0885 12.2816 30.7205 10.2368C27.2397 5.01631 22.2389 2 16.8733 2C11.5076 2 6.5068 5.01631 3.026 10.2368C1.658 12.2816 1.658 15.7184 3.026 17.7632C6.5068 22.9837 11.5076 26 16.8733 26Z"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </i>
  );
};

export default EyeIcon;
