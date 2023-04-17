import React from 'react';
import './Portfolio.css';
import todayDashImg from '../Assets/images/todaydash.png';
import vgtDashImg from '../Assets/images/vgtdash.png';
import lifImg from '../Assets/images/lif.png';

const Portfolio = () => {
  return (
    <div>
      <section className="intro">
        <p>Here are some projects I have worked on!:</p>
      </section>
      <section className="projects">
        <div className="project">
          <h2>Project 1: Today</h2>
          <img src={todayDashImg} alt="Project 1: Today" />
          <p>A single view app that allows the user to look at the weather and plan out their day.</p>
          <a href="https://github.com/CarleeMarie/Today" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h2>Project 2: Video Game Tracker</h2>
          <img src={vgtDashImg} alt="Project 2: Video Game Tracker" />
          <p>A weather app that fetches data from an API and displays the current weather and forecast.</p>
          <a href="https://github.com/eSTee3/Video-Game-Tracker" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Project 3: Life in Focus</h3>
          <img src={lifImg} alt="Project 3: Life in Focus" />
          <p>A mental health first journal aimed to encourage users to write short journal entries that focus on the positive aspects of their life.</p>
          <a href="https://github.com/ampatte/LifeInFocus" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
