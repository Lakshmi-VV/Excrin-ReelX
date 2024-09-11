import React, { useContext } from "react";
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";
import Icon from "./Icons.jsx";
import { ThemeContext } from "../contexts/themeContext.jsx";

function Header() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="header">
        {isDarkTheme ? (
          <img src={logoDark} height={"38px"} />
        ) : (
          <img src={logoLight} height={"38px"} />
        )}

        <div className="header__theme-help">
          <div className="header-theme">
            {isDarkTheme ? (
              <Icon icon="sun" onClick={toggleTheme} />
            ) : (
              <Icon icon="moon" onClick={toggleTheme} />
            )}
          </div>
          <div className="header-help">
            <Icon icon="help-square" className="svg-icon-header" />
            <span className="help-text">Help</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
