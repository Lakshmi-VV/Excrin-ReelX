import React, { useState,useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Google from '../icons/google.svg'
import Icon from '../components/icons';
import { ThemeContext } from '../contexts/themeContext';

function SignIn() {
    const [email, setEmail] = useState('');
    const [step, setStep] = useState(1);
    const [passVisible , setPassVisible] = useState(true);
    const [emailErr, setEmailErr] = useState(false);
    const [password, setPassword] = useState('');
    const [pwdError, setPwdError] = useState(false);
    const location = useLocation();

    useEffect(() => {
      if (location.state && location.state.showPasswordSection) {
        setStep(2);
      }
    }, [location.state]);

    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const validateEmail = () => {
        if (!validEmail.test(email)) {
            setEmailErr(true);
            return false;
        } else {
            setEmailErr(false);
            return true;
        }
    };
    const handleEmailContinue = (e) => {
      e.preventDefault();
      if (validateEmail()) {
          setStep(2);
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

        <div className='title'>
        <p>Ignite Your Reelxperience</p>
        </div>

        <form className="form" onSubmit={handleEmailContinue}>
          <div className='google'>
            <img src={Google}/>
            <p>Continue with google</p>
          </div>
                
          <div className='border'></div>

          <div className='mail-continue'>
          <div className='mail-invalid'>
                <div className="input">
                <Icon className="svg-icon" icon="mail"/>
                <input type="text" placeholder="Pietro@gmail.com" value={email}
                      onChange={handleEmailChange}/>
                </div>
                {emailErr &&  <p className='invalid'>Your email is invalid.</p>}
                </div>
            <button className='btn' >Continue</button>
          </div>       
        </form>
      
        </>    
        ) : (
              <div className='signin withpass'>
                <div className="title">
                  <p>Enter your password</p>
                </div>

                <form className="form">
                  <div className="input">
                        <Icon className="svg-icon" icon="mail"/>
                        <input type="text" placeholder="Pietro@gmail.com"  value={email} />
                  </div>

                  <div className='password'>
                    <div className="input pass-input">
                      <div className='pass-icon-text'>
                        <Icon className="svg-icon" icon="password-lock"/>
                        <input 
                            type={passVisible ? 'text' : 'password'} 
                            placeholder="Password" 
                            value={password} 
                            onChange={handlePasswordChange} 
                        />
                      </div>
                      <Icon className="svg-icon" icon="password-eye" onClick={eyeToggle}/>
                    </div>
                    
                    {pwdError && <p className='invalid'>Password must be at least 6 characters long and contain at
                       least one letter and one number.</p>}
                   
                   <Link to='/reset-password' className='forgot-pass-link'>
                   <p className='forgot-pass'>Forgot password?</p>
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

export default SignIn

