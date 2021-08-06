/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">

  <a className="navbar-brand" href="#">MyLogo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars}  style={{ color: "#fff" }}/>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto" >
      <li className="nav-item ">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/experience">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/services">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact Me</a>
      </li>

    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar
