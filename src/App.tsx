import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MainTheme } from "./styles/theme/styles";
// import Loader from "./components/UI/Loader/Loader";
const MainLayout = lazy(
  () => import("./components/Layouts/MainLayout/MainLayout")
);
const HomePage = lazy(() => import("./Pages/HomePage"));
const QuizPage = lazy(() => import("./Pages/QuizPage"));
const HowItWorks = lazy(() => import("./Pages/HowItWorksPage"));
const About = lazy(() => import("./Pages/AboutPage"));

function App() {
  return (
    <ChakraProvider theme={MainTheme}>
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="about" element={<About />} />
          <Route path="quiz-page" element={<QuizPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
      {/* </Suspense> */}
    </ChakraProvider>
  );
}

export default App;
