const Validation = (signUpData) => {
    let errors = {}
    if (!signUpData.username.trim()) {
        errors.username = "Username is required";
      }
      if (!signUpData.email.trim()) {
        errors.email = "Email is required";
      } else if (
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(signUpData.email)
      ) {
        errors.email = "Email is not valid";
      }
  
      if (!signUpData.password.trim()) {
        errors.password = "Password is required";
      } else if (signUpData.password.length < 6) {
        errors.password = "Password should be at least 6 character";
      }
  
      if (signUpData.confirmPassword !== signUpData.password) {
        errors.confirmPassword = "Password not matched";
      }
      
      if (Object.keys(errors).length === 0) {
        alert("Form submitted successfully");
      }
    };
  
export default Validation;