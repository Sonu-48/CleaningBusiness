import React, { Suspense, lazy } from "react";
import { Navigation } from "./components/navigation";
import "./App.css";
import Homelayout from "./HomeLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import CrmForm from "./components/CrmForm";
import Footer from "./components/Footer/Footer";
import Loader from "react-js-loader";

const SignUp = lazy(() => import("./components/SignUp"));
const TermsCondition = lazy(() =>
  import("./components/TermsCondition/Terms_Condition")
);
const PrivacyPolicy = lazy(() =>
  import("./components/Privacy-Policy/Privacy_Policy")
);
const Blogs = lazy(() => import("./components/Blog/Blogs"));
const SingleBlogs = lazy(() => import("./components/Blog/Single_Blogs"));
const GDPR = lazy(() => import("./components/GDPR/GDPR"));

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <Loader type="spinner-circle" size={60} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Homelayout />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/booking-form" element={<CrmForm />} />
            <Route path="/terms-of-use" element={<TermsCondition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/gdpr" element={<GDPR />} />
            <Route path="/blogs/:id" element={<SingleBlogs />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
