import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import HowItWorks from "./Pages/HowItWorks";
import Features from "./Pages/Features";
import About from "./Pages/About";
import Welcome from "./Pages/Welcome";
import { ChakraProvider } from "@chakra-ui/react";
import { MainTheme } from "./styles/theme/styles";
import QuizPage from "./Pages/QuizPage";

function App() {
  return (
    <ChakraProvider theme={MainTheme}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Welcome />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="features" element={<Features />} />
          <Route path="about" element={<About />} />
          <Route path="category/:id" element={<QuizPage />} />
          <Route path="*" element={<Welcome />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
