import React from "react";


const Career = () => {
  return (
    <>
      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="career-hero">

        <div className="career-overlay"></div>

        <div className="container">

          <div className="career-content">

            <span>CAREER WITH US</span>

            <h1>
              Build Your Future
              <br />
              With DigiVerse Academy
            </h1>

            <a href="#apply-career">
              Apply Now
            </a>

          </div>

        </div>

      </section>

      {/* =====================================
          APPLICATION FORM
      ===================================== */}

      <section
        className="career-apply-section"
        id="apply-career"
      >

        <div className="container">

          <div className="career-form-heading">

            <span>JOIN OUR TEAM</span>

            <h2>
              Apply For Your
              Dream Career
            </h2>

            <p>
              Fill out the form below and our
              team will get back to you soon.
            </p>

          </div>

          <div className="career-form-wrapper">

            {/* FORM */}

            <div className="career-form-box">

              <form>

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="form-group">
                  <label>Last Qualification</label>
                  <input
                    type="text"
                    placeholder="Enter qualification"
                  />
                </div>

                <div className="form-group">
                  <label>Upload CV</label>
                  <input type="file" />
                </div>

                <button type="submit">
                  Submit Application
                </button>

              </form>

            </div>

            {/* IMAGE */}

            <div className="career-image-box">

              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                alt="Students Career Growth"
              />

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Career;