import React from "react";


const Web = () => {
  return (
    <section className="web-section">

      <div className="container">

        <div className="web-wrapper">

          {/* IMAGE SIDE */}

          <div className="web-image">

            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200"
              alt="Web Development"
            />

            <div className="web-tag">
              Full Stack Development
            </div>

          </div>

          {/* CONTENT SIDE */}

          <div className="web-content">

            <span>WEB DEVELOPMENT COURSE</span>

            <h1>
              Become a Professional
              Web Developer
            </h1>

            <p>
              Learn modern web development from
              basic to advanced level and build
              responsive, interactive and real-world
              websites using industry-standard
              technologies.
            </p>

            <p>
              This course is designed for students,
              beginners, freelancers and working
              professionals who want to start a
              career in Frontend, Backend or
              Full Stack Development.
            </p>

            <div className="web-features">

              <div>HTML5 & Semantic Structure</div>

              <div>CSS3 & Responsive Design</div>

              <div>JavaScript ES6+</div>

              <div>Bootstrap Framework</div>

              <div>React.js Development</div>

              <div>Node.js & Express.js</div>

              <div>MongoDB Database</div>

              <div>REST API Development</div>

              <div>Authentication & Security</div>

              <div>Git & GitHub</div>

              <div>Project Deployment</div>

              <div>Live Industry Projects</div>

            </div>

            <div className="web-course-info">

              <div className="info-box">

                <h3>Frontend</h3>

                <p>
                  HTML, CSS, JavaScript,
                  Bootstrap & React.js
                </p>

              </div>

              <div className="info-box">

                <h3>Backend</h3>

                <p>
                  Node.js, Express.js,
                  APIs & Authentication
                </p>

              </div>

              <div className="info-box">

                <h3>Database</h3>

                <p>
                  MongoDB & Real World
                  Data Management
                </p>

              </div>

            </div>

            <a href="/contact">
              Start Learning
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Web;