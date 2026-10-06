import React, { useEffect, useRef, useState } from "react";

import { Canvas } from "@react-three/fiber";

import { Float, OrbitControls } from "@react-three/drei";

import {
  FaCode,
  FaBullhorn,
  FaPalette,
  FaVideo,
  FaRobot,
  FaLaptopCode,
  FaStore,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const heroImages = [
  "/images/banner1.jpg",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1920"
];


function FloatingObjects() {
  return (
    <>
      {/* Laptop */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[4, 0.2, 3]} />
          <meshStandardMaterial color="#fffaf5" />
        </mesh>
      </Float>

      {/* AI Sphere */}
      <Float speed={3} rotationIntensity={2}>
        <mesh position={[4, 2, 1]}>
          <sphereGeometry args={[1.2, 64, 64]} />
          <meshStandardMaterial
            color="#ff6b35"
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      {/* Code Card */}
      <Float speed={2} rotationIntensity={1}>
        <mesh position={[-4, 2, 0]}>
          <boxGeometry args={[2.5, 1.6, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </Float>

      {/* Marketing Chart */}
      <Float speed={2} rotationIntensity={1}>
        <mesh position={[3, -2, 0]}>
          <boxGeometry args={[2, 2, 0.5]} />
          <meshStandardMaterial color="#ff8b57" />
        </mesh>
      </Float>
    </>
  );
}


const Main = () => {

  const sliderRef = useRef();

  const [currentSlide, setCurrentSlide] = useState(0);

const contactSectionRef = useRef(null);
const [contactVisible, setContactVisible] = useState(false);

useEffect(() => {
  const section = contactSectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setContactVisible(true);

        observer.unobserve(section);
      }
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);

  return () => {
    observer.disconnect();
  };
}, []);
  return (

    <>


      {/* hero section */}

      <section className="hero-section">

        <img
          key={currentSlide}
          src={heroImages[currentSlide]}
          alt="DigiVerse Academy Banner"
          className="hero-banner-image"
        />


        {/* HERO DOTS */}

        <div className="hero-dots">

          {heroImages.map((image, index) => (

            <button
              key={index}
              type="button"
              className={`hero-dot ${
                currentSlide === index ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to banner ${index + 1}`}
            ></button>

          ))}

        </div>

      </section>

{/* about section  */}


<section className="about-section">
  <div className="container">
    <div className="row align-items-center">

      {/* Left Image */}
      <div className="col-lg-6">
        <div className="about-image-box">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
            alt="Digital Skills"
            className="about-image"
          />

          <div className="experience-badge">
  <div className="experience-content">
    <h2>10+</h2>
    <p>Years of Experience</p>
  </div>
</div>
        </div>
      </div>

      {/* Right Content */}
      <div className="col-lg-6">

        <span className="about-subtitle">
          ABOUT DIGIVERSE ACADEMY
        </span>

        <h2 className="about-title">
          Learn Future Ready <br />
          Digital Skills
        </h2>

        <p className="about-text">
          At Digiverse Academy, we are powered by experienced
          professionals dedicated to shaping future-ready careers.
          Our trainers provide practical knowledge, industry-level
          projects and real-world learning experiences.
        </p>

        <ul className="about-list">
          <li>✓ Web Development</li>
          <li>✓ Software Development</li>
          <li>✓ Digital Marketing</li>
          <li>✓ Graphics & Video Editing</li>
          <li>✓ AI Tools Training</li>
        </ul>

        <button className="about-btn">
          Learn More →
        </button>

      </div>

    </div>
  </div>
</section>





{/* =========================================================
    COURSES SECTION
========================================================= */}
<section className="courses-section">

  <div className="container">

    {/* =========================
        SECTION TITLE
    ========================= */}

    <div className="section-title text-center">

      <span>OUR COURSES</span>

      <h2>What We Offer</h2>

    </div>


    {/* =========================
        COURSES SLIDER
    ========================= */}

    <div
      className="courses-slider"
      ref={sliderRef}
    >


      {/* =====================================================
          CARD 1
      ===================================================== */}

      <div className="course-card">

        <div className="course-image">

         <img
  src="https://materialdepot.elisava.net/static/images/info/taller_grafico.jpg"
  alt="Design Studio"
/>

        </div>


        <div className="course-content">

          <span className="course-number">
            01.
          </span>

          <h3>
            Graphics & Video Editing
          </h3>

          <p>
            Learn Photoshop, Illustrator,
            CorelDraw, Premiere Pro and
            professional video editing.
          </p>

          <a href="/">
            Explore Course
            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>


      {/* =====================================================
          CARD 2
      ===================================================== */}

      <div className="course-card">

        <div className="course-image">
<img
  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  alt="Digital Marketing Course"
/>

        </div>


        <div className="course-content">

          <span className="course-number">
            02.
          </span>

          <h3>
            Digital Marketing
          </h3>

          <p>
            SEO, Google Ads, Social Media
            Marketing and Performance
            Marketing Training.
          </p>

          <a href="/">
            Explore Course
            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>


      {/* =====================================================
          CARD 3
      ===================================================== */}

      <div className="course-card">

        <div className="course-image">

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
            alt="Web Development"
          />

        </div>


        <div className="course-content">

          <span className="course-number">
            03.
          </span>

          <h3>
            Web Development
          </h3>

          <p>
            HTML, CSS, JavaScript,
            React, Node.js, Express
            and MongoDB.
          </p>

          <a href="/">
            Explore Course
            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>


      {/* =====================================================
          CARD 4
      ===================================================== */}

      <div className="course-card">

        <div className="course-image">

   <img
  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
  alt="Mobile App Development"
/>
        </div>


        <div className="course-content">

          <span className="course-number">
            04.
          </span>

          <h3>
            Software Development
          </h3>

          <p>
            Programming, APIs,
            Databases and
            Industry Projects.
          </p>

          <a href="/">
            Explore Course
            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>


      {/* =====================================================
          CARD 5
      ===================================================== */}

      <div className="course-card">

        <div className="course-image">

    <img
  src="https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1200&q=80"
  alt="AI Learning"
/>
        </div>


        <div className="course-content">

          <span className="course-number">
            05.
          </span>

          <h3>
            AI Tools Master Class
          </h3>

          <p>
            ChatGPT, Gemini,
            AI Automation and
            Prompt Engineering.
          </p>

          <a href="/">
            Explore Course
            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>


      {/* =====================================================
          CARD 6
      ===================================================== */}

      <div className="course-card">

        <div className="course-image">

          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200"
            alt="Ecommerce"
          />

        </div>


        <div className="course-content">

          <span className="course-number">
            06.
          </span>

          <h3>
            E-Commerce Marketplace Master Course
          </h3>

          <p>
            Amazon, Flipkart,
            Meesho Store Setup
            and Product Listing.
          </p>

          <a href="/">
            Explore Course
            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>


    </div>


    {/* =====================================================
        COURSE NAVIGATION
    ===================================================== */}

    <div className="course-nav">

      {/* PREVIOUS */}

      <button
        className="course-arrow"
        type="button"
        aria-label="Previous courses"
        onClick={() => {

          sliderRef.current.scrollBy({
            left: -350,
            behavior: "smooth",
          });

        }}
      >

        <i className="fa-solid fa-chevron-left"></i>

      </button>


      {/* NEXT */}

      <button
        className="course-arrow"
        type="button"
        aria-label="Next courses"
        onClick={() => {

          sliderRef.current.scrollBy({
            left: 350,
            behavior: "smooth",
          });

        }}
      >

        <i className="fa-solid fa-chevron-right"></i>

      </button>

    </div>

  </div>

</section>

{/* =========================
    WHY CHOOSE US
========================= */}
<section className="why-section">

  <div className="container">

    <div className="why-wrapper">

      {/* =========================
          LEFT SIDE IMAGES
      ========================== */}
      <div className="why-images">

        {/* Main Web Development Image */}
        <div className="why-image-main">
<img
  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
  alt="Leadership Training"
/>

        </div>


        {/* Second AI Image */}
       {/* Second Digital Marketing Image */}
<div className="why-image-small">
<img
  src="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg"
  alt="Academy Students"
/>
  <div className="image-icon">
    <i className="fa-solid fa-bullhorn"></i>
  </div>
</div>
      </div>


      {/* =========================
          RIGHT SIDE CONTENT
      ========================== */}
      <div className="why-info">

        <span className="why-label">
          WHY CHOOSE US?
        </span>

        <h2>
          Your Career Growth
          <span> Partner</span>
        </h2>

        <p className="why-intro">
          Practical learning, industry experts and
          real-world projects designed to help you succeed.
        </p>


        {/* Highlight Text */}
        <p className="why-highlight">
          We focus on practical, skill-based training
          that helps students build confidence, develop
          industry-ready skills and prepare for real
          career opportunities.
        </p>


        {/* Points */}
        <div className="why-points">

          <div className="why-point">

            <div className="point-icon">
              <i className="fa-solid fa-code"></i>
            </div>

            <span>
              Expert Trainers
            </span>

          </div>


          <div className="why-point">

            <div className="point-icon">
              <i className="fa-solid fa-laptop-code"></i>
            </div>

            <span>
              Practical Learning
            </span>

          </div>


          <div className="why-point">

            <div className="point-icon">
              <i className="fa-solid fa-rocket"></i>
            </div>

            <span>
              Live Projects
            </span>

          </div>


          <div className="why-point">

            <div className="point-icon">
              <i className="fa-solid fa-briefcase"></i>
            </div>

            <span>
              Placement Guidance
            </span>

          </div>


          <div className="why-point">

            <div className="point-icon">
              <i className="fa-solid fa-bullseye"></i>
            </div>

            <span>
              Career Focused Training
            </span>

          </div>


          <div className="why-point">

            <div className="point-icon">
              <i className="fa-solid fa-certificate"></i>
            </div>

            <span>
              Certification Support
            </span>

          </div>

        </div>


        <a href="#courses" className="why-button">
          Explore Our Courses
          <i className="fa-solid fa-arrow-right"></i>
        </a>

      </div>

    </div>

  </div>

</section>

{/* =========================
    LEARNING JOURNEY
========================= */}


<section className="learning-process-section">

  <div className="container">

    {/* SECTION HEADING */}
    <div className="learning-heading">

      <div className="learning-subtitle">
        <span className="subtitle-dot"></span>
        JOIN DIGIVERSE ACADEMY
      </div>

      <h2>
        Improve Your Skills
      </h2>

    </div>


    {/* PROCESS AREA */}
    <div className="learning-process-wrapper">

      {/* DOTTED CONNECTING LINE */}
      <div className="process-dotted-line">
        <span className="line-dot dot-1"></span>
        <span className="line-dot dot-2"></span>
        <span className="line-dot dot-3"></span>
        <span className="line-dot dot-4"></span>
      </div>


      <div className="learning-process">


        {/* STEP 01 */}
        <div className="learning-step">

          <div className="learning-image-wrapper">

            <div className="learning-image">

              <img
  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  alt="Student Guidance"
/>
            </div>

            <div className="step-number">
              01
            </div>

          </div>


          <div className="step-content">

            <h3>
              Call Us
            </h3>

            <p>
              Contact our team for
              <br />
              course details.
            </p>

          </div>

        </div>


        {/* STEP 02 */}
        <div className="learning-step">

          <div className="learning-image-wrapper">

            <div className="learning-image">

  <img
  src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
  alt="Computer Lab Students"
/>

            </div>

            <div className="step-number">
              02
            </div>

          </div>


          <div className="step-content">

            <h3>
              Book a Demo Class
            </h3>

            <p>
              Schedule a free demo
              <br />
              session.
            </p>

          </div>

        </div>


        {/* STEP 03 */}
        <div className="learning-step">

          <div className="learning-image-wrapper">

            <div className="learning-image">

<img
  src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg"
  alt="Demo Class"
/>
            </div>

            <div className="step-number orange-number">
              03
            </div>

          </div>


          <div className="step-content">

            <h3>
              Attend Demo
            </h3>

            <p>
              Understand the
              <br />
              course and training
              <br />
              process.
            </p>

          </div>

        </div>


        {/* STEP 04 */}
        <div className="learning-step">

          <div className="learning-image-wrapper">

            <div className="learning-image">
<img
  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80"
  alt="New Students"
/>

            </div>

            <div className="step-number">
              04
            </div>

          </div>


          <div className="step-content">

            <h3>
              Enroll &amp; Start Learning
            </h3>

            <p>
              Join the course and
              <br />
              begin your journey.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>


{/* =========================
    TESTIMONIALS
========================= */}

<section className="testimonial-section">

  <div className="container">

    <div className="section-title text-center">

      <span>STUDENT REVIEWS</span>

      <h2>
        What Our Students Say
      </h2>

    </div>


    {/* TESTIMONIALS */}
    <div className="testimonial-scroll">

      {/* CARD 1 */}
      <div className="testimonial-item">

        <div className="testimonial-card">

          <div className="testimonial-icon">
            <i className="fa-solid fa-quote-left"></i>
          </div>

          <h5>
            Neha Sharma
          </h5>

          <p>
            Excellent training experience.
            The practical projects helped me
            gain confidence in web development.
          </p>

          <div className="stars">

            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>

          </div>

        </div>

      </div>


      {/* CARD 2 */}
      <div className="testimonial-item">

        <div className="testimonial-card">

          <div className="testimonial-icon">
            <i className="fa-solid fa-quote-left"></i>
          </div>

          <h5>
            Rahul Verma
          </h5>

          <p>
            Digital Marketing course was amazing.
            Trainers explained concepts clearly.
          </p>

          <div className="stars">

            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>

          </div>

        </div>

      </div>


      {/* CARD 3 */}
      <div className="testimonial-item">

        <div className="testimonial-card">

          <div className="testimonial-icon">
            <i className="fa-solid fa-quote-left"></i>
          </div>

          <h5>
            Priya Singh
          </h5>

          <p>
            Live projects and mentorship
            helped me improve my technical skills.
          </p>

          <div className="stars">

            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>



{/* =========================================================
    CONTACT SECTION
========================================================= */}
   

{/* =========================================================
    CONTACT SECTION
========================================================= */}

{/* =========================================================
    CONTACT SECTION
========================================================= */}

<section className="contact-section">

  <div className="container">

    <div className="contact-wrapper">

      {/* LEFT SIDE */}

      <div className="contact-left">

        <div className="contact-heading">

          <div className="contact-label">
            <span className="contact-label-dot"></span>
            CONTACT NOW
          </div>

          <h2>Get In Touch With Us</h2>

          <p>
            Get in touch with us today to know more about our
            courses. Our team is always ready to guide you and
            answer your queries.
          </p>

        </div>

        <div className="contact-form">

          <form>

            <div className="contact-form-row">

              <div className="contact-field">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact-input"
                />
              </div>

              <div className="contact-field">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="contact-input"
                />
              </div>

            </div>

            <div className="contact-field">
              <input
                type="email"
                placeholder="Email Address"
                className="contact-input"
              />
            </div>

            <div className="contact-field">
              <select
                className="contact-input"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Course
                </option>

                <option>Digital Marketing</option>
                <option>AI Pro Tools</option>
                <option>Web Development</option>
                <option>Graphics Designing</option>
                <option>Software Development</option>
                <option>E-Commerce Marketplace</option>

              </select>
            </div>

            <div className="contact-field">
              <textarea
                rows="5"
                placeholder="Your Message"
                className="contact-input contact-textarea"
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Request
            </button>

          </form>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="contact-right">

        <div className="contact-map-box">

          <iframe
            className="contact-map"
            title="DigiVerse Academy"
            src="https://www.google.com/maps?q=DigiVerse+Academy+Institute+Ludhiana&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

          <div className="contact-map-overlay"></div>

          <div className="contact-info-content">

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FaPhone />
              </div>

              <div className="contact-info-text">
                <h4>Phone</h4>
                <p>
                  +91 75080 48032
                </p>
              </div>

            </div>

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div className="contact-info-text">
                <h4>Email</h4>
                <p>
                  info@digiverseacademy.com
                </p>
              </div>

            </div>

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="contact-info-text">
                <h4>Address</h4>
                <p>
                  SCO 1, Urban Estate Phase 1 Rd.<br />
                  Phase 1, Duggri<br />
                  Ludhiana, Punjab 141002
                </p>
              </div>

            </div>

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FaClock />
              </div>

              <div className="contact-info-text">
                <h4>Working Hours</h4>
                <p>
                  Monday - Saturday<br />
                  9:00 AM - 6:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
</>
  );
};

export default Main;





