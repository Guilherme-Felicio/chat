import { Icon } from "../../interfaces/icon";

const ClosedEyeIcon = ({ width = 29.75, height = 27, ...props }: Icon) => {
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
          d="M20.6381 12.0846L13.1114 18.9155C12.1446 18.038 11.5496 16.8365 11.5496 15.5C11.5496 12.827 13.9295 10.6671 16.8748 10.6671C18.3474 10.6671 19.6713 11.2071 20.6381 12.0846Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.5323 7.08947C22.9292 5.30747 19.9542 4.33547 16.8751 4.33547C11.6241 4.33547 6.73026 7.14347 3.32389 12.0035C1.98514 13.907 1.98514 17.1065 3.32389 19.01C4.49901 20.684 5.86751 22.1285 7.35501 23.2895"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5496 25.6656C13.2453 26.3136 15.0451 26.6646 16.8748 26.6646C22.1256 26.6646 27.0195 23.8566 30.4259 18.9966C31.7646 17.0931 31.7646 13.8936 30.4259 11.9901C29.935 11.2881 29.3995 10.6266 28.8491 10.0056"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.0959 16.445C21.7091 18.3485 19.9985 19.901 17.9011 20.252"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1116 18.9155L2 29"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.7501 2L20.6384 12.0845"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  );
};

export default ClosedEyeIcon;
