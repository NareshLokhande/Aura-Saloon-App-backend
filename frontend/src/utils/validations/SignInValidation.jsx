const SignInValidation = (values) => {
    let errors = {}
    if(!values.name) {
        errors.name = "Username is required"
    }
    else if(values.name.length < 5) {
        errors.name = "Username must be more than 5 characters"
    }

    if(!values.password) {
        errors.password = "Password is required"
    }
    else if(3 < values.password.length < 8) {
        errors.password = "Password must be at least 4 letters and less than 8 letters"
    }
    return errors;
} 

export default SignInValidation;