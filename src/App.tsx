import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Themes from "./styles/theme/styles";
import Loader from "./components/UI/Loader/Loader";
import { useTheme } from "./hooks/useTheme";
import PrivateRoute from "./routes/PrivateRoute";
import AuthPage from "./Pages/AuthPage";
import PublicRoute from "./routes/PublicRoute";
import UserStore from "./store/UserStore";
import { observer } from "mobx-react-lite";
import DashboardPage from "./Pages/DashboardPage";
import ConnectingToDB from "./components/UI/ConnectingToDB/ConnectingToDB";
const MainLayout = lazy(
  () => import("./components/Layouts/MainLayout/MainLayout")
);
const HomePage = lazy(() => import("./Pages/HomePage"));
const QuizPage = lazy(() => import("./Pages/QuizPage"));
const HowItWorks = lazy(() => import("./Pages/HowItWorksPage"));
const About = lazy(() => import("./Pages/AboutPage"));

const App = observer(() => {
  const { theme } = useTheme();
  const [connectingToDB, setConnectingToDB] = useState(false);

  const { isAuthenticated, isLoading } = UserStore;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      isLoading && setConnectingToDB(true);
    }, 5000);

    if (!isLoading) {
      clearTimeout(timeoutId);
      setConnectingToDB(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoading]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      UserStore.currentUser();
    }
  }, []);

  return (
    <ChakraProvider theme={Themes[theme]}>
      {isLoading && connectingToDB ? (
        <ConnectingToDB />
      ) : (
        isLoading && <Loader />
      )}
      {!isLoading && !connectingToDB ? (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/auth"
              element={
                <PublicRoute isAuth={isAuthenticated} redirectTo="/">
                  <AuthPage />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute isAuth={isAuthenticated} redirectTo="/auth">
                  <MainLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<HomePage />} />
              <Route path="how-it-works" element={<HowItWorks />} />
              <Route path="about" element={<About />} />
              <Route path="dashboard" element={<DashboardPage />} />

              <Route path="*" element={<HomePage />} />
            </Route>
            <Route path="/quiz-page" element={<QuizPage />} />
          </Routes>
        </Suspense>
      ) : null}
    </ChakraProvider>
  );
});

export default App;
