import { ThemeProvider } from "@callstack/react-theme-provider";
import { PaperProvider } from "react-native-paper";

const lightTheme = {
  colors: {
    primary: "#000",
    accent: "#007AFF",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    onSurface: "#000000",
    text: "#000000",
    onText: "#FFFFFF",
  },
};

const darkTheme = {
  colors: {
    primary: "#000",
    accent: "#FF4081",
    background: "#000000",
    surface: "#1E1E1E",
    onSurface: "#FFFFFF",
    text: "#FFFFFF",
    onText: "#000000",
  },
};

export const themes = { light: lightTheme, dark: darkTheme };
