import React from 'react';
import '../styles/Blog.css';

    function Blog() {
      return (
        <div className="home-container">     <section className="competitive-advantage">
        <h2>Our Competitive Advantage</h2>
        <p>This section provides key benefits of using our platform to enhance your learning experience.</p>
        <div className="advantage-grid">
          <div className="advantage-card blue">
            <div className="icon">📚</div>
            <h3>Personalized Learning</h3>
            <p>Offer tailored learning experiences through AI and machine learning to cater to individual student needs.</p>
          </div>
          <div className="advantage-card pink">
            <div className="icon">💰</div>
            <h3>Affordability</h3>
            <p>Provide high-quality education at an affordable price point, making it accessible to a broader audience.</p>
          </div>
          <div className="advantage-card yellow">
            <div className="icon">🤝</div>
            <h3>Industry Partnerships</h3>
            <p>Collaborate with well-known companies and institutions to offer accredited courses and certifications.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Others Say About Us</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Neura Notes revolutionized my learning journey! Highly recommended for students and educators alike."</p>
      
            <h3>Sarah Johnson</h3>
            <p>8th Grade English Teacher</p>
          </div>
          <div className="testimonial-card">
            <p>"The personalized notes and interactive content make studying enjoyable and effective."</p>
            
            <h3>Michael Smith</h3>
            <p>College Student</p>
          </div>
          <div className="testimonial-card">
            <p>"An invaluable platform that has helped me excel academically and stay organized."</p>
            
            <h3>Emma Davis</h3>
            <p>High School Teacher</p>
          </div>
        </div>
      </section>
    </div>
  );
}

    export default Blog;
