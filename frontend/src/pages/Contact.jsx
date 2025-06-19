import React from 'react';
import '../styles/Contact.css';

function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:dakshtyagi300@gmail.com';
  };

  return (
    <div className="contact-page">
      <section className="newsletter-section">
        <div className="newsletter-content">
          
          <h2>Get the latest updates</h2>
          <p>Sign up for our newsletter</p>
          <div className="newsletter-input">
            
            <input type="email" placeholder="Email" />
            <button className="send-button">Send</button>
          </div>
          <p>
            By signing up to our newsletter you agree to our{' '}
            <a href="#terms">Terms of Service</a> and{' '}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, please reach out to us:</p>
        <div className="contact-options">
          <button className="email-button" onClick={handleEmailClick}>
            Email Us
          </button>
          <p>
            Or call our helpline: <a href="tel:9874569854">9874569854</a>
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">
          <h3>Neura Notes</h3>      
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Products</h4>
            <p>Overview</p>
            <p>Solutions</p>
            <p>Pricing</p>
            <p>Customers</p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <p>About</p>
            <p>Investor Relations</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <p>Contact</p>
            <p>Documentation</p>
            <p>Chat</p>
            <p>FAQ</p>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Settings</p>
          </div>
        </div>
        
        
      </footer>
    </div>
  );
}

export default Contact;

