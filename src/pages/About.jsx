import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About Gurunanak Boys PG</h1>
        <p>Your trusted home away from home</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Gurunanak Boys PG is more than just a hostel — it’s a safe and
            comfortable home for students and working professionals. We provide
            a clean, secure, and well-maintained environment so that our
            residents can focus on their goals and dreams without worry.
          </p>
          <p>
            Located in prime areas like <strong>Jaipur, Kota, Sikar</strong> and{" "}
            <strong>Indore</strong>, we offer the perfect balance of comfort,
            affordability, and community living.
          </p>
        </div>

        <div className="about-image">
          <i className="fa-solid fa-building"></i>
        </div>
      </div>

      <div className="about-features">
        <h2>Why Choose Us</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fa-solid fa-bed"></i>
            <h3>Comfortable Rooms</h3>
            <p>Spacious and well-ventilated rooms designed for a peaceful stay.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-wifi"></i>
            <h3>High-Speed WiFi</h3>
            <p>24×7 high-speed internet to help you stay connected and study better.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-shield-halved"></i>
            <h3>Secure Environment</h3>
            <p>Round-the-clock security ensuring complete safety of residents.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-utensils"></i>
            <h3>Healthy Meals</h3>
            <p>Nutritious and hygienic food prepared fresh every day.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-bolt"></i>
            <h3>24×7 Electricity & Water</h3>
            <p>Uninterrupted power and RO water supply for daily comfort.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-people-group"></i>
            <h3>Friendly Community</h3>
            <p>A homely environment where students grow together.</p>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <h2>Be a Part of Our Community</h2>
        <p>
          We welcome students and professionals looking for a comfortable,
          secure, and affordable place to live. Join Gurunanak Boys PG and make
          it your second home.
        </p>
        <button className="cta-btn" onClick={()=> navigate("/enquire")}>Enquire Now</button>
      </div>
    </div>
  );
};

export default About;
