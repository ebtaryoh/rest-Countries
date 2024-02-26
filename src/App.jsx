import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import CountryDetail from "./pages/countryDetail/CountryDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/error404/Error404";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [lightMode, setLightMode] = useState(() => {
    const userMode = JSON.parse(localStorage.getItem("userMode"));
    return userMode || false;
  });

  useEffect(() => {
    const root = document.querySelector("#root");
    if (lightMode) {
      root.classList.remove("light-mode");
    }
    localStorage.setItem("userMode", JSON.stringify(lightMode));
  }, [lightMode]);

  return (
    <>
      <BrowserRouter>
        <Navbar lightMode={lightMode} setLightMode={setLightMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:countryName" element={<CountryDetail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
