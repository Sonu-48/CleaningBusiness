import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

function Footer() {  
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-xs-12">
            <div className="footer-item">
              <h3>Product</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12">
            <div className="footer-item">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-use">Terms of use</Link>
                </li>
                <li>
                  <Link to="/gdpr">GDPR</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12">
            <div className="footer-item">
              <h3>Supprt</h3>
              <ul>
                <li>
                  <a href="/#contact">Help</a>
                </li>
              </ul>
              <h3>Contact Sales</h3>

              <li
                style={{
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <MdEmail />
                <a
                  href="mailto:sales@webcleaningbusiness"
                  rel="noreferrer"
                  target="_blank"
                >
                  sales@webcleaningbusiness.com
                </a>
              </li>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12">
            <div className="footer-item">
              <h3>Connect with us</h3>
              <div className="social">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      {/* <div>
        <div className="container text-center">
          <p>&copy; Copyright 2024</p>
        </div>
      </div> */}
    </div>
  );
}
export default Footer;
