import React from 'react';
import './Footer.css';
import mailboxImg from '../assets/Mailbox1.png';
import airplaneImg from '../assets/Airplane.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={mailboxImg} alt="mailbox" className="Mailbox" />
        <img src={airplaneImg} alt="airplane" className="Airplane" />

        <div className="footer-text">
          <h3 className="footer-title">My mailbox <br />
            <span className="italic">is always open!</span>
          </h3>

            <div className="footer-links">
              <a href="mailto:taylor.chan@uwaterloo.ca">Email ↗</a>
              <a href="https://www.linkedin.com/in/taylorachan/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>

            <div className="footer-contact">
            <p className="footer-copyright">Taylor Chan — © 2026</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;