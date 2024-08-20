import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/icons";

function Reset() {
  const [resetFrom,setResetForm]=useState({
    email: "",
    password: "",
  
  });
  const [code, setCode] = useState(["", "", "", ""]);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passVisible, setPassVisible] = useState(true);
  const [seconds, setSeconds] = useState(59);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
    } else {
      // Send the code logic here
      setError(null);
    }
  };
  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;

    if (e.target.value && index < 3) {
      document.getElementById(`code-${index + 1}`).focus();
    }

    setCode(newCode);
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 1) {
      navigate("/signin", { state: { showPasswordSection: true } });
    } else {
      setStep(step - 1);
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPwdError(!validPassword.test(newPassword));
  };

  const eyeToggle = () => {
    setPassVisible(!passVisible);
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
                <p>{step}</p>
                <p className="page">/ 2</p>
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
                      <div className="input">
                        <Icon className="svg-icon" icon="mail" />
                        <input
                          type="text"
                          placeholder="Pietro@gmail.com"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      {error && <p className="invalid">{error}</p>}
                    </div>
                    <button className="btn" onClick={handleSubmit}>Send Code</button>
                  </div>
                </div>

                <div className="code-section">
                  <div className="code-enter">
                    <p className="reset-bold">Code</p>
                    <div className="code-box">
                      {code.map((digit, index) => (
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
                    <p className="forgot-pass">Resend in {seconds} sec</p>
                  </div>
                  <button className="btn" onClick={handleContinue}>
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
                  <div className="input pass-input">
                    <div className="pass-icon-text">
                      <Icon icon="password-lock" className="svg-icon" />
                      <input
                        type={passVisible ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <Icon
                      icon="password-eye"
                      className="svg-icon"
                      onClick={eyeToggle}
                    />
                  </div>
                </div>
                <button className="btn">Updated password</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reset;
