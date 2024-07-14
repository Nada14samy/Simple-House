import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { HomePage, AboutPage, ContactPage } from "./Pages/index";
import { Header, Footer } from "./Section/index";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="Simple-House/" element={<HomePage />} />
          <Route path="Simple-House/about" element={<AboutPage />} />
          <Route path="Simple-House/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>


    </>
  )
}
export default App;