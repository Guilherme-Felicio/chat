interface Colors {
  darkGreen: string;
  green: string;
  gray: string;
}

interface Theme {
  colors: Colors;
}

export const theme: Theme = {
  colors: {
    darkGreen: "#63A69E",
    green: "#82D9CF",
    gray: "#6C757D",
  },
};
