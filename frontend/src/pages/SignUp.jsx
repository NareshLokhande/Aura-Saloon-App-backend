import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNIN_ROUTE } from "../constants/AppRoutes";

export const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration successfull");
      console.log(" Registration successfull");
      navigate(SIGNIN_ROUTE);
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h1 className="form-title">Sign Up</h1>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    onClick={PostData}
                  />
                </div>
              </form>

              <div className="already-registered">
                <Link to={SIGNIN_ROUTE}> Already Registered</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};




// // import { React, Toast, ToastContainer, useState } from "react";
// // import { Icon } from "react-icons-kit";
// // import { eyeOff } from "react-icons-kit/feather/eyeOff";
// // import { eye } from "react-icons-kit/feather/eye";
// // import "../assets/css/SignUp.css";
// // import { Link } from "react-router-dom";
// // import { SIGNIN_ROUTE } from "../constants/AppRoutes";

// // export const SignUp = () => {
// //   const [signUpData, setSignUpData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     password: "",
// //     cpassword: "",
// //   });

// //   const [showToast, setShowToast] = useState(false);
// //   const [errors, setErrors] = useState({});
// //   //const [phoneError, setPhoneError] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //   // const [allEntry, setAllEntry] = useState({});

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setSignUpData({
// //       ...signUpData,
// //       [name]: value,
// //     });
// //   };

// //   const handleCloseToast = () => {
// //     setShowToast(false);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const validationErrors = {};

// //     if (!signUpData.name.trim()) {
// //       validationErrors.name = "Username is required";
// //     }

// //     if (!signUpData.email.trim()) {
// //       validationErrors.email = "Email is required";
// //     } else if (
// //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(signUpData.email)
// //     ) {
// //       validationErrors.email = "Email is not valid";
// //     }

// //     if (!signUpData.password.trim()) {
// //       validationErrors.password = "Password is required";
// //     } else if (signUpData.password.length < 6) {
// //       validationErrors.password = "Password should be at least 6 characters";
// //     }

// //     if (signUpData.confirmPassword !== signUpData.password) {
// //       console.log(signUpData.confirmPassword, signUpData.password);
// //       validationErrors.confirmPassword = "Passwords do not match";
// //     }

// //     setErrors(validationErrors);

// //     if (Object.keys(validationErrors).length === 0) {
// //       <ToastContainer position="top-middle">
// //         <Toast
// //           bg="danger"
// //           onClose={handleCloseToast}
// //           show={showToast}
// //           delay={3000}
// //           autohide
// //         >
// //           <Toast.Header>
// //             <strong className="me-auto">Error</strong>
// //           </Toast.Header>
// //           <Toast.Body className="text-white">
// //             Form submitted successfully
// //           </Toast.Body>
// //         </Toast>
// //       </ToastContainer>;
// //     } else {
// //       <ToastContainer position="top-middle">
// //         <Toast
// //           bg="danger"
// //           onClose={handleCloseToast}
// //           show={showToast}
// //           delay={3000}
// //           autohide
// //         >
// //           <Toast.Header>
// //             <strong className="me-auto">Error</strong>
// //           </Toast.Header>
// //           <Toast.Body className="text-white">
// //             Please corrrect the validation errors before submitting
// //           </Toast.Body>
// //         </Toast>
// //       </ToastContainer>;
// //     }
// //   };

// //   const handleTogglePassword = () => {
// //     setShowPassword((prev) => !prev);
// //   };
// //   const handleToggleConfirmPassword = () => {
// //     setShowConfirmPassword((prev) => !prev);
// //   };

// //   return (
// //     <div className="SignUp-box">
// //       <h1>SIGN UP</h1>
// //       <form action="" onSubmit={handleSubmit}>
// //         <div className="input-box">
// //           <label htmlFor="name">Username</label>
// //           <input
// //             type="text"
// //             id="name"
// //             autoComp value={}
// //             placeholder="Enter Username"
// //             value={signUpData.name}
// //             onChange={handleChange}
// //             name="name"
// //           />
// //           {errors.name && (
// //             <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
// //           )}
// //         </div>
// //         <div className="input-box">
// //           <label htmlFor="email">Email Id</label>
// //           <input
// //             type="email"
// //             id="email"
// //             autoComp value={}
// //             placeholder="Enter Email Id"
// //             value={signUpData.email}
// //             onChange={handleChange}
// //             name="email"
// //           />
// //           {errors.email && (
// //             <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
// //           )}
// //         </div>
// //         <div className="input-box">
// //           <label htmlFor="password">Password</label>
// //           <input
// //             type={showPassword ? "text" : "password"}
// //             id="password"
// //             autoComp value={}
// //             placeholder="Enter Password"
// //             value={signUpData.password}
// //             onChange={handleChange}
// //             name="password"
// //           />
// //           {errors.password && (
// //             <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>
// //           )}
// //           <button type="button" onClick={handleTogglePassword}>
// //             <Icon icon={showPassword ? eye : eyeOff} size={24} />
// //           </button>
// //         </div>

// //         <div className="input-box">
// //           <label htmlFor="confirmpassword">Confirm Password</label>
// //           <p>
// //             <input
// //               type={showConfirmPassword ? "text" : "password"}
// //               id="confirmpassword"
// //               autoComp value={}
// //               placeholder="Enter Confirm Password"
// //               value={signUpData.confirmPassword}
// //               onChange={handleChange}
// //               name="confirmPassword"
// //             />
// //             <button type="button" onClick={handleToggleConfirmPassword}>
// //               <Icon icon={showConfirmPassword ? eye : eyeOff} size={24} />
// //             </button>
// //           </p>
// //           {errors.confirmpassword && (
// //             <p style={{ color: "red", fontSize: "13px" }}>
// //               {errors.confirmpassword}
// //             </p>
// //           )}
// //         </div>

// //         <div>
// //           <button type="Submit">Create Account</button>
// //         </div>

// //         <div className="SignUp">
// //           <p>
// //             Already have an account?
// //             <Link to={SIGNIN_ROUTE}>Sign In</Link>
// //           </p>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };
