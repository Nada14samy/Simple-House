import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { HomePage, AboutPage, ContactPage } from "./Pages/index";
import { Header, Footer } from "./Section/index";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="Simple_House/home" element={<Navigate replace to="Simple_House/home" />} />
          <Route path="Simple_House/home" element={<HomePage />} />
          <Route path="Simple_House/about" element={<AboutPage />} />
          <Route path="Simple_House/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>


    </>
  )
}
export default App;