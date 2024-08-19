import React, { useState,useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Edit from '../icons/edit.svg';
import Arrow from '../icons/arrow-left.svg';
import Lock from '../icons/password-lock.svg'
import Eye from '../icons/password-eye.svg'
import { ThemeContext } from '../contexts/themeContext';


function Reset() {
  const [code, setCode] = useState(['', '', '', '']);
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); 
  const [password, setPassword] = useState('');
  const [passVisible , setPassVisible] = useState(true);
  const { isDarkTheme } = useContext(ThemeContext);

  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
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
     
      navigate('/signin', { state: { showPasswordSection: true } });
    } else {
      setStep(step - 1); 
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPwdError(!validPassword.test(newPassword));
   
  };

  const eyeToggle =() =>{
        setPassVisible(!passVisible);
      }
  return (
    <>
      <div className='signUp-container'>
        <div className="inner-container">
          <div className='signin withpass'>
              <div className="reset-nav">
                <img src={Arrow} alt="Back" onClick={handleBack}/>
                <div className='pageNum'>
                  <p>{step}</p>
                  <p className='page'>/ 2</p>
                </div>
              </div>

             {step === 1 ? (
              <>
                <div className="reset-title title">
                  <p>Reset password</p>
                </div>
                <div className="instructions">
                  <p>Please enter the reset code below that was</p>
                  <div className='reset-edit'>
                  <p> sent to <span className='reset-bold'>Pietro@gmail.com </span></p>
                  <img src={Edit} alt="Edit" />
                  </div>
                </div>
              
                <div className="code-section">
                  <div className='code-enter'>
                        <p className='reset-bold'>Code</p>
                        <div className='code-box'>
                          {code.map((digit, index) => (
                            <input
                              key={index}
                              id={`code-${index}`}
                              type="text"
                              maxLength="1"
                              value={digit}
                              onChange={(e) => handleChange(e, index)}
                              className="code-input"
                              placeholder='*'
                            />
                          ))}
                        </div>
                        <p className='forgot-pass'>Resend in {seconds} sec</p>
                    </div>
                  <button className="btn" onClick={handleContinue}>Continue</button>
                </div>
              </>
            ) : (
              <>
                <div className="reset-title title">
                  <p>Reset Password</p>
                </div>
                <div className='password'>
                    <div className="input pass-input">
                      <div className='pass-icon-text'>
                          <img src= {Lock}/>
                                        <input 
                              type={passVisible ? 'text' : 'password'} 
                              placeholder="Password" 
                              value={password} 
                              onChange={handlePasswordChange} 
                          />
                      </div>
                      


                      {/* SVG ICON !! */}
                      <img src={Eye} onClick={eyeToggle}  />

                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon">
                      <path d="M17.9537 9.20416C18.207 9.55941 18.3337 9.73707 18.3337 9.99999C18.3337 10.2629 18.207 10.4406 17.9537 
                      10.7958C16.8152 12.3922 13.908 15.8333 10.0003 15.8333C6.09264 15.8333 3.18541 12.3922 2.04703 10.7958C1.79367 10.4406 
                      1.66699 10.2629 1.66699 9.99999C1.66699 9.73707 1.79367 9.55941 2.04703 9.20416C3.18541 7.60786 6.09264 4.16666 10.0003
                      4.16666C13.908 4.16666 16.8152 7.60786 17.9537 9.20416Z" stroke="#18181B"/>
                      <path d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5
                      11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z" stroke="#18181B"/> </svg>



                    </div>
                </div>
                <button className="btn" >Updated password</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reset;
