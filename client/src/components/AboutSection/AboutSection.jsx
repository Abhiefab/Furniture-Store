import React from "react";
import "./AboutSection.css";
import aboutImg from "../../assets/LivingRoom2.jpg"; // change image if you want

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-inner container">
        
        
        <div className="about-image">
          <img src={aboutImg} alt="Customize your living space" />
        </div>

        
        <div className="about-content">
          <span className="about-kicker">CRAFT YOUR PERFECT HOME</span>

          <h2 className="about-title">
            Customize Your Living <br /> Space
          </h2>

          <p>
            At Furniq, we believe that your home should be a reflection of your
            unique personality and style. That's why we offer a wide range of
            high-quality furniture and decor options that allow you to create
            your dream home.
          </p>

          <p>
            Our team of skilled craftsmen work tirelessly to bring your vision
            to life, ensuring that your home reflects your personality and meets
            your functional needs.
          </p>

          <a href="/about" className="about-link">
            <span className="circle">→</span>
            Read More
          </a>
        </div>

      </div>
    </section>
  );
}
