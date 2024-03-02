import axios from "axios";
import React, { useState } from "react";
import { BaseUrl } from "../ApiEndpoint/api";
import { useNavigate } from "react-router-dom";
import Loader from "react-js-loader";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
// import { useToasts } from 'react-toast-notifications';

const SignUp = () => {
  const [signupdata, setSignupdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [fname, setFname] = useState([]);
  const [lname, setLname] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showpassword, setShowpassword] = useState();
  // const [openmodal,setOpenmodal] = useState(false);
  const navigate = useNavigate();
  // const { addToast } = useToasts();

  const handleChange = (e) => {
    setSignupdata({ ...signupdata, [e.target.name]: e.target.value });
  };
  
  // handle showpassword function
  const handleTogglePassword = () => {
    setShowpassword(!showpassword);
  };

  //   handleSubmit userdata function
  const handleSubmit = async () => {
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
        },
      });
      if (res.status === 200 && res.data.status === true) {
        // addToast('Toast message', { appearance: res.data.message });
        alert(res.data.message);
        localStorage.setItem("firstname", signupdata.firstname);
        setSignupdata({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
        setLoading(false);
        // useToast.success("Sign Up Successfully!")
        
        navigate("/");
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
      alert(errors.response.data.error);
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
          <div>
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
                      color:'rgb(0 0 0 / 73%)',
                      border:'none',
                      fontSize:'25px',
                    }}
                  >
                    {showpassword ? (
                      <MdOutlineVisibility/>
                    ) : (
                      <MdOutlineVisibilityOff />
                    )}
                  </button>
                 
                </div>
                {password &&
                    password.map((error) => (
                      <p className="help-block text-danger">{error}</p>
                    ))}
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
                      color:'rgb(0 0 0 / 73%)',
                      border:'none',
                      fontSize:'25px',
                    }}
                  >
                    {showpassword ? (
                      <MdOutlineVisibility/>
                    ) : (
                      <MdOutlineVisibilityOff />
                    )}
                  </button>
                  {confirmPassword &&
                    confirmPassword.map((error) => (
                      <p className="help-block text-danger">{error}</p>
                    ))}
                </div>
              </div>
            </div>

            <div id="success"></div>
            <div align="center">
              <button
                type="submit"
                className="btn btn-custom btn-lg"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader type="spinner-circle" size={40} />
                  </>
                ) : (
                  <>SignUp</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  

  );
};
export default SignUp;
