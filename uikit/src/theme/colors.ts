import { Colors } from "./types";

export const baseColors = {
  failure: "#F33F67",
  primary: "#6FA462",
  primaryBright: "#53DEE9",
  primaryDark: "#6565F1",
  secondary: "#6FA462",
  success: "#29DCA2",
  warning: "#FFB237",
};

export const brandColors = {
  huobi: "#088DCA",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F9F9FF",
  backgroundDisabled: "#E5EAEF",
  contrast: "#16181D",
  invertedContrast: "#F7F7FD",
  input: "#F1F1FB",
  inputSecondary: "#CACAF1",
  tertiary: "#EEEEF5",
  text: "#262636",
  textDisabled: "#BDC2C4",
  textSubtle: "#212529",
  borderColor: "#E9EAEB",
  card: "#FEFEFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #F6F6FF 0%,#DDDDFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6FA462",
  background: "#181822",
  backgroundDisabled: "#454756",
  contrast: "#FEFEFF",
  invertedContrast: "#1F212B",
  input: "#303240",
  inputSecondary: "#505096",
  primaryDark: "#6565F1",
  tertiary: "#2C2F3B",
  text: "#F2F2FF",
  textDisabled: "#606271",
  textSubtle: "#6FA462",
  borderColor: "#33373C",
  card: "#232430",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #33333F 0%, #44447A 100%)",
  },
};
