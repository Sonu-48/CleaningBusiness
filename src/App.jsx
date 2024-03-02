import React from "react";
import { Navigation } from "./components/navigation";
// Correct way to import react-toastify components
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Homelayout from "./HomeLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import { ToastProvider } from "react-toast-notifications";
import CrmForm from "./components/CrmForm";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <ToastProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Homelayout />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/booking-form" element={<CrmForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </ToastProvider>
    </div>
  );
};

export default App;
