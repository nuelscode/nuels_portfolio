/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
/* import { Home } from "./Home";
import { About } from "./About";
import { Experience } from "./Experience";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { NoMatch } from "./NoMatch"; */

export const Contact = () =>(
<>
  <div className="contact">
        <h1>Contact Me!</h1>
        <p className="sub-title">If you need to create one</p> 
      
          <div className="contact-container">
            <div className="contact-info">
            <h4>
                Contact Information
              </h4>
              <p>Fill up the form and I will get back to you within 24hours </p>
              <div className="icon-text">
              <FontAwesomeIcon class="fas"  icon={faPhone}  />
                <span>+234(0) 813-492-9521</span>
              </div>
              <div className="icon-text">
              <FontAwesomeIcon class="fas" icon= {faEnvelope} />
                <span>chinagorom.onwubiko@gmail.com</span>
              </div>
              <div className="icon-text">
              <FontAwesomeIcon class="fas"  icon={faMapMarkerAlt}   />
                <span>Estate Drive Lekki Chevron</span>
              </div>

              <div className="social-media">
              <a href="#" className="icon-social">
                <FontAwesomeIcon  icon={faFacebook}  style={{ color: "white"}}  />
                </a>
                <a href="#" className="icon-social">
                <FontAwesomeIcon  icon={faInstagram}  style={{ color: "white"}} />
                </a>
                <a href="#" className="icon-social">
                <FontAwesomeIcon  icon={faTwitter} style={{ color: "white"}}  />
                </a>
                <a href="#" className="icon-social">
                <FontAwesomeIcon  icon={faLinkedin} style={{ color: "white"}}  />
                </a>
              </div>
            </div>

            <form>
              <div className="col">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input  type="text" />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>E-Mail</label>
                  <input type="email" />
                </div>
                <div className="form-group">
                  <label>Phone #</label>
                  <input  type="tel" />
                </div>
              </div>
              <div className="col">
                <div className="form-group solo">
                  <label>What Services Do You Need?</label>
                  <div id="radio-buttons">
                  <div className="radio-button">
                  <input type="radio" id="radionavigation" name="type" value="navigation" /><label for="radionavigation"> Navigation App</label>
                  </div>
                  <div className="radio-button">
                  <input type="radio" id="radiohybrid"  name="type" value=" hybrid" /><label  for="radiohybrid">Hybrid Mobile App</label>
                  </div>
                  <div className="radio-button">
                  <input type="radio" id="radiolandingpage" name="type" value=" landingpage"   /><label for="radiolandingpage" >Landing Page</label>
                  </div>
                  <div className="radio-button">
                  <input type="radio" id="radioecommerce" name="type" value=" ecommerce"  /><label for="radioecommerce">E-Commerce</label>
                  </div>
                </div>
                </div>
                </div>
                <div className="col">
                <div className="form-group solo ">
                  <label>Message</label>
                  <textarea></textarea>
                </div>
                </div>
                <div className="col">
                <div className="form-group right">
                    <button className="primary">Send Message</button>
                </div>
                </div>

            </form>

          </div>
          </div>
    </>
  )
  