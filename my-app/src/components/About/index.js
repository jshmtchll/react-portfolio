import React from 'react';
import Me from '../../assets/images/portrait.jpg'
import Resume from '../../assets/resume.pdf'


function About() {
    return (
        <section class="about-me" id="about-me">
        <div class="about-me-content">
            <h5>ABOUT</h5>
            <h1>Let me introduce myself.</h1>
            <img src={Me} alt="pic of me" />
            <p style={{display: 'inline-block', paddingTop: "20px"}}>
            I am a Jr. full stack web developer leveraging an experienced background in customer service and live events to build a more intuitive user friendly experience on the web.
            </p>
            <a href={Resume} download={Resume} target="_blank" rel="noreferrer" class="about-btn">DOWNLOAD CV</a>
        </div>
    </section>
    );
  }
  
  export default About;
  