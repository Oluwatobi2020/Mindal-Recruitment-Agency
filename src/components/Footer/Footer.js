import React from 'react';
import './Footer.css';
import FooterLogo from "../../components/Cards/images/Logo-2.png";

const Footer = () => {
    return (
        <div className="section--3">
        <div className="footer-image">
          <img src={FooterLogo} alt="footer-logo" />
        </div>

        <div className="sub-footer">
          <div className="sub-footer--1">
            <h3>Quick Links</h3>
            <div className="section-footer">
              <p>About Us</p>
              <p>Looking For Job</p>
              <p>Recruiting Talent</p>
            </div>
          </div>
          <div className="section-footer--1">
            <p>Job Search</p>
            <p>Submit Vacancy</p>
            <p>Latest Jobs</p>
          </div>

          <div className="section-footer--2">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </div>

          <div className="sub-footer--2">
            <h3>Get In Touch</h3>
            <div className="section-footer--3">
              <p>Email: helpdesk@mindal.com</p>
              <p>Looking For Job</p>
              <p>Phone: 08023903891</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer
