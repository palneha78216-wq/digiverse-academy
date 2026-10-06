import React from "react";


const AI = () => {
  return (
    <section className="ai-section">
      <div className="container">

        <div className="ai-wrapper">

          {/* IMAGE SIDE */}
          <div className="ai-image">
            <img
              src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80"
              alt="AI Pro Tools Master Class"
            />

            <div className="ai-tag">
              AI Pro Tools Master Class
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="ai-content">

            <span>AI PRO TOOLS MASTER CLASS</span>

            <h1>
              Learn Artificial Intelligence &
              Future Ready AI Tools
            </h1>

            <p>
              Master the latest AI tools used by
              professionals, businesses, marketers,
              content creators and freelancers.
              Learn practical AI applications and
              improve productivity using modern
              artificial intelligence platforms.
            </p>

            <p>
              Get hands-on experience with ChatGPT,
              Gemini, AI image generation, AI video
              creation, prompt engineering and business
              automation tools through practical projects.
            </p>

            <div className="ai-features">

              <div>ChatGPT Mastery</div>
              <div>Google Gemini</div>

              <div>Prompt Engineering</div>
              <div>AI Content Creation</div>

              <div>AI Image Generation</div>
              <div>AI Video Creation</div>

              <div>AI Graphic Design</div>
              <div>Business Automation</div>

              <div>Social Media Content</div>
              <div>AI Productivity Tools</div>

              <div>AI Workflows</div>
              <div>Real Projects</div>

            </div>

            <div className="ai-course-info">

              <div className="info-box">
                <h3>AI Content</h3>

                <p>
                  Create blogs, captions, emails,
                  scripts and marketing content
                  with AI tools.
                </p>
              </div>

              <div className="info-box">
                <h3>AI Automation</h3>

                <p>
                  Automate repetitive business
                  tasks and improve efficiency
                  using AI systems.
                </p>
              </div>

              <div className="info-box">
                <h3>AI Creativity</h3>

                <p>
                  Generate images, videos,
                  presentations and creative
                  assets instantly.
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

export default AI;