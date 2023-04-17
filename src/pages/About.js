// About.js

import React from 'react';
import './About.css';
import profileImg from '../Assets/images/CELINE.png';

const About = () => {
  return (
    <div className="about">
      <img className="profile-picture" src={profileImg} alt="Ben Espino" />
      <h2>About Me</h2>
      <p>
        Hi, my name is Ben Espino. I'm a web developer with a passion for creating modern and user-friendly
        applications. I have experience working with various web technologies, including React, JavaScript, HTML, and
        CSS. I enjoy working on challenging projects and learning new skills along the way.
      </p>
      <p>
        When I'm not coding, you can find me exploring the great outdoors, playing video games, or spending time with
        friends and family.
      </p>
    </div>
  );
};

export default About;
