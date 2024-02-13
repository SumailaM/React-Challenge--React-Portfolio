import React from 'react';
import './Footer.css'; // Import Footer styles

function Footer() {
  return (
    <footer>
      <p>Connect with me:</p>
      <div className="social-icons">
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
        <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
