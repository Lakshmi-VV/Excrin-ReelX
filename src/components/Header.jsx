import React, {useContext } from 'react';
import logoLight from '../images/logo-light.png'
import logoDark from '../images/logo-dark.png'
import Icon from './icons.jsx';
import { ThemeContext } from '../contexts/themeContext.jsx'
function Header() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className='header'>

          {isDarkTheme ?  
            <>
              <img src={logoDark} height={"32px"} onClick={toggleTheme} />
              <div className='header-help'>
                  <Icon icon="help-square" className="svg-icon"/>
                  <p  className='help'>Help</p>
              </div>
            </>
          :
            <>
              <img src={logoLight} height={"32px"} onClick={toggleTheme}/>
              <div className='header-help'>
                <Icon icon="help-square" className="svg-icon"/>
                <p className='help'>Help</p>
              </div>
            </>
          }
      </div>
    </>
  )
}

export default Header

