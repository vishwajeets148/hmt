import React, { useState, useRef } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validateEmail, validatePassword1 } from "../../Validation.js";
import ReCAPTCHA from "react-google-recaptcha";
let logedin = false;
const Hlogin = () => {
  const baseurl = process.env.REACT_APP_BASEURL;
  const google_key = process.env.REACT_APP_GOOGLE_RECAPTHA_KEY;
  const recaptcha = useRef()
  const [errors, setErrors] = useState({});
  // const [logedin, setLogedin] = useState(false);
  const navigate = useNavigate();
  // set Initial values for login
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  // handle errors
  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
    // setFormValue({ ...formValue, [event.target.name]: event.target.value });

    const newErrors = { ...errors };
    switch (name) {
      case "email":
        newErrors[name] = validateEmail(value, true, true)
          ? null
          : "Please Enter Correct Email Address";
        break;
      case "password":
        newErrors[name] = validatePassword1(value, true, true)
          ? null
          : "Password is required and must contain a special character";
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  // code for Login

  const handleSubmit = async (e) => {

    e.preventDefault();
    // const captchaValue = recaptcha.current.getValue()
    // if (!captchaValue) {
    //   alert('Please verify the reCAPTCHA!')
    // } else {
      // make form submission
     
      const newErrors = {};
  
      if (!validateEmail(formValue.email, true, true)) {
        newErrors.email = "Please enter a valid email";
      }
  
      if (!validatePassword1(formValue.password, true, true)) {
        newErrors.password =
          "Password must be at least 8 characters with one special character";
      }
      setError(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
  

        try {
          // Call the login API
          const response = await axios.post(`${baseurl}/user/login`, formValue);
          //Assuming the login API returns user details upon successful login
          const resData = response.data;
          const token = resData.token;
          const id = resData.user.id;
  
          if (token && id) {
            localStorage.setItem("token", token);
            localStorage.setItem("id", id);
            logedin=true;
  
            // Proceed with navigation or other actions
            // console.log(token);
            // console.log(id);
          } else {
            // console.error("Token is undefined in the response");
            alert("Login Failed");
          }
          navigate("/hospital/formManager");
        } catch (error) {
          // Handle login failure, display error message or take appropriate action
          // console.error('Login failed:', error.message);
          alert(error.message);
        }
      } else {
        setErrors(newErrors);
      }
    // }
   
  };

  return (
    <div className="body1">
      <div className="login-root">
        <div
          className="box-root flex-flex flex-direction--column"
          style={{ minHeight: "100vh", flexGrow: 1 }}
        >
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div
                className="box-root flex-flex"
                style={{ gridArea: "top / start / 8 / end" }}
              >
                <div
                  className="box-root"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 2 / auto / 5" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "6 / start / auto / 2" }}
              >
                <div
                  className="box-root box-background--blue800"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "7 / start / auto / 4" }}
              >
                <div
                  className="box-root box-background--blue animationLeftRight"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "8 / 4 / auto / 6" }}
              >
                <div
                  className="box-root box-background--gray100 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "2 / 15 / auto / end" }}
              >
                <div
                  className="box-root box-background--cyan200 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "3 / 14 / auto / end" }}
              >
                <div
                  className="box-root box-background--blue animationRightLeft"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 17 / auto / 20" }}
              >
                <div
                  className="box-root box-background--gray100 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "5 / 14 / auto / 17" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="box-root padding-top--24 flex-flex flex-direction--column"
            style={{ flexGrow: 1, zIndex: 9 }}
          >
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1 className="drheading">
                <a rel="dofollow">Hospital Login</a>
              </h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg login">
                <div className="formbg-inner">
                  <span className="padding-bottom--15">Please sign in</span>
                  <form id="stripe-login" onSubmit={handleSubmit}>
                    <div className="field padding-bottom--24">
                      <label htmlFor="UHID">Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="email/id"
                        required
                        onChange={handleChange}
                        value={formValue.email}
                      />
                      {error.email && (
                        <span className="text text-danger small">
                          {error.email}
                        </span>
                      )}
                    </div>

                    <div className="field padding-bottom--24">
                      <label htmlFor="">Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                        onChange={handleChange}
                        value={formValue.password}
                      />
                      {error.password && (
                        <span className="text text-danger small">
                          {error.password}
                        </span>
                      )}
                    </div>
                  {/* <div className="field padding-bottom--24">
                    <ReCAPTCHA ref={recaptcha}
                      sitekey={google_key}
                    />
                  </div> */}
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn btn-primary submit-button"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <span>
                  Don't have an account? <Link to="/register">Sign up</Link>
                </span>
                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span>
                    <Link to="https://tecraki.io">
                      © Tecraki Technology Solutions
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    // <>
    //  <div className="row align-self-center row1">
    //   <div className="col-sm-6 text-center">
    //     <img src="./assets/img/about.png
    //     " alt="" />
    //   </div>
    //   <div className="col-sm-6">
    //               <span className="padding-bottom--15">Please sign in</span>
    //   <div className="d-flex justify-content-center border rounded p-4">
    //               <form id="stripe-login" onSubmit={handleSubmit}>
    //                 <div className="field padding-bottom--24">
    //                   <label htmlFor="UHID">Email</label>
    //                   <input
    //                     type="text"
    //                     name="email"
    //                     placeholder="email/id"
    //                     required
    //                     onChange={handleChange}
    //                     value={formValue.email}
    //                   />
    //                   {error.email && (
    //                     <span className="text text-danger small">
    //                       {error.email}
    //                     </span>
    //                   )}
    //                 </div>

    //                 <div className="field padding-bottom--24">
    //                   <label htmlFor="">Password</label>
    //                   <input
    //                     type="password"
    //                     name="password"
    //                     placeholder="password"
    //                     required
    //                     onChange={handleChange}
    //                     value={formValue.password}
    //                   />
    //                   {error.password && (
    //                     <span className="text text-danger small">
    //                       {error.password}
    //                     </span>
    //                   )}
    //                 </div>
    //               {/* <div className="field padding-bottom--24">
    //                 <ReCAPTCHA ref={recaptcha}
    //                   sitekey={google_key}
    //                 />
    //               </div> */}
    //                 <div className="col-md-6">
    //                   <button
    //                     type="button"
    //                     className="btn btn-primary submit-button"
    //                     onClick={handleSubmit}
    //                   >
    //                     Submit
    //                   </button>
    //                 </div>
    //               </form>
    //             </div>
    //   </div>
    //  </div>
    
    
    // </>
  );
};
// Define getLogedin function to export the logedin status
export const getLogedin = () => {
  return logedin;
};
export default Hlogin;
