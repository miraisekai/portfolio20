// Resume.js

import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <h3>Ben Espino - Web Developer</h3>
      <p>Email: ben.espino@example.com | Phone: (123) 456-7890</p>
      <hr />

      <h3>Education</h3>
      <h4>University of Minnesota Bootcamp</h4>
      <p>Fullstack Certificate | Graduated April 2023</p>
      <h4>Minneapolis College</h4>
      <p>Graduated May 2022</p>

      <h3>Skills</h3>
      <ul>
        <li>Proficient in JavaScript, HTML, CSS</li>
        <li>Experienced in React, Node.js, Express</li>
      </ul>

      <h3>Experience</h3>
      <h4>Target - General Merchandise</h4>
      <p>May 2019 - Present</p>
      <ul>
       
      </ul>

      <h3>Projects</h3>
      <h4>Project 1: Today</h4>
      <p>
        A single view app that allows the user to look at the weather and plan out their day.
        <a href="https://github.com/CarleeMarie/Today" target="_blank" rel="noreferrer">View on GitHub</a>
      </p>
      <h4>Project 2: Video Game Tracker</h4>
      <p>
        A weather app that fetches data from an API and displays the current weather and forecast.
        <a href="https://github.com/eSTee3/Video-Game-Tracker" target="_blank" rel="noreferrer">View on GitHub</a>
      </p>
      <h4>Project 3: Life in Focus</h4>
      <p>
        A mental health first journal aimed to encourage users to write short journal entries that focus on the positive aspects of their life.
        <a href="https://github.com/ampatte/LifeInFocus" target="_blank" rel="noreferrer">View on GitHub</a>
      </p>
    </div>
  );
};

export default Resume;
