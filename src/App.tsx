import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import HowItWorks from "./Pages/HowItWorksPage";
import Features from "./Pages/FeaturesPage";
import About from "./Pages/AboutPage";
import { ChakraProvider } from "@chakra-ui/react";
import { MainTheme } from "./styles/theme/styles";
import { QuizPage } from "./Pages/QuizPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <ChakraProvider theme={MainTheme}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="features" element={<Features />} />
          <Route path="about" element={<About />} />
          <Route path="quiz-page" element={<QuizPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
