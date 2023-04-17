// Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out to me through any of the following methods:</p>
      <ul>
        <li>Email: iambenespino@gmail.com</li>
        <li>Phone: (612) 400-2309</li>
        <li>
          LinkedIn: <a href="https://www.linkedin.com/in/ben-espino" target="_blank" rel="noreferrer">linkedin.com/in/ben-espino</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/miraisekai" target="_blank" rel="noreferrer">github.com/miraisekai</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;