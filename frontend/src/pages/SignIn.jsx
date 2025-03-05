import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCTS_ROUTE, SIGNUP_ROUTE } from "../constants/AppRoutes";

export const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    try {
      const res = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 400 || !data) {
        window.alert("Invalid Login");
        console.log("Invalid Login");
      } else {
        window.alert("Login successful");
        console.log("Login successful");
        navigate(PRODUCTS_ROUTE);
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      window.alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="signIn">
      <div className="container mt-5">
        <div className="signIn-content">
          <div className="signIn-form">
            <h1 className="form-title">Sign In</h1>
            <form className="register-form" id="register-form" onSubmit={PostData}>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Your Email"
                  value={user.email}
                  onChange={handleInputs}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Your Password"
                  value={user.password}
                  onChange={handleInputs}
                />
              </div>

              <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit" value="Sign In" />
              </div>
            </form>

            <div className="already-registered">
              <Link to={SIGNUP_ROUTE}>Create Account</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};








//import React, { useState } from "react";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import "../assets/css/SignIn.css"
// import { CART_ROUTE, SIGNUP_ROUTE } from "../constants/AppRoutes";
// import { Link } from "react-router-dom";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdMarkEmailUnread } from "react-icons/md";

// export const SignIn = () => {

//   //   const [user, setUser] = useState({
//   //   email: "",
//   //   password: "",
//   // });

//   // const navigate = useNavigate();

//   // const handleInputs = (e) => {
//   //   const { name, value } = e.target;
//   //   setUser({ ...user, [name]: value });
//   // };

//   // const PostData = async (e) => {
//   //   e.preventDefault();

//   //   const { email, password } = user;

//   //   try {
//   //     const res = await fetch("http://localhost:5000/signin", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({ email, password }),
//   //     });

//   //     const data = await res.json();

//   //     if (res.status === 400 || !data) {
//   //       window.alert("Invalid Login");
//   //       console.log("Invalid Login");
//   //     } else {
//   //       window.alert("Login successful");
//   //       console.log("Login successful");
//   //       navigate(PRODUCTS_ROUTE);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error during sign-in:", error);
//   //     window.alert("An error occurred. Please try again later.");
//   //   }
//   // };

//   const [signInData, setSignInData] = useState({
//     username: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   const handlePassword = (e) => {
//     setSignInData({
//       ...signInData,
//       password: e.target.value,
//     });
//   };

//   const validate = (e) => {
   
//     let tempErrors = {};
    
//     if(!signInData.username){
//       tempErrors.username="Username is required";
//     }
//     if (!signInData.password) {
//       tempErrors.password="Password is required";
        
//     } 
//     return tempErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validate();
//     setErrors(errors);
//     if (Object.keys(errors).length === 0) {

//       console.log({ username: signInData.username, password: signInData.password });
//       window.alert("SignIn successfully");
    
//     }
   
//   };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSignInData((prevValues) => ({
//       ...prevValues,
//       [name]: value ,
//     }));
//   };

//   const handleTogglePassword = (e) => {

//     setShowPassword(!showPassword);

//   };

//   return (

//     <div className="SignIN-box">
//       <h1>SIGN IN</h1>
//       <form onSubmit={handleSubmit}>

//         <div className="input-box">
//           <label htmlFor="username">
//             Username *
//           </label>
//           <span >
//             <MdMarkEmailUnread size={24} />
//           <input
//             type="email"
//             name="username"
//             id="email"
//             autoComplete="off"
//             placeholder="Enter Email as username "
//             value={signInData.username}
//             onChange={handleChange}
//           />
//           </span>
//           <br />
//           {errors.username && (
//            <span className="error" >{errors.username}</span>
//           )}
//         </div>

//         <div className="input-box">
//           <label htmlFor="password">
//             Password *
//           </label>
//           <div className="password-container">
//             <RiLockPasswordFill size={24}/>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               autoComplete="off"
//               placeholder="Enter Password "
//               value={signInData.password}
//               onChange={handlePassword}
//               name="password"
//             />
//             <button onClick={handleTogglePassword}>
//               {showPassword ? <Visibility /> : <VisibilityOff />}
//             </button>
//             <br />
//             {errors.password && (
//               <span className="error">{errors.password}</span>
//             )}
//           </div>
//         </div>

//         <div>
//           <button type="submit" onClick={CART_ROUTE}>
//             Sign In
//           </button>
//         </div>

//         <div className="SignUp">
//           <span>
//             Don't have an account?
//             <Link to={SIGNUP_ROUTE}>Sign Up</Link>
//           </span>
//         </div>
//       </form>
//     </div>
//   );
// };