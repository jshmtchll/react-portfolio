import React from 'react';
import Gitb from '../../assets/images/gitblack.png'
import Linkb from '../../assets/images/linkedblack.png'
import Email from '../../assets/images/email.png'
import Phone from '../../assets/images/phone.png'


function Contact() {
    return (
        <footer className="contact" id="contact-me">
        <h5>CONTACT</h5>
        <h1>I'd Love To Hear From You.</h1>

        <div className="phone-email">
            <div className="email">
                <img src={Email} alt="" />
                <h5>EMAIL ME AT</h5>
                <a href="mailto:jshmtchll@gmail.com">jshmtchll@gmail.com</a>
            </div>
            <div className="phone">
                <img src={Phone} alt="" />
                <h5>CALL ME AT</h5>
                <a href="tel:+3157673514">(315) 767-3514</a>
            </div>
        </div>
        <div className="icons">
            <a href="https://github.com/jshmtchll"><img src={Gitb} alt="link to github" /></a>
            <a href="https://www.linkedin.com/in/jshmtchll/"><img src={Linkb} alt="link to linkedin" /></a>
        </div> 
        

    </footer>
    );
  }
  
  export default Contact;