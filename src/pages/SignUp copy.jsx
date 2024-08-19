import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import Google from '../icons/google.svg'
import Mail from '../icons/mail.svg'
import User from '../icons/user.svg'
import Lock from '../icons/password-lock.svg'
import Eye from '../icons/password-eye.svg'
import Tick from '../icons/tick.svg'
import { ThemeContext } from '../contexts/themeContext';

function SignUp() {
    const [email, setEmail] = useState('');
    const [step, setStep] = useState(1);
    const [tickVisible, setTickVisible] = useState(true);
    const [passVisible , setPassVisible] = useState(true);
    const [emailErr, setEmailErr] = useState(false);
    const [password, setPassword] = useState('');
    const [pwdError, setPwdError] = useState(false);
    const [pwdStrength, setPwdStrength] = useState(0);

    const [formObject ,setFormObject]=useState({
      email: '',
      password: '',
      validation:{
        email:[true,'^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'],
        password:[true,'^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$']
      },
      error:{
        email:[],
        password:[],
      }
    });

    const [signUpObj, setSignUpObj] =useState({
        "email": "",
        "step": 1,
        "visibility": {
          "tick": true,
          "password": true
        },
        "errors": {
          "email": false,
          "password": false
        },
        "password": {
          "value": "",
          "strength": 0
        }
      });
    
    
    const { isDarkTheme } = useContext(ThemeContext);

    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setEmailErr(false); 
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

    const toggleTick = () => {
      setTickVisible(!tickVisible);
    };

    const eyeToggle =() =>{
      setPassVisible(!passVisible);
    }

    const buttonStyle ={
       backgroundColor: isDarkTheme ? '#FAFAFA' : '#18181B',
       color: isDarkTheme ? '#18181B' : '#FAFAFA'
     }
    const buttonOther ={
        fontWeight : "400"
    }

    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
      setPwdError(!validPassword.test(newPassword));
      setPwdStrength(getPasswordStrength(newPassword));
    };

    const getPasswordStrength = (password) => {
      let strength = 0;
    
      if (/[A-Z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[@$!%*?&]/.test(password)) strength++; 
      return strength; 
    };

    const getStrengthColor = (strength) => strength > 0 ? '#27272A' : 'lightgray';

    const strengthBarStyle = (index) => ({
      backgroundColor: index <= pwdStrength ? getStrengthColor(index + 1) : 'lightgray',
      height: '5px',
      width: '33%',
      margin: '2px',
      borderRadius :'5px'
    });

  return (
    <>
     
      <div className='signUp-container'>
      <div className="inner-container">
      {step === 1 ? (
        <>
        <div className="sign">
            <Link to="/signup">
            <button className='signUp-btn' style={buttonStyle}>Sign up</button>
            </Link>
         
            <Link to="/signin">
            <button className='signIn-btn' style={buttonOther}>Sign in</button>
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
                        <img src= {Mail}/>
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

          <div className='signup withpass'>

            <div className="title">
              <p>Create an Account</p>
            </div>

          <form className="form" >
              <div className="input">
                  <img src= {Mail}/>
                  <input type="email" placeholder="Pietro@gmail.com" required  value={email} />
              </div>
              <div className="input">
                  <img src= {User}/>
                  <input type="name" placeholder="Username"  />
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
                    <img src={Eye} onClick={eyeToggle}/>
                  </div>
                  {pwdError && <p className='invalid'>Password must be at least 6 characters long and contain at least one letter and one number.</p>}
                    
                  <div className='password-strength'>
    
                    <div className='strength-bars'>
                      {[1, 2, 3].map(index => (
                            <div key={index} style={strengthBarStyle(index)}></div>
                      ))}
                    </div>
                    <div>
                        <p className='forgot-pass'>Password strength</p>
                    </div>
                  
                  </div>
                 
                 <div className='checkbox'>
                      <div className='checkbox-icon' onClick={toggleTick}>
                      {tickVisible && (
                      <img className='check-tick' src={Tick} />
                      )}
                      </div>
                    
                      <p className='tac'>By agreeing this you are accepting the <span className='span-tac'>T&C </span>of ReelX</p>
                </div>
            </div>
           
            <button className="btn">
              Sign Up
            </button>
          </form>
      </div>
       )}
    </div>
  </div>
</>
);
}

export default SignUp

