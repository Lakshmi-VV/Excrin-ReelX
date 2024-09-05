import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/icons";
import Header from "../components/Header";

function Reset() {
  const [resetForm, setResetForm] = useState({
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
    passwordVisible: false,
  });
  const [sendCode, setSendCode] = useState({
    code: ["", "", "", ""],
    seconds: 59,
    isCodeComplete: false,
  });
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 2 && sendCode.seconds > 0) {
      const timer = setInterval(() => {
        setSendCode((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [step, sendCode.seconds]);

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
        : name === "email" && !resetForm.validation.email.test(value)
        ? "invalid_email"
        : name === "password" && !resetForm.validation.password.test(value)
        ? "invalid_password"
        : null;
    setResetForm((prev) => ({
      ...prev,
      errors: { ...prev.errors, [name]: errorMessages[error] },
    }));

    return error === null;
  };

  const user = JSON.parse(localStorage.getItem("userDetails")).find(
    (user) => user.email === resetForm.email
  );
  const username = user ? user.name : null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResetForm((prev) => ({
      ...prev,
      [name]: value,
      errors: { ...prev.errors, [name]: null },
    }));
    if (name === "password") {
      updateLocalStorage(resetForm.email, value);
    }
  };

  const updateLocalStorage = (email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem("userDetails")) || [];
    const existingUser = existingUsers.find((user) => user.email === email);
    if (existingUser) {
      existingUser.password = password;
      localStorage.setItem("userDetails", JSON.stringify(existingUsers));
    }
  };

  const handleChange = (e, index) => {
    const newCode = [...sendCode.code];
    newCode[index] = e.target.value;

    if (e.target.value && index < 3) {
      document.getElementById(`code-${index + 1}`).focus();
    }
    setSendCode((prev) => ({ ...prev, code: newCode }));

    const isCodeComplete = newCode.every((digit) => digit !== "");
    setSendCode((prev) => ({ ...prev, isCodeComplete }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    let iSValid = true;
    const formFields = step === 3 ? ["password"] : ["email"];
    formFields.forEach((field) => {
      if (!handleValidation(field, resetForm[field])) {
        iSValid = false;
      } else {
        iSValid = true;
      }
    });
    if (iSValid) {
      if (step === 1) {
        setStep(2);
      }
    }
    if (step === 2) {
      setStep(3);
    }
    if (step == 3) {
      if (iSValid) {
        navigate("/dashboard", { state: { username } });
      }
    }
  };

  const handleBack = () => {
    if (step === 1) {
      navigate("/signin", { state: { showPasswordSection: true } });
    } else if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  };

  const pageNumber = (step) => {
    const totalPages = 3;
    return {
      step: `${step}`,
      totalPages: `${totalPages}`,
    };
  };
  return (
    <>
      <Header />
      <div className="outer-container">
        <div className="inner-container">
          <div className="reset-page">
            <div className="reset-nav">
              <Icon icon="arrow-left" onClick={handleBack} />
              <div className="pageNum">
                <p>
                  <span className="page">{pageNumber(step).step}</span> /{" "}
                  {pageNumber(step).totalPages}
                </p>
              </div>
            </div>

            {step === 1 ? (
              <>
                <div className="reset-title">
                  <p>Reset password</p>
                </div>
                <div className="instructions">
                  <p>Enter your email to receive the verification code.</p>
                </div>

                <div className="mail-section">
                  <div className="input-container">
                    <div
                      className={`input-field ${
                        resetForm.errors.email ? "invalid-input" : ""
                      }`}
                    >
                      <Icon className="svg-icon" icon="mail" />
                      <input
                        type="text"
                        placeholder="Pietro@gmail.com"
                        name="email"
                        value={resetForm.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      {resetForm.errors.email && (
                        <p className="invalid">{resetForm.errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>

                <button className="btn" onClick={handleContinue}>
                  Send Code
                </button>
              </>
            ) : step === 2 ? (
              <>
                <div className="reset-title">
                  <p>Reset password</p>
                </div>

                <div>
                  {/* <p className="reset-boldText">Code</p> */}
                  <p className="instructions">
                    Enter the code we sent to your email to verify your account.
                  </p>
                </div>

                <div className="code-section">
                  <div className="code-box">
                    {sendCode.code.map((digit, index) => (
                      <input
                        key={index}
                        id={`code-${index}`}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        className="code-input"
                        placeholder="*"
                      />
                    ))}
                  </div>
                  <p className="input-messages">
                    Resend in {sendCode.seconds} sec
                  </p>
                </div>

                <button
                  className="btn"
                  onClick={handleContinue}
                  disabled={!sendCode.isCodeComplete}
                >
                  Continue
                </button>
              </>
            ) : (
              <>
                <div className="reset-title">
                  <p>Reset Password</p>
                </div>
                <div className="password-section">
                  <div className="input-container">
                    <div
                      className={`input-field ${
                        resetForm.errors.password ? "invalid-input" : ""
                      } password-input`}
                    >
                      <div className="pass-icon-text">
                        <Icon icon="password-lock" className="svg-icon" />
                        <input
                          type={toggle.passwordVisible ? "text" : "password"}
                          placeholder="Password"
                          name="password"
                          value={resetForm.password}
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
                      {resetForm.errors.password && (
                        <p className="invalid">{resetForm.errors.password}</p>
                      )}
                    </div>
                  </div>
                </div>
                <button className="btn" onClick={handleContinue}>
                  Updated password
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reset;
