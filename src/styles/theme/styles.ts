import { extendTheme } from "@chakra-ui/react";

export const MainTheme = extendTheme({
  config: {
    initialColorMode: "quizMain",
    useSystemColorMode: false,
  },

  colors: {
    primary: "#000000",
    secondary: "#FFFFFF",
    accent: "#fcc822", // JS yellow
    background: "#d1d1d1",
    wrongColor: "#dc143c",
    correctColor: "#008080",
    Quiz: {
      100: "#fcc822",
      200: "#fcc822",
      500: "#fcc822",
      600: "#fcc822",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif;",
  },
  components: {},
});

export const ReactTheme = extendTheme(
  {
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#61dafb", // React Blue
      background: "#d1d1d1",
      wrongColor: "#dc143c",
      correctColor: "#008080",
    },
  },
  MainTheme
);

export const NodeTheme = extendTheme(
  {
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#68a063", // Node green
      background: "#d1d1d1",
      wrongColor: "#dc143c",
      correctColor: "#008080",
    },
  },
  MainTheme
);
export const MongoDB = extendTheme(
  {
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#4DB33D", // Mongo green
      background: "#d1d1d1",
      wrongColor: "#dc143c",
      correctColor: "#008080",
    },
  },
  MainTheme
);
export const Mongoose = extendTheme(
  {
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#ff005d", // Mongoose red
      background: "#d1d1d1",
      wrongColor: "#dc143c",
      correctColor: "#008080",
    },
  },
  MainTheme
);

const Themes = {
  JavaScript: MainTheme,
  React: ReactTheme,
  NodeJS: NodeTheme,
  MongoDB: MongoDB,
  Mongoose: Mongoose,
};

export default Themes;
