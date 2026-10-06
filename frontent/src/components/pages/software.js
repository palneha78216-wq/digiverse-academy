import React from "react";


const Software = () => {
  return (
    <section className="software-section">

      <div className="container">

        <div className="software-wrapper">

          {/* IMAGE */}

          <div className="software-image">

            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
              alt="Software Development"
            />

            <div className="software-tag">
              Software Engineering
            </div>

          </div>

          {/* CONTENT */}

          <div className="software-content">

            <span>SOFTWARE DEVELOPMENT COURSE</span>

            <h1>
              Build Modern Software &
              Real World Applications
            </h1>

            <p>
              Learn software development from fundamentals
              to advanced concepts and gain practical
              experience in designing, developing and
              deploying real-world applications.
            </p>

            <p>
              This course is ideal for students,
              freshers and aspiring developers who want
              to build a strong career in software
              engineering and application development.
            </p>

            <div className="software-features">

              <div>Programming Fundamentals</div>

              <div>Object Oriented Programming</div>

              <div>Data Structures</div>

              <div>Algorithms</div>

              <div>Frontend Development</div>

              <div>Backend Development</div>

              <div>Database Management</div>

              <div>Software Architecture</div>

              <div>API Development</div>

              <div>Version Control (Git)</div>

              <div>Testing & Debugging</div>

              <div>Project Deployment</div>

            </div>

            <div className="software-course-info">

              <div className="info-box">

                <h3>Programming</h3>

                <p>
                  Learn coding concepts,
                  logic building and modern
                  development practices.
                </p>

              </div>

              <div className="info-box">

                <h3>Development</h3>

                <p>
                  Create scalable web and
                  software applications using
                  industry standards.
                </p>

              </div>

              <div className="info-box">

                <h3>Career Growth</h3>

                <p>
                  Build projects, portfolio
                  and skills required for
                  software development roles.
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

export default Software;