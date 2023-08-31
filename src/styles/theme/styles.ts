import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    quizYellow: {
      50: "#FCC822",
      500: "#FCC822",
      600: "#FCC822",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif;",
  },
  components: {},
});

export default theme;
