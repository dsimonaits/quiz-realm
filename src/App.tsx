import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import HowItWorks from "./Pages/HowItWorks";
import Features from "./Pages/Features";
import About from "./Pages/About";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Welcome />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="features" element={<Features />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  );
}

export default App;
