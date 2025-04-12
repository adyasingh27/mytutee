import React from 'react';
import './App.css';
import logoImage from './assets/logo.png';
import globeImage from './assets/globe-cap.jpeg';
import gradCapIcon from './assets/grad-cap-icon.png';
import cogIcon from './assets/cog-icon.png';
import lightbulbIcon from './assets/lightbulb-icon.png';
import globeIcon from './assets/globe-icon.png';
import founderImage from './assets/founder-image.jpeg';


function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <img src={logoImage} alt="myTutee" />
        </div>
        <nav className="navigation">
          <div className="nav-links">
            <a href="#experts">Board of Experts</a>
            <a href="#teach">Teach with Us</a>
          </div>
          <div className="auth-buttons">
            <button className="login-btn">Log in</button>
            <button className="signup-btn">Student Sign Up</button>
          </div>
        </nav>
      </header>
      
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering<br />
            Students,<br />
            Transforming<br />
            Futures
          </h1>
          <div className="hero-image">
            <img src={globeImage} alt="Globe with graduation cap" />
          </div>
        </div>
      </section>

      
      <section className="mission-section">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-text">
          We Connect Students To Quality Education With Engaging,<br />
          Accessible, And Customized Learning, Guiding You Through Skill<br />
          Mastery And Exam Prep.
        </p>
      </section>

      <section className="features-section">
  <div className="features-grid">
    <div className="feature-card">
      <div className="feature-icon">
        <img src={gradCapIcon} alt="Graduation Cap" />
      </div>
      <h3 className="feature-title">Expert Instructors</h3>
      <p className="feature-description">Learn from top educators and industry leaders.</p>
    </div>
    
    <div className="feature-card">
      <div className="feature-icon">
        <img src={cogIcon} alt="Customization Gear" />
      </div>
      <h3 className="feature-title">Customized learning</h3>
      <p className="feature-description">Courses tailored to your unique learning needs.</p>
    </div>
    
    <div className="feature-card">
      <div className="feature-icon">
        <img src={lightbulbIcon} alt="Light Bulb" />
      </div>
      <h3 className="feature-title">Interactive Courses</h3>
      <p className="feature-description">Interactive content with hands-on practice.</p>
    </div>
    
    <div className="feature-card">
      <div className="feature-icon">
        <img src={globeIcon} alt="Globe" />
      </div>
      <h3 className="feature-title">Worldwide Network</h3>
      <p className="feature-description">Connect and grow with a global community of learners.</p>
    </div>
  </div>
  
  <div className="about-section">
    <h2 className="about-title">Who we are?</h2>
    <p className="about-text">
      Education is evolving, and students struggle to attend coaching due to
      busy schedules. MyTutee offers a flexible online platform for personalized
      tutoring and academic support, accessible anytime from home.
    </p>
    <p className="about-text">
      Our experienced faculty uses advanced tools to create a real classroom
      experience. With over 3–4 years of online teaching expertise, MyTutee's
      chief mentor has led the way since 2006. We also provide specialized
      courses for UG and PG admissions abroad in partnership with Edustori.
    </p>
  </div>
</section>

<section className="founder-section">
  <div className="founder-content">
    <h2 className="founder-title">Our Founder</h2>
    <p className="founder-text">
      The founder of MyTutee is a pioneer in online education, mentoring students globally since 2006. With 28+ years of teaching experience, he holds a B.Sc, B.Ed, and MBA and has taught various curricula, including CBSE, ICSE, IGCSE, and IB, specializing in mathematics. A former FIITJEE and Career Launcher faculty, he has been training students for SAT, GRE, GMAT (since 2005) and AP Calculus (since 2010). He is also an expert in foreign university applications, with students now studying at the world's top 200 universities. His vision drives MyTutee to provide high-quality, accessible education to students worldwide.
    </p>
  </div>
  <div className="founder-image">
    <img src={founderImage} alt="Priya Varat Singh" />
    <h3 className="founder-name">Priya Varat Singh</h3>
  </div>
</section>

<section className="cta-section">
  <h2 className="cta-title">Start Your Learning Journey Today!</h2>
  <p className="cta-text">
    Join thousands of students and get expert-led, personalized learning to achieve your academic goals.
  </p>
</section>

<footer className="footer">
  <div className="footer-logo">
    <img src="/mytutee-footer-logo.png" alt="myTutee" />
  </div>
  <div className="footer-contact">
    <h3>Contact Us</h3>
    <p>query@mytutee.com</p>
    <p>+91 99103 44403</p>
  </div>
  <div className="footer-company">
    <h3>Company</h3>
    <p>About us</p>
  </div>
</footer>
    </div>

  );
}

export default App;
