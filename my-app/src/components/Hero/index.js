import React from 'react';
import Git from '../../assets/images/gitwhite.svg'
import Link from '../../assets/images/linkedwhite.svg'

function Hero() {
    return (
        <section className="hero">
        <div className="hero-inside">
            <h5>Hello</h5>
            <h1>I'm Josh Mitchell</h1>
            <p>| Junior Web Developer | Audio Video Specialist |</p>
            <a href="#about-me" className="hero-btn">MORE ABOUT ME</a>
            <a href="https://github.com/jshmtchll"><img src={Git} alt="link to github" /></a>
            <a href="https://www.linkedin.com/in/jshmtchll/"><img src={Link} alt="link to linkedin" /></a>
        </div>
        
    </section>
    );
  }
  
  export default Hero;
  