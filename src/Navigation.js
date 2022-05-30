import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Maket1 from "./pages/maket1";
import Maket2 from "./pages/maket2";
import Maket3 from "./pages/maket3";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/maket1" element={<Maket1 />} />
        <Route path="/maket2" element={<Maket2 />} />
        <Route path="/maket3" element={<Maket3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
