import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Google from '../icons/google.svg'
import Mail from '../icons/mail.svg'

function tab() {
    const [isSignUpActive, setIsSignUpActive] = useState(true);
    const [email, setEmail] = useState('');
    const [step, setStep] = useState(1);

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
        setStep(1);
      };
    
    const handleSignInClick = () => {
        setIsSignUpActive(false);
        setStep(1);
      };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
    const handleContinue = () => {
        if (email) {
          setStep(2);
        }
      };

  return (
    <>
      <Header />
      <div className='signUp-container'>
      <div className="inner-container">
      {step === 1 ? (
            <>
        <div className="sign"> 
            <button className={`signUp-btn ${isSignUpActive ? 'active' : ''}`}onClick={handleSignUpClick}>Sign up</button>
            <button className={`signIn-btn ${!isSignUpActive ? 'active' : ''}`} onClick={handleSignInClick}>Sign in</button>   
        </div> 
            
        <div className='title'>
            <p>Ignite Your Reelxperience</p>
        </div>

        <form className="form">
                <div className='google'>
                <img src={Google}/>
                <p>Continue with google</p>
                </div>
                
                <div className='border'></div>

                <div className='mail-continue'>
                <div className="input">
                <img src= {Mail}/>
                <input type="email" placeholder="Pietro@gmail.com" required  value={email}
                      onChange={handleEmailChange}/>
                </div>
                <button className='btn'onClick={handleContinue} >Continue</button>
                </div>
                
        </form>
        </>
    ): (
        <>
          <div className="title">
            <p>{isSignUpActive ? 'Create an Account' : 'Sign In'}</p>
          </div>

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="input">
              <label>Email</label>
              <input type="email" value={email}  />
            </div>

            {isSignUpActive && (
              <>
                <div className="input">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="input">
                  <label>Password</label>
                  <input type="password" placeholder="Password" required />
                </div>
              </>
            )}

            {!isSignUpActive && (
              <div className="input">
                <label>Password</label>
                <input type="password" placeholder="Password" required />
              </div>
            )}

            <button className="btn">
              {isSignUpActive ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
        </>
      )}
    </div>
  </div>
</>
);
}

export default tab