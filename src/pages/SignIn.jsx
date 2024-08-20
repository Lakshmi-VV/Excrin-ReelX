import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Google from "../icons/google.svg";
import Icon from "../components/icons";

function SignIn() {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
    validation: {
      email: new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
      password: new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"),
    },
  });
  const [toggle, setToggle] = useState({
    password: true,
  });
  const [step, setStep] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.showPasswordSection) {
      setStep(2);
    }
  }, [location.state]);

  const iconToggle = (type) => {
    setToggle((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleValidation = (name, value) => {
    const errorMessages = {
      required: `${name} is required.`,
      invalid_email: "Your email is invalid.",
      invalid_password: "Password is incorrect.",
    };

    const error =
      value === ""
        ? "required"
        : name === "email" && !signInForm.validation.email.test(value)
        ? "invalid_email"
        : name === "password" && !signInForm.validation.password.test(value)
        ? "invalid_password"
        : null;
    setSignInForm((prev) => ({
      ...prev,
      errors: { ...prev.errors, [name]: errorMessages[error] },
    }));

    return error === null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignInForm((prev) => ({
      ...prev,
      [name]: value,
      errors: { ...prev.errors, [name]: null },
    }));
  };

  const handleEmailContinue = (e) => {
    e.preventDefault();
    const email = signInForm.email;
    const isValid = handleValidation("email", email);
    if (isValid) {
      setStep(2);
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const formFields = ["email", "password"];
    formFields.forEach((field) => {
      if (handleValidation(field, signInForm[field])) {
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
                  <button className="buttonOther sign-btn">Sign up</button>
                </Link>
                <Link to="/signin">
                  <button className="buttonStyle sign-btn">Sign in</button>
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
                    <div className="input">
                      <Icon className="svg-icon" icon="mail" />
                      <input
                        type="text"
                        placeholder="Pietro@gmail.com"
                        name="email"
                        value={signInForm.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    {signInForm.errors.email && (
                      <p className="invalid">{signInForm.errors.email}</p>
                    )}
                  </div>
                  <button className="btn">Continue</button>
                </div>
              </form>
            </>
          ) : (
            <div className="signin withpass">
              <div className="title">
                <p>Enter your password</p>
              </div>

              <form className="form" onSubmit={handleSignIn}>
                <div className="input">
                  <Icon className="svg-icon" icon="mail" />
                  <input
                    type="text"
                    placeholder="Pietro@gmail.com"
                    value={signInForm.email}
                    name="email"
                  />
                </div>

                <div className="password">
                  <div className="input pass-input">
                    <div className="pass-icon-text">
                      <Icon className="svg-icon" icon="password-lock" />
                      <input
                        type={toggle.password ? "text" : "password"}
                        placeholder="Password"
                        value={signInForm.password}
                        name="password"
                        onChange={handleInputChange}
                      />
                    </div>
                    <Icon
                      className="svg-icon"
                      icon="password-eye"
                      onClick={() => iconToggle("password")}
                    />
                  </div>

                  {signInForm.errors.password && (
                    <p className="invalid">{signInForm.errors.password}</p>
                  )}

                  <Link to="/reset-password" className="forgot-pass-link">
                    <p className="forgot-pass">Forgot password?</p>
                  </Link>
                </div>

                <button className="btn">Continue</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SignIn;
