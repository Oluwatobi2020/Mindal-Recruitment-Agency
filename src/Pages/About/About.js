import React from 'react';
import './About.css';
import AboutImage1 from '../../components/Cards/images/about-1.jpg';
import AboutImage2 from '../../components/Cards/images/Image 2.jpg';
import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <div className="main">
            <div className="sub--section-heading">
                <p>ABOUT US</p>
            </div> 
            <div className="about-section--1">
                <div className="vision">
                    <h2>OUR VISION</h2>
                    <p>
                        Mindal Recruitment Agency is an organization that strives to serve its flyers with a smile. 
                        Its vision statement is unique because it sees itself not just excelling in profit, 
                        but in outstanding customer service, too. Its vision is possible through its strategy and 
                        can lead its employees to be at the level they work toward.
                    </p>
                </div>

                <div className="vision--image">
                    <img src={AboutImage1} alt="Vision 1" />
                </div>

            </div>

            <div className="about-section--2">

                <div className="vision--image-1">
                    <img src={AboutImage2} alt="Mission 1" />
                </div>
                <div className="vision">
                    <h2>OUR MISSION</h2>
                    <p>
                        Mindal Recruitment creates a network of leaders to provide equal education opportunity
                        to children in need. This organization’s day-to-day work includes helping marginalized
                        students receive the proper education they otherwise wouldn’t have access to. Its vision 
                        statement is what it hopes to see through its efforts — a nation where no child is left behind.
                    </p>
                </div>

            </div>

            <div className="about-section--3">
                <div className="contact-about">
                    <div className="input-section">
                        <h3 >We would like to hear from you</h3>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                        <button type="submit">SEND</button>
                    </div>

                    <div className="email-section">
                        <h3 >You can also reach us with this</h3>
                        <p>Email: helpdesk@mindal.com</p>
                        <p>Phone: 08020319002</p>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default About;