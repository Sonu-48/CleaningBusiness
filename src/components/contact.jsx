import axios from "axios";
import { useRef, useState } from "react";
import React from "react";
import { BaseUrl } from "../ApiEndpoint/api";
import PopUp from "./PopUp";
import Loader from "react-js-loader";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [nameerror, setNameerror] = useState([]);
  const [emailerror, setEmailerror] = useState([]);
  const [messageerror, setMessageerror] = useState([]);
  const [openmodal, setOpenmodal] = useState(false);
  const [successMsg, setSuccessMsg] = useState();
  const [loading, setLoading] = useState(false);
  const captchaRef = useRef(null);
 const [capchaError,setCapchaError] = useState(false)


  const handleChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  //  send user message function
  const handleSubmit = async () => {
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
      if(!token){
        setCapchaError("Captcha is required.");
       return;
     }else{ 
         setCapchaError(false)
     }
      setLoading(true);
      try {
        const res = await axios({
          method: "POST",
          url: BaseUrl.customerqueries,
          data: {
            name: userdata.name,
            email: userdata.email,
            message: userdata.message,
            recaptcha_response: token,
          },
        });
        if (res.status === 200 && res.data.status === true) {
          setOpenmodal(true);
          setSuccessMsg(res.data.message);
          setLoading(false);
          setUserdata({
            name: "",
            email: "",
            message: "",
          });
        } else {
          if (res.status === 200 && res.data.status === 400) {
            setNameerror(res.data.message.name);
            setEmailerror(res.data.message.email);
            setMessageerror(res.data.message.message);
            setLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
  
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="col-md-7">
              <div id="get-in-touch-form-wrappper">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={userdata.name}
                          className="form-control"
                          placeholder="Name"
                          required
                          onChange={handleChange}
                        />
                        {nameerror &&
                          nameerror.map((name) => (
                            <p className="help-block text-danger">{name}</p>
                          ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          value={userdata.email}
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                          onChange={handleChange}
                        />
                        {emailerror &&
                          emailerror.map((email) => (
                            <p className="help-block text-danger">{email}</p>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          value={userdata.message}
                          id="message"
                          className="form-control"
                          rows="4"
                          placeholder="Message"
                          required
                          onChange={handleChange}
                        ></textarea>
                        {messageerror &&
                          messageerror.map((message) => (
                            <p className="help-block text-danger">{message}</p>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* ReCAPTCHA section */}
                  <div>
                    <ReCAPTCHA
                      sitekey={process.env.REACT_APP_SITE_KEY}
                      ref={captchaRef}
                    />
                     <p className="help-block text-danger">{capchaError}</p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-custom btn-lg page-scrol"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader type="spinner-circle" size={40} />
                      </>
                    ) : (
                      <>Send Message</>
                    )}
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 col-md-offset-1  contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* modal component */}
      <PopUp
        openmodal={openmodal}
        setOpenmodal={setOpenmodal}
        content={successMsg}
      />
    </div>
  );
};
