import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AircraftPage from "./pages/AircraftPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingleAircraftPage from "./pages/SingleAircraftPage";
import { Provider } from "react-redux";
import { store } from "./stores/cart.store";
import CartPage from "./pages/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aircraft" element={<AircraftPage />} />
            <Route path="/aircraft/:id" element={<SingleAircraftPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
