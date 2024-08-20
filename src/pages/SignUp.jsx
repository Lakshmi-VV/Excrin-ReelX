import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/icons";
import Google from "../icons/google.svg";

function SignUp() {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    name: "",
    password: "",
    errors: {
      email: "",
      password: "",
      name: "",
    },
    validation: {
      email: new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
      password: new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"),
    },
  });
  const [toggle, setToggle] = useState({
    consent: true,
    password: true,
  });
  const [step, setStep] = useState(1);
  const [PasswordStrength, setPasswordStrength] = useState(0);

  const iconToggle = (type) => {
    setToggle((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleValidation = (name, value) => {
    const errorMessages = {
      required: `${name} is required.`,
      invalid_email: "Your email is invalid.",
      invalid_password:
        "Password must be at least 6 characters long and contain at least one letter and one number.",
    };

    const error =
      value === ""
        ? "required"
        : name === "email" && !signUpForm.validation.email.test(value)
        ? "invalid_email"
        : name === "password" && !signUpForm.validation.password.test(value)
        ? "invalid_password"
        : null;
    setSignUpForm((prev) => ({
      ...prev,
      errors: { ...prev.errors, [name]: errorMessages[error] },
    }));

    return error === null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
      errors: { ...prev.errors, [name]: null },
    }));

    if (name === "password") {
      setPasswordStrength(getPasswordStrength(value));
    }
  };

  const getPasswordStrength = (password) => {
    let strength = 0;

    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;
    return strength;
  };

  const handleEmailContinue = (e) => {
    e.preventDefault();
    const email = signUpForm.email;
    const isValid = handleValidation("email", email);
    if (isValid) {
      setStep(2);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const formFields = ["email", "name", "password"];
    formFields.forEach((field) => {
      if (handleValidation(field, signUpForm[field])) {
        return true;
      }
    });
  };

  return (
    <>
      <div className="signUp-container">
        <div className="inner-container">
          {step === 1 ? (
            <>
              <div className="sign">
                <Link to="/signup">
                  <button className="buttonStyle sign-btn">Sign up</button>
                </Link>
                <Link to="/signin">
                  <button className="buttonOther sign-btn">Sign in</button>
                </Link>
              </div>

              <div className="title">
                <p>Ignite Your Reelxperience</p>
              </div>

              <form className="form" onSubmit={handleEmailContinue}>
                <div className="google">
                  <img src={Google} />
                  <p>Continue with google</p>
                </div>

                <div className="border"></div>

                <div className="mail-continue">
                  <div className="mail-invalid">
                    <div
                      className={`input ${
                        signUpForm.errors.email ? "invalid-input" : ""
                      }`}
                    >
                      <Icon icon="mail" className="svg-icon" />
                      <input
                        type="text"
                        name="email"
                        placeholder="Pietro@gmail.com"
                        value={signUpForm.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    {signUpForm.errors.email && (
                      <p className="invalid">{signUpForm.errors.email}</p>
                    )}
                  </div>
                  <button className="btn">Continue</button>
                </div>
              </form>
            </>
          ) : (
            <div className="signup withpass">
              <div className="title">
                <p>Create an Account</p>
              </div>

              <form className="form" onSubmit={handleSignUp}>
                <div className="input">
                  <Icon icon="mail" className="svg-icon" />
                  <input
                    type="text"
                    name="email"
                    placeholder="Pietro@gmail.com"
                    value={signUpForm.email}
                  />
                </div>
                <div className="mail-input">
                  <div
                    className={`input ${
                      signUpForm.errors.name ? "invalid-input" : ""
                    } `}
                  >
                    <Icon icon="user" className="svg-icon" />
                    <input
                      type="name"
                      name="name"
                      placeholder="Username"
                      value={signUpForm.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  {signUpForm.errors.name && (
                    <p className="invalid">{signUpForm.errors.name}</p>
                  )}
                </div>

                <div className="password">
                  <div
                    className={`input ${
                      signUpForm.errors.password ? "invalid-input" : ""
                    } pass-input`}
                  >
                    <div className="pass-icon-text">
                      <Icon icon="password-lock" className="svg-icon" />

                      <input
                        type={toggle.password ? "text" : "password"}
                        placeholder="Password"
                        value={signUpForm.password}
                        name="password"
                        onChange={handleInputChange}
                      />
                    </div>
                    <Icon
                      icon="password-eye"
                      className="svg-icon"
                      onClick={() => iconToggle("password")}
                    />
                  </div>
                  {signUpForm.errors.password && (
                    <p className="invalid">{signUpForm.errors.password}</p>
                  )}

                  <div className="password-strength">
                    <div className="strength-bars">
                      {[1, 2, 3].map((index) => (
                        <div
                          key={index}
                          className={
                            index <= PasswordStrength ? "active" : "inactive"
                          }
                        ></div>
                      ))}
                    </div>
                    <div>
                      <p className="forgot-pass">Password strength</p>
                    </div>
                  </div>

                  <div className="checkbox">
                    <div
                      className="checkbox-icon"
                      onClick={() => iconToggle("consent")}
                    >
                      {toggle.consent && (
                        <Icon icon="tick" className="check-tick" />
                      )}
                    </div>

                    <p className="tac">
                      By agreeing this you are accepting the{" "}
                      <span className="span-tac">T&C </span>of ReelX
                    </p>
                  </div>
                </div>

                <button className="btn">Sign Up</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SignUp;
