import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1FC7D4",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#EAEAEA",
  backgroundDisabled: "#EAEAEA",
  contrast: "#404040",
  invertedContrast: "#FFFFFF",
  input: "#F3F3F3",
  inputSecondary: "#CBCBCB",
  tertiary: "#F7F7F7",
  text: "#000000",
  textDisabled: "#000000",
  textSubtle: "#000000",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6D6D6D",
  background: "#3B3B3B",
  backgroundDisabled: "#3B3B3B",
  contrast: "#FFFFFF",
  invertedContrast: "#000000",
  input: "#BDBDBD",
  inputSecondary: "#B2B2B2",
  primaryDark: "#8A8A8A",
  tertiary: "#484848",
  text: "#DDDDDD",
  textDisabled: "#989898",
  textSubtle: "#DDDDDD",
  borderColor: "#666666",
  card: "#6D6D6D",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
