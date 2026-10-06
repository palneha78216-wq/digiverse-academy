import React, { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaArrowRight,
  FaGraduationCap,
  FaUsers,
  FaChalkboardTeacher,
  FaCheck,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = aboutRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const openVideo = () => {
    window.open(
      "https://www.youtube.com/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main
      ref={aboutRef}
      className={`dv-about-page ${
        isVisible ? "dv-about-visible" : ""
      }`}
    >

      {/* =====================================================
          TOP ABOUT BANNER
      ===================================================== */}

      <section className="dv-about-banner">

        <div className="dv-about-banner-overlay"></div>

        <div className="container">

          <div className="dv-about-banner-content">

            <span className="dv-banner-small">
              DIGIVERSE ACADEMY
            </span>

            <h1>About Us</h1>

            <div className="dv-about-breadcrumb">

              <a href="/">
                <FaHome />
                <span>Home</span>
              </a>

              <FaChevronRight className="dv-breadcrumb-arrow" />

              <span>About Us</span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 1
          IMAGE + MOVING CONTENT
      ===================================================== */}

      <section className="dv-about-intro">

        <div className="container">

          <div className="dv-about-sticky-wrapper">

            {/* FIXED IMAGE */}

            <div className="dv-about-sticky-image">

              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=90"
                alt="Students learning technology at DigiVerse Academy"
              />

              <div className="dv-about-image-overlay"></div>


              {/* EXPERIENCE */}

              <div className="dv-about-experience-box">

                <FaGraduationCap />

                <div>

                  <strong>10+</strong>

                  <span>
                    Years of
                    <br />
                    Experience
                  </span>

                </div>

              </div>


              {/* VIDEO */}

              <button
                type="button"
                className="dv-about-play"
                onClick={openVideo}
                aria-label="Play DigiVerse Academy video"
              >
                <span>
                  <FaPlay />
                </span>
              </button>

            </div>


            {/* MOVING CONTENT */}

            <div className="dv-about-moving-content">

              <div className="dv-about-content-box">

                <div className="dv-about-section-label">

                  <span></span>

                  ABOUT DIGIVERSE ACADEMY

                </div>


                <h1>
                  Building Skills For
                  <span> Future-Ready Digital Careers</span>
                </h1>


                <p className="dv-about-lead">
                  DigiVerse Academy is powered by a team of
                  26+ experienced professionals focused on helping
                  students build practical and industry-relevant
                  digital skills.
                </p>


                <p>
                  Our expert trainers bring real-world industry
                  experience and practical knowledge into the learning
                  environment so students can understand concepts and
                  confidently apply them in real projects.
                </p>


                <p>
                  Our training approach combines hands-on learning,
                  live projects and personalized guidance to help
                  learners gain practical expertise and prepare for
                  opportunities in the digital industry.
                </p>


                <p>
                  Students can develop skills across Web Development,
                  Software Development, Digital Marketing, Graphics
                  and Video Editing through practical and
                  career-focused training.
                </p>


                {/* HIGHLIGHT */}

                <div className="dv-about-highlight">

                  <div className="dv-about-highlight-icon">
                    <FaChalkboardTeacher />
                  </div>

                  <div>

                    <h4>
                      Industry-Focused Learning
                    </h4>

                    <p>
                      Hands-on training, live projects, professional
                      guidance and practical skill development.
                    </p>

                  </div>

                </div>


                <a
                  href="/#contact"
                  className="dv-about-career-btn"
                >

                  <span>
                    Start Your Journey
                  </span>

                  <FaArrowRight />

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 2
      ===================================================== */}

      <section className="dv-about-info">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <div className="dv-info-image">

                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90"
                  alt="Students at DigiVerse Academy"
                />

              </div>

            </div>


            <div className="col-lg-7">

              <div className="dv-info-content">

                <div className="dv-about-section-label">

                  <span></span>

                  WHAT WE DO

                </div>


                <h2>
                  Practical Learning For
                  <span> Digital Careers.</span>
                </h2>


                <p>
                  We provide industry-focused digital learning
                  designed to help students build practical skills
                  and prepare for future career opportunities.
                </p>


                <p>
                  Our courses combine expert guidance, hands-on
                  training and project-based learning to make
                  technology easier to understand and apply.
                </p>


                <div className="dv-info-points">

                  <div>
                    <FaCheck />
                    <span>Web Development Training</span>
                  </div>

                  <div>
                    <FaCheck />
                    <span>Software Development Training</span>
                  </div>

                  <div>
                    <FaCheck />
                    <span>Digital Marketing Training</span>
                  </div>

                  <div>
                    <FaCheck />
                    <span>Graphics & Video Editing</span>
                  </div>

                  <div>
                    <FaCheck />
                    <span>Live Project Experience</span>
                  </div>

                  <div>
                    <FaCheck />
                    <span>Career & Job Readiness</span>
                  </div>

                </div>


                <div className="dv-info-bottom">

                  <div className="dv-info-stat">

                    <FaUsers />

                    <div>
                      <strong>26+</strong>

                      <span>
                        Experienced
                        Professionals
                      </span>

                    </div>

                  </div>


                  <div className="dv-info-stat">

                    <FaGraduationCap />

                    <div>
                      <strong>10+</strong>

                      <span>
                        Years of
                        Experience
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;