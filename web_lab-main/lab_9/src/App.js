import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AircraftPage from "./pages/AircraftPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingleAircraftPage from "./pages/SingleAircraftPage";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aircraft" element={<AircraftPage />} />
        <Route path="/aircraft/:id" element={<SingleAircraftPage />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
