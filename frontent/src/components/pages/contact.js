import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaDirections,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-overlay"></div>

        <div className="container">
          <div className="contact-content">
            <span>CONTACT US</span>

            <h1>Let's Connect</h1>

            <p>
              We'd love to hear from you and help
              you start your learning journey.
            </p>

            <a href="/">Back To Home</a>
          </div>
        </div>
      </section>

      {/* FORM */}

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-card">

            <div className="contact-form-title">
              <span>GET IN TOUCH</span>
              <h2>Send Us A Message</h2>
            </div>

            <form>

              <div className="form-row">

                <input
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                />

              </div>

              <div className="form-row">

                <input
                  type="text"
                  placeholder="Phone Number"
                />

                <input
                  type="text"
                  placeholder="Course Interested In"
                />

              </div>

              <textarea
                rows="6"
                placeholder="Write Your Message"
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}

      <section className="contact-address">

        <div className="container">

          <div className="address-card">

            <h2>Visit Our Academy</h2>

            <p>
              <FaMapMarkerAlt />
              SCO 1, Urban Estate Phase 1 Rd.,
              Phase 1, Duggri,
              Urban Estate Dugri,
              Ludhiana, Punjab 141002
            </p>

            <p>
              <FaPhoneAlt />
              +91 75080 48032
            </p>

            <p>
              <FaEnvelope />
              info@digiverseacademy.com
            </p>

          </div>

        </div>

      </section>

      {/* MAP SECTION */}

      <section className="contact-map-section">

        <div className="map-wrapper">

          <iframe
            title="Digiverse Academy Location"
            src="https://maps.google.com/maps?q=DigiVerse%20Academy%20Institute%20Ludhiana&t=&z=17&ie=UTF8&iwloc=B&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

        <div className="map-btn-wrap">

          <a
            href="https://www.google.com/maps/search/?api=1&query=DigiVerse+Academy+%26+Institute+Ludhiana"
            target="_blank"
            rel="noreferrer"
            className="map-btn"
          >
            <FaDirections />
            Open DigiVerse Academy
          </a>

        </div>

      </section>
    </>
  );
};

export default Contact;