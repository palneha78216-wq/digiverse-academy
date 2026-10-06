import React from "react";


const Graphics = () => {
  return (
    <section className="graphics-section">

      <div className="container">

        <div className="graphics-wrapper">

          {/* IMAGE SIDE */}

          <div className="graphics-image">

            <img
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200"
              alt="Graphics and Video Editing"
            />

            <div className="graphics-tag">
              Creative Design Course
            </div>

          </div>

          {/* CONTENT SIDE */}

          <div className="graphics-content">

            <span>GRAPHICS & VIDEO EDITING</span>

            <h1>
              Turn Creativity Into
              A Professional Career
            </h1>

            <p>
              Learn Graphic Design, Video Editing and
              Motion Graphics through practical training,
              creative projects and industry-focused
              learning. Build professional visuals,
              social media creatives and engaging videos.
            </p>

            <p>
              This course is ideal for students,
              freelancers, content creators and aspiring
              designers who want to master modern
              creative tools and build a strong portfolio.
            </p>

            <div className="graphics-features">

              <div>Adobe Photoshop</div>

              <div>Adobe Illustrator</div>

              <div>Canva Designing</div>

              <div>Logo Design</div>

              <div>Brand Identity Design</div>

              <div>Social Media Creatives</div>

              <div>Adobe Premiere Pro</div>

              <div>Video Editing</div>

              <div>Motion Graphics</div>

              <div>YouTube Editing</div>

              <div>Reels & Shorts Creation</div>

              <div>Portfolio Building</div>

            </div>

            <div className="graphics-course-info">

              <div className="info-box">

                <h3>Graphic Design</h3>

                <p>
                  Posters, Branding,
                  Social Media Creatives,
                  Logos & Marketing Designs
                </p>

              </div>

              <div className="info-box">

                <h3>Video Editing</h3>

                <p>
                  Reels, YouTube Videos,
                  Commercial Editing &
                  Professional Production
                </p>

              </div>

              <div className="info-box">

                <h3>Motion Graphics</h3>

                <p>
                  Animated Text,
                  Visual Effects &
                  Creative Storytelling
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

export default Graphics;