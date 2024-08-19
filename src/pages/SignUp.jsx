import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Google from '../icons/google.svg'
import Mail from '../icons/mail.svg'
import User from '../icons/user.svg'
import Lock from '../icons/password-lock.svg'
import Eye from '../icons/password-eye.svg'
import Tick from '../icons/tick.svg'

function SignUp() {
    const [signUpObj, setSignUpObj] = useState({
      email: "",
      step: 1,
      name:"",
      visibility: {
        tick: true,
        password: true,
      },
      errors: {
        email: false,
        password: false,
        name: false
      },
      password: {
        value: "",
        strength: 0,
      },
      validation:{
        email: new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
        password: new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$')
      }
    });
   
    const handleEmailChange = (e) => {
      setSignUpObj((prev) => ({ ...prev, email: e.target.value, errors: { ...prev.errors, email: false } }));
    };
 
    const handleNameChange = (e) => {
      setSignUpObj((prev) => ({ ...prev, name: e.target.value, errors: { ...prev.errors, name: false } }));
    };
    
    const validateEmail = () => {
      const { email } = signUpObj;
      if (!signUpObj.validation.email.test(email)) {
        setSignUpObj((prev) => ({ ...prev, errors: { ...prev.errors, email: true } }));
        return false;
      }
      return true;
    };
   
    const handleEmailContinue = (e) => {
      e.preventDefault();
      if (signUpObj.email === "") {
        setSignUpObj((prev) => ({ ...prev, errors: { ...prev.errors, email: "required" } }));
      } else if (validateEmail()) {
        setSignUpObj((prev) => ({ ...prev, step: 2 }));
      }
    };

    const toggleTick = () => {
      setSignUpObj((prev) => ({ ...prev, visibility: { ...prev.visibility, tick: !prev.visibility.tick } }));
    };

    const eyeToggle =() =>{
      setSignUpObj((prev) => ({ ...prev, visibility: { ...prev.visibility, password: !prev.visibility.password } }));
    }

    const handlePasswordChange = (e) => {
      setSignUpObj((prev) => ({ ...prev, password: e.target.value, errors: { ...prev.errors, password: false } }));
      const newPassword = e.target.value;
      setSignUpObj((prev) => ({
        ...prev,
        password: {
          value: newPassword,
          strength: getPasswordStrength(newPassword),
        },
      }));
    };

    const getPasswordStrength = (password) => {
      let strength = 0;
    
      if (/[A-Z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[@$!%*?&]/.test(password)) strength++; 
      return strength; 
    };

    const handleSignUp = (e) => {
      e.preventDefault();
      if(signUpObj.name===""){
        setSignUpObj((prev) => ({ ...prev, errors: { ...prev.errors, name :"required"}}));
      }
      if (signUpObj.password.value === "") {
        setSignUpObj((prev) => ({ ...prev, errors: { ...prev.errors, password: "required" } }));
      }
      else if (!signUpObj.validation.password.test(signUpObj.password.value)) {
        setSignUpObj((prev) => ({ ...prev, errors: { ...prev.errors, password: true } }));
      } 
    };

  return (
    <>
     
      <div className='signUp-container'>
      <div className="inner-container">
      {signUpObj.step === 1 ? (
        <>
        <div className="sign">
            <Link to="/signup">
              <button className="buttonStyle sign-btn">Sign up</button>
            </Link>
            <Link to="/signin">
              <button className="buttonOther sign-btn">Sign in</button>
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
                        <input type="text" placeholder="Pietro@gmail.com" value={signUpObj.email}
                         onChange={handleEmailChange}/>
                    </div>
                    {signUpObj.errors.email === "required" && <p className="invalid">Email is required.</p>}
                    {signUpObj.errors.email=== true &&  <p className='invalid'>Your email is invalid.</p>}
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

          <form className="form" onSubmit={handleSignUp}>
              <div className="input">
                  <img src= {Mail}/>
                  <input type="text" placeholder="Pietro@gmail.com" value={signUpObj.email} />
              </div>
              <div className='mail-input'>
              <div className="input">
                  <img src= {User}/>
                  <input type="name" placeholder="Username" value={signUpObj.name} onChange={handleNameChange} />
              </div>
              {signUpObj.errors.name === "required" && <p className="invalid">Name is required.</p>}

              </div>
             
              <div className='password'>
                  <div className="input pass-input">
                    <div className='pass-icon-text'>
                        <img src= {Lock}/>
                        <input 
                            type={signUpObj.visibility.password ? 'text' : 'password'} 
                            placeholder="Password" 
                            value={signUpObj.password.value} 
                            onChange={handlePasswordChange} 
                        />
                    </div>
                    <img src={Eye} onClick={eyeToggle}/>
                  </div>
                  {signUpObj.errors.password === "required" && <p className="invalid">Password is required.</p>}
                  {signUpObj.errors.password===true && <p className='invalid'>Password must be at least 6 characters long 
                    and contain at least one letter and one number.</p>}

                  <div className='password-strength'>
                    <div className='strength-bars'>
                      {[1, 2, 3].map(index => (
                        <div key={index} className={index <= signUpObj.password.strength ? 'active' : 'inactive'}></div>
                      ))}
                    </div>
                    <div>
                        <p className='forgot-pass'>Password strength</p>
                    </div>
                  
                  </div>
                 
                 <div className='checkbox'>
                      <div className='checkbox-icon' onClick={toggleTick}>
                      {signUpObj.visibility.tick && (
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

