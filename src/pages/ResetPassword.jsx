import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/icons";

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
    password: true,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResetForm((prev) => ({
      ...prev,
      [name]: value,
      errors: { ...prev.errors, [name]: null },
    }));
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
      <div className="signUp-container">
        <div className="inner-container">
          <div className="signin withpass">
            <div className="reset-nav">
              <Icon
                icon="arrow-left"
                className="svg-icon"
                onClick={handleBack}
              />
              <div className="pageNum">
                <p>
                  <span className="page">{pageNumber(step).step}</span> /{" "}
                  {pageNumber(step).totalPages}
                </p>
              </div>
            </div>

            {step === 1 ? (
              <>
                <div className="reset-title title">
                  <p>Reset password</p>
                </div>
                <div className="instructions">
                  <p>Please enter your email to send the code.</p>
                  <br />
                  <div className="mail-continue">
                    <div className="mail-invalid">
                      <div
                        className={`input ${
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
                      {resetForm.errors.email && (
                        <p className="invalid">{resetForm.errors.email}</p>
                      )}
                    </div>
                    <button className="btn" onClick={handleContinue}>
                      Send Code
                    </button>
                  </div>
                </div>
              </>
            ) : step === 2 ? (
              <>
                <div className="code-section">
                  <div className="code-enter">
                    <p className="reset-bold">Code</p>
                    <p className="instructions">Enter the code</p>
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
                    <p className="forgot-pass">
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
                </div>
              </>
            ) : (
              <>
                <div className="reset-title title">
                  <p>Reset Password</p>
                </div>
                <div className="password">
                  <div
                    className={`input ${
                      resetForm.errors.password ? "invalid-input" : ""
                    } pass-input`}
                  >
                    <div className="pass-icon-text">
                      <Icon icon="password-lock" className="svg-icon" />
                      <input
                        type={toggle.password ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        value={resetForm.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <Icon
                      icon="password-eye"
                      className="svg-icon"
                      onClick={() => iconToggle("password")}
                    />
                  </div>
                  {resetForm.errors.password && (
                    <p className="invalid">{resetForm.errors.password}</p>
                  )}
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
