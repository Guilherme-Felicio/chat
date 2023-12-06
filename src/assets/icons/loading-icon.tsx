import { Icon } from "../../interfaces/icon";

const LoadingIcon = ({ width = 30, height = 30, ...props }: Icon) => {
  return (
    <span {...props}>
      <a
        href="https://www.flaticon.com/free-icon/chat_134808?term=chat&page=1&position=12&origin=tag&related_id=134808"
        className="hover:cursor-default"
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#63A69E"
            stroke="none"
          >
            <path
              d="M1583 4895 c-176 -49 -310 -177 -365 -344 -18 -58 -21 -97 -26 -323
l-4 -256 -382 -4 c-358 -4 -385 -6 -447 -26 -127 -42 -244 -141 -301 -254 -60
-118 -58 -85 -58 -1127 0 -1054 -2 -1021 63 -1145 40 -75 134 -169 207 -206
108 -54 151 -60 464 -60 l286 0 0 -427 c0 -388 2 -431 18 -463 21 -43 58 -58
99 -41 18 7 195 194 447 471 l417 459 752 4 c718 3 754 4 807 23 177 64 297
184 344 346 9 31 16 72 16 91 0 20 4 38 8 41 5 3 100 -97 213 -221 112 -124
219 -238 237 -254 41 -37 84 -38 117 -4 l25 24 0 446 0 445 83 0 c243 0 447
160 502 392 23 97 22 1942 -1 2031 -45 175 -168 307 -339 365 l-70 23 -1530 5
c-1332 4 -1537 2 -1582 -11z m3138 -180 c104 -36 196 -141 219 -249 7 -35 10
-356 8 -1001 l-3 -950 -26 -56 c-34 -72 -96 -134 -168 -167 -50 -24 -71 -27
-203 -32 -212 -7 -192 37 -198 -424 l-5 -374 -205 226 -205 226 -5 820 c-6
802 -6 822 -27 876 -11 31 -31 76 -43 100 -32 62 -144 170 -210 202 -122 60
-78 58 -1227 58 l-1053 0 0 250 c0 226 2 254 20 304 37 98 129 178 237 206 24
6 589 8 1544 5 1311 -4 1511 -7 1550 -20z m-1216 -929 c102 -27 188 -103 224
-200 21 -57 21 -58 19 -1039 l-3 -982 -25 -49 c-33 -65 -88 -119 -152 -152
-47 -25 -68 -28 -198 -35 -80 -4 -433 -8 -786 -8 l-641 -1 -31 -22 c-17 -13
-185 -194 -374 -402 l-343 -380 -5 385 c-3 211 -7 385 -8 386 -25 25 -68 28
-402 33 l-355 5 -57 27 c-70 32 -133 96 -167 168 l-26 55 0 980 0 980 26 56
c36 76 90 133 157 166 55 27 63 28 262 33 113 4 797 7 1520 8 1073 1 1324 -1
1365 -12z"
            />
            <path
              d="M824 3110 c-55 -22 -70 -95 -29 -135 l24 -25 588 0 c467 1 592 3 605
14 29 21 41 65 27 98 -24 59 -16 58 -631 57 -310 0 -573 -4 -584 -9z"
            />
            <path
              d="M833 2603 c-30 -6 -63 -49 -63 -84 0 -15 11 -41 24 -56 l24 -28 1117
-3 c776 -2 1129 1 1156 8 32 9 44 18 55 46 12 29 12 39 0 68 -11 27 -23 37
-53 45 -37 11 -2208 14 -2260 4z"
            />
            <path
              d="M795 2065 c-32 -31 -32 -75 -1 -112 l24 -28 1119 -3 c798 -2 1129 0
1156 8 29 9 42 19 53 45 15 38 11 59 -19 93 l-20 22 -1144 0 -1144 0 -24 -25z"
            />
          </g>
        </svg>
      </a>
    </span>
  );
};

export default LoadingIcon;