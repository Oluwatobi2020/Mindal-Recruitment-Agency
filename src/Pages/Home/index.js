import React from "react";
import "./index.css";
import LandingPageImage from "../../components/Cards/images/Landing-page.png";
import Items from "../../components/Cards/Card";
import JobSeekersImage from "../../components/Cards/images/job-seekers.jpg";
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="main">
      <div className="sub--main">
        <div className="first--image">
          <img src={LandingPageImage} alt="Landing Page" />
        </div>

        <div className="first-section">
          <div className="main-text">
            <h3>
              We make recruitment <br />
              personal, it's never a job.
            </h3>
            <p>
              Creating dynamic solutions demands a range of attributes
              <br />
              and experience. Working together, we can solve problems
              <br />
              faster to achieve collective success and deliver tomorrow's
              reality.
            </p>
            <div className="action-button">
              <button className="employee-button">JOB SEEKER</button>
              <button className="employer-button">EMPLOYER</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="sub--section-heading">
          <p>SECTORS</p>
        </div>

        <div className="sub-section--1">
          <Items />
        </div>

        <div className="section--2">
          <div className="seeker-title">
            <p>JOB SEEKERS</p>
          </div>

          <div className="job-seeker">
            <div className="job-seekers--image">
              <img src={JobSeekersImage} alt="Job Seeker" />
            </div>

            <div className="job-seeker-text">
              <p>
                We understand the importance of finding the right job for you.
                We take the <br />
                time to listen to our prospective candidates and understand
                exactly what you are <br />
                looking for, working closely with you to ensure your next career
                move is the right one.
              </p>
              <p>
                Feel free to call for a confidential discussion with a member of
                our team on <br />
                <span>
                  <b>08012309345.</b>
                </span>
                You can also register your details to receive updates of new
                vacancies. <br />
                Be assured, we will only contact you by mail with relevant job
                vacancies, and the <br />
                information provided is not shared with any other parties
                without your prior consent.
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
