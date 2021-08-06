/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>WEB DEVELOPMENT AND WEBSITE PROMOTIONS</h1>
        <Typed 
            className="typed-text"
            strings={[ "Web Design", "Mobile App Development",  "Facebook Ads SMM", "Google Ads"]}
            typeSpeed={40}
            backSpeed={60}
            loop
        />
        <a href="/contact" className="btn-main-offer">contact me</a>

      </div>

    </div>
  )
}

export default Header
