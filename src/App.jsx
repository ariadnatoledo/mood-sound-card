import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import GamePage from "./pages/GamePage/GamePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage/ProjectDetailsPage";  
import "./App.scss";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetailsPage />} /> 
        <Route path="/portfolio/game" element={<GamePage />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

