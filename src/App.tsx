import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Themes from "./styles/theme/styles";
import Loader from "./components/UI/Loader/Loader";
import { useTheme } from "./hooks/useTheme";
import PrivateRoute from "./routes/PrivateRoute";
import AuthPage from "./Pages/AuthPage";
import PublicRoute from "./routes/PublicRoute";
const MainLayout = lazy(
  () => import("./components/Layouts/MainLayout/MainLayout")
);
const HomePage = lazy(() => import("./Pages/HomePage"));
const QuizPage = lazy(() => import("./Pages/QuizPage"));
const HowItWorks = lazy(() => import("./Pages/HowItWorksPage"));
const About = lazy(() => import("./Pages/AboutPage"));

function App() {
  const { theme } = useTheme();

  return (
    <ChakraProvider theme={Themes[theme]}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/auth"
            element={
              <PublicRoute redirectTo="/">
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/auth">
                <MainLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="about" element={<About />} />

            <Route path="*" element={<HomePage />} />
          </Route>
          <Route path="/quiz-page" element={<QuizPage />} />
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
