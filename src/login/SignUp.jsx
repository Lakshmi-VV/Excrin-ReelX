import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Icon from "../components/Icons";
import Google from "../assets/icons/google.svg";
import Header from "../components/Header";

function SignUp() {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    name: "",
    password: "",
    errors: {
      email: "",
      password: "",
      name: "",
      user: "",
    },
    validation: {
      email: new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
      password: new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"),
    },
  });
  const [toggle, setToggle] = useState({
    consent: true,
    passwordVisible: false,
  });
  const [step, setStep] = useState(1);
  const [PasswordStrength, setPasswordStrength] = useState(0);

  const navigate = useNavigate();

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
    const isValid = formFields.every((field) =>
      handleValidation(field, signUpForm[field])
    );
    if (isValid) {
      const existingUsers =
        JSON.parse(localStorage.getItem("userDetails")) || [];
      const existingUser = existingUsers.find(
        (user) =>
          user.email === signUpForm.email || user.name === signUpForm.name
      );
      if (existingUser) {
        setSignUpForm((prev) => ({
          ...prev,
          errors: {
            ...prev.errors,
            user: "User already exists",
          },
        }));
        return;
      }
      const newUser = { ...signUpForm };
      existingUsers.push(newUser);
      localStorage.setItem("userDetails", JSON.stringify(existingUsers));

      navigate("/dashboard", { state: { username: signUpForm.name } });
    }
  };

  return (
    <>
      <Header />
      <div className="outer-container">
        <div className="inner-container">
          {step === 1 ? (
            <>
              <div className="signbtn-tab">
                <Link to="/signup">
                  <button className="buttonActive sign-btn">Sign up</button>
                </Link>
                <Link to="/signin">
                  <button className="buttonInactive sign-btn">Sign in</button>
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

                <div className="mail-section">
                  <div className="input-container">
                    <div
                      className={`input-field ${
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
                    <div>
                      {signUpForm.errors.email && (
                        <p className="invalid">{signUpForm.errors.email}</p>
                      )}
                    </div>
                  </div>
                  <button className="btn">Continue</button>
                </div>
              </form>
            </>
          ) : (
            <div className="signup-page">
              <div className="title">
                <p>Create an Account</p>
              </div>

              <form className="form">
                <div className="input-field">
                  <Icon icon="mail" className="svg-icon" />
                  <input
                    type="text"
                    name="email"
                    placeholder="Pietro@gmail.com"
                    value={signUpForm.email}
                  />
                </div>

                <div className="input-container">
                  <div
                    className={`input-field ${
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
                  <div>
                    {signUpForm.errors.name && (
                      <p className="invalid">{signUpForm.errors.name}</p>
                    )}
                  </div>
                </div>

                <div className="password-section">
                  <div className="input-container">
                    <div
                      className={`input-field ${
                        signUpForm.errors.password ? "invalid-input" : ""
                      } password-input`}
                    >
                      <div className="pass-icon-text">
                        <Icon icon="password-lock" className="svg-icon" />

                        <input
                          type={toggle.passwordVisible ? "text" : "password"}
                          placeholder="Password"
                          value={signUpForm.password}
                          name="password"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div
                        className="eye-icon"
                        onClick={() => iconToggle("passwordVisible")}
                      >
                        {toggle.passwordVisible ? (
                          <Icon icon="password-eyeOpen" className="svg-icon" />
                        ) : (
                          <Icon icon="password-eyeClose" className="svg-icon" />
                        )}
                      </div>
                    </div>
                    <div>
                      {signUpForm.errors.password && (
                        <p className="invalid">{signUpForm.errors.password}</p>
                      )}
                    </div>
                  </div>

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
                      <p className="input-messages">Password strength</p>
                    </div>
                  </div>
                </div>

                <div className="checkbox-consent">
                  <div
                    className="checkbox"
                    onClick={() => iconToggle("consent")}
                  >
                    {toggle.consent && (
                      <Icon icon="tick" className="check-tick svg-icon" />
                    )}
                  </div>

                  <p className="terms-condition">
                    By agreeing this you are accepting the
                    <span className="span-terms-condition"> T&C </span>of ReelX
                  </p>
                </div>

                <button className="btn" onClick={handleSignUp}>
                  Sign Up
                </button>
                {signUpForm.errors.user && (
                  <p className="invalid">{signUpForm.errors.user}</p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SignUp;
