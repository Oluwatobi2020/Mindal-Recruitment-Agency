import React from 'react';
import './Contact.css';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
    return (
        <div className="main">
            <div className="contact-heading">
                <p>CONTACT US</p>
            </div>

            <div className="details--section">
                <div className="input--details">
                    <div className="input--1">
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>

                    <div className="input--1">
                        <label htmlFor="">Last Name</label>
                        <input type="text" />
                    </div>

                    <div className="input--1">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>

                    <div className="input--1">
                        <label htmlFor="">Mobile Number</label>
                        <input type="number" />
                    </div>

                    <div className="input--1">
                        <label htmlFor="">Message (Please, make it brief and sweet)</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                </div>

                <button>SUBMIT</button>
            </div>

            <Footer/>
        </div>
    )
}

export default Contact;