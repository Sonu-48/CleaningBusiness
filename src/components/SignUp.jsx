import axios from "axios";
import React, { useRef, useState } from "react";
import { BaseUrl } from "../ApiEndpoint/api";
import { Link, useNavigate } from "react-router-dom";
import Loader from "react-js-loader";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import PopUp from "./PopUp";
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = () => {
  const [signupdata, setSignupdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [isSignagree, setIsSignagree] = useState(false);
  const [fname, setFname] = useState([]);
  const [lname, setLname] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showpassword, setShowpassword] = useState();
  const [error, setError] = useState();
  const [openmodal, setOpenmodal] = useState(false);
  const [successMsg, setSuccessMsg] = useState();
  const navigate = useNavigate();
  const [agreeError, setAgreeError] = useState();
  const [capchaError,setCapchaError] = useState(false)
  const captchaRef = useRef(null);


  const handleChange = (e) => {
    setSignupdata({ ...signupdata, [e.target.name]: e.target.value });
  };

  // handleSignAgree checkbox for terms and condition
  const handleSignagree = () => {
    setIsSignagree(!isSignagree);
  };

  // handle showpassword function
  const handleTogglePassword = () => {
    setShowpassword(!showpassword);
  };

  //   handleSubmit userdata function
  const handleSubmit = async () => {
    if (isSignagree === false) {
      return setAgreeError("Please agree to our Terms & Conditions");
    } else {
      setAgreeError("");
    }
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    if(!token){
      setCapchaError("Captcha is required")
      return;
    }else{
      setCapchaError(false);
    
    }
    setLoading(true);
    try {
      const res = await axios({
        method: "POST",
        url: BaseUrl.cleanersignup,
        data: {
          fname: signupdata.firstname,
          lname: signupdata.lastname,
          email: signupdata.email,
          password: signupdata.password,
          confirm_password: signupdata.confirmpassword,
          isSignagree: isSignagree,
        },
      });

      if (res.status === 200 && res.data.status === true) {
        setOpenmodal(true);
        setSuccessMsg(res.data.message);
        localStorage.setItem("firstname", signupdata.firstname);
        setSignupdata({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
        setLoading(false);

        setTimeout(() => {
          navigate("/");
        }, 2000);
        // window.location.href = res.data.redirection_url;
      } else {
        if (res.status === 200 && res.data.status === 400) {
          setFname(res.data.message.fname);
          setLname(res.data.message.lname);
          setEmail(res.data.message.email);
          setPassword(res.data.message.password);
          setConfirmPassword(res.data.message.confirm_password);
          setLoading(false);
        }
      }
    } catch (errors) {
      console.log(errors);
      setError(errors.response.data.error);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="signup-wrapper">
        <div className="container container-wrapper">
          <div className="crm-form">
            <div className="heading">
              <h2>Sign Up</h2>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="firstname"
                    vale={signupdata.firstname}
                    className="form-control"
                    placeholder="First Name"
                    required
                    onChange={handleChange}
                  />
                  {fname &&
                    fname.map((error) => (
                      <p className="help-block text-danger">{error}</p>
                    ))}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="lastname"
                    vale={signupdata.lastname}
                    className="form-control"
                    placeholder="Last Name"
                    required
                    onChange={handleChange}
                  />
                  {lname &&
                    lname.map((error) => (
                      <p className="help-block text-danger">{error}</p>
                    ))}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={signupdata.email}
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                  {email &&
                    email.map((error) => (
                      <p className="help-block text-danger">{error}</p>
                    ))}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type={showpassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={signupdata.password}
                    className="form-control"
                    placeholder="Password"
                    required
                    onChange={handleChange}
                  />
                  <button
                    onClick={handleTogglePassword}
                    style={{
                      position: "absolute",
                      right: "25px",
                      top: "30%",
                      transform: "translateY(-50%)",
                      color: "rgb(0 0 0 / 73%)",
                      border: "none",
                      fontSize: "25px",
                      background: "transparent",
                    }}
                  >
                    {showpassword ? (
                      <MdOutlineVisibility />
                    ) : (
                      <MdOutlineVisibilityOff />
                    )}
                  </button>
                  {password &&
                    password.map((error) => (
                      <p className="help-block text-danger">{error}</p>
                    ))}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    id="confirmpassword"
                    type={showpassword ? "text" : "password"}
                    name="confirmpassword"
                    value={signupdata.confirmpassword}
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                    onChange={handleChange}
                  />
                  <button
                    onClick={handleTogglePassword}
                    style={{
                      position: "absolute",
                      right: "25px",
                      top: "30%",
                      transform: "translateY(-50%)",
                      color: "rgb(0 0 0 / 73%)",
                      border: "none",
                      fontSize: "25px",
                      background: "transparent",
                    }}
                  >
                    {showpassword ? (
                      <MdOutlineVisibility />
                    ) : (
                      <MdOutlineVisibilityOff />
                    )}
                  </button>
                  {confirmPassword &&
                    confirmPassword.map((error) => (
                      <p className="help-block text-danger">{error}</p>
                    ))}
                  {error && <p className="help-block text-danger">{error}</p>}
                </div>
              </div>
              {/* terms  and conditions are mandatory to proceed */}

              <div className="col-lg-12">
                <div className="form-group">
                  <label className="sign_agree">
                    <input
                      type="checkbox"
                      id="signagree"
                      checked={isSignagree}
                      name="signagree"
                      onChange={handleSignagree}
                    />
                    <span>
                      I agree with the &nbsp;
                      <Link
                        to="/terms-of-use"
                        style={
                          isSignagree
                            ? { color: "green", fontWeight: "600" }
                            : { color: "" }
                        }
                      >
                        TermsofService
                      </Link>{" "}
                      & &nbsp;
                      <Link
                        to="/privacy-policy"
                        style={
                          isSignagree
                            ? { color: "green", fontWeight: "600" }
                            : { color: "" }
                        }
                      >
                        PrivacyPolicy
                      </Link>
                      .
                    </span>
                  </label>
                  <p
                    className="help-block text-danger"
                    style={{ clear: "both" }}
                  >
                    {agreeError}
                  </p>
                </div>
              </div>
            </div>
            {/* ReCAPTCHA section */}
            <div>
              <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY}  ref={captchaRef}/>
              <p className="help-block text-danger">{capchaError}</p>
            </div>
            <div id="success"></div>
            <div align="center" style={{paddingTop:'30px'}}>
              <button
                type="submit"
                className="btn btn-custom btn-lg"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader type="spinner-circle" size={40}/>
                  </>
                ) : (
                  <>SignUp</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal component */}
      <PopUp
        openmodal={openmodal}
        setOpenmodal={setOpenmodal}
        content={successMsg}
      />
    </>
  );
};
export default SignUp;
