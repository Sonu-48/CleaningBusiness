import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down enough to show the button
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  }
  return (
    <>
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
       <div className="navbar-wrapper">
       <div className="navbar-header">
          
          <Link to="/">
              <img src="img/logo.png" alt="Cleaning Business" className="cleaning-logo"/>
          </Link>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="/#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="/#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="/#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://crm.webcleaningbusiness.com/"   rel="noreferrer" target="_blank"
                className="btn btn-custom btn-lg page-scrol" id="login-btn"
                style={{ color: "#fff", borderRadius: "10px", padding: "10px" }}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
       </div>
      </div>
    </nav>
    {/* BackToTop button section */}
    <div className="back-to-top-btn">
        <button className={`btn btn-custom btn-lg ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop} style={{width:'50px',height:'50px',borderRadius:'50%',}}>
          <FaArrowUpLong />
        </button>
      </div>
    </>

  );
};
