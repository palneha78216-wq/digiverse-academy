import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBookOpen,
  faUser,
  faEnvelope,
  faPhone,
  faLocationDot,
  faArrowRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* Decorative Top Shape */}
      <div className="footer-top-shape"></div>

      <div className="container">

        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="footer-main">

          {/* =========================
              BRAND COLUMN
          ========================== */}
          <div className="footer-column footer-brand">

            <div className="footer-logo">
           <img
  src="/images/logo.png"
  alt="Digiverse Academy"
/>
            </div>

            <p className="footer-description">
              Learn future-ready digital skills
              and build a successful career.
            </p>

            {/* Social Icons */}
            <div className="footer-social">

              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="#" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

            </div>

          </div>


          {/* =========================
              QUICK LINKS
          ========================== */}
          <div className="footer-column">

            <div className="footer-heading">
              <span></span>
              <h5>Quick Links</h5>
            </div>

            <ul className="footer-links">

              <li>
                <a href="#home">
                  <FontAwesomeIcon icon={faHouse} />
                  <span>Home</span>
                </a>
              </li>

              <li>
                <a href="#courses">
                  <FontAwesomeIcon icon={faBookOpen} />
                  <span>Courses</span>
                </a>
              </li>

              <li>
                <a href="#about">
                  <FontAwesomeIcon icon={faUser} />
                  <span>About</span>
                </a>
              </li>

              <li>
                <a href="#contact">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>Contact</span>
                </a>
              </li>

            </ul>

          </div>


          {/* =========================
              COURSES
          ========================== */}
          <div className="footer-column">

            <div className="footer-heading">
              <span></span>
              <h5>Courses</h5>
            </div>

            <ul className="footer-links">

              <li>
                <a href="#courses">
                  <FontAwesomeIcon icon={faArrowRight} />
                  <span>Web Development</span>
                </a>
              </li>

              <li>
                <a href="#courses">
                  <FontAwesomeIcon icon={faArrowRight} />
                  <span>Digital Marketing</span>
                </a>
              </li>

              <li>
                <a href="#courses">
                  <FontAwesomeIcon icon={faArrowRight} />
                  <span>Graphics Design</span>
                </a>
              </li>

              <li>
                <a href="#courses">
                  <FontAwesomeIcon icon={faArrowRight} />
                  <span>Video Editing</span>
                </a>
              </li>

            </ul>

          </div>


          {/* =========================
              CONTACT
          ========================== */}
          <div className="footer-column">

            <div className="footer-heading">
              <span></span>
              <h5>Contact</h5>
            </div>

            <ul className="footer-contact">

              <li>

                <div className="contact-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>

                <div className="contact-text">
                  <span>Phone</span>
                  <a href="tel:+91XXXXXXXXXX">
                    +91 XXXXX XXXXX
                  </a>
                </div>

              </li>


              <li>

                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div className="contact-text">
                  <span>Email</span>
                  <a href="mailto:info@digiverseacademy.com">
                    info@digiverseacademy.com
                  </a>
                </div>

              </li>


              <li>

                <div className="contact-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>

                <div className="contact-text">
                  <span>Location</span>
                  <p>
                    Ludhiana, Punjab
                  </p>
                </div>

              </li>

            </ul>

          </div>

        </div>


        {/* =========================
            DIVIDER
        ========================== */}
        <div className="footer-divider"></div>


        {/* =========================
            BOTTOM FOOTER
        ========================== */}
        <div className="footer-bottom">

          <p>
            © 2026 Digiverse Academy. All Rights Reserved.
          </p>

          <button
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
