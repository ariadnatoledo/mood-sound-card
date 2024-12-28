import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";

// const api = {
//   key: "67fc54d54aeffd93c65624f2c90222dc",
//   base: "https://api.openweathermap.org/data/2.5/",
// };


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
