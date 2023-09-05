import { extendTheme } from "@chakra-ui/react";

export const MainTheme = extendTheme({
  colors: {
    quizMain: {
      50: "#FCC822",
      100: "#FCC822",
      500: "#FCC822",
      600: "#FCC822",
    },
    quizReact: {
      50: "#61DBFB",
      100: "#61DBFB",
      500: "#61DBFB",
      600: "#61DBFB",
    },
    quizNode: {
      50: "#679267",
      100: "#679267",
      500: "#679267",
      600: "#679267",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif;",
  },
  components: {},
});

// export const ReactTheme = extendTheme({
//   colors: {
//     quizMain: {
//       50: "#61DBFB",
//       100: "#61DBFB",
//       500: "#61DBFB",
//       600: "#61DBFB",
//     },
//   },
//   fonts: {
//     heading: "Poppins, sans-serif",
//     body: "Roboto, sans-serif;",
//   },
//   components: {},
// });
