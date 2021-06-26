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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Illum numquam voluptate labore debitis sint ut dolorum. 
                In ex doloribus repellat porro dolorem velit nihil aliquam, 
                temporibus, tenetur harum consequatur architecto. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Quidem harum, magnam alias laborum
                 vitae at ipsa fuga aspernatur. Similique iusto quam tempore
                  sit reprehenderit natus voluptatum excepturi velit. Aliquam, quas.
            </p>
            <a href={Resume} download={Resume} target="_blank" rel="noreferrer" class="about-btn">DOWNLOAD CV</a>
        </div>
    </section>
    );
  }
  
  export default About;
  