import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="innerBody">
    <h2>Contact</h2>
    <div className="space">
    <a href="mailto:lai.vivian@gmail.com" alt="Email">
      <i className="contact-fa fa fa-envelope-square" aria-hidden="true"></i>
    </a>
    &nbsp;
    <a href="https://github.com/v-lai" alt="GitHub">
      <i className="devicon devicon-github-plain"></i>
    </a>
    &nbsp;
    <a href="https://linkedin.com/in/laivivian" alt="LinkedIn">
      <i className="contact-fa fa fa-linkedin-square" aria-hidden="true"></i>
    </a>
    &nbsp;
    <a href="https://angel.co/v-lai" alt="AngelList">
      <i className="contact-fa fa fa-angellist" aria-hidden="true"></i>
    </a>
    </div>
  </div>
);

export default Contact;