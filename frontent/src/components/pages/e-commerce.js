import React from "react";


const Ecommerce = () => {
  return (
    <section className="ecommerce-section">
      <div className="container">
        <div className="ecommerce-wrapper">

          {/* IMAGE SIDE */}
          <div className="ecommerce-image">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200"
              alt="E-Commerce Marketplace"
            />

            <div className="ecommerce-tag">
              E-Commerce Master Course
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="ecommerce-content">

            <span>E-COMMERCE MARKETPLACES MASTER COURSE</span>

            <h1>
              Build & Scale Your
              Online Selling Business
            </h1>

            <p>
              Learn how to sell products on Amazon,
              Flipkart, Meesho and other leading
              marketplaces. Master product listing,
              inventory management, marketplace SEO,
              advertising and sales growth strategies.
            </p>

            <p>
              This practical course is ideal for
              students, entrepreneurs, freelancers
              and business owners who want to build
              and scale a successful online business.
            </p>

            <div className="ecommerce-features">

              <div>Amazon Seller Central</div>
              <div>Flipkart Seller Hub</div>
              <div>Meesho Marketplace</div>
              <div>Product Listings</div>
              <div>Marketplace SEO</div>
              <div>Keyword Research</div>
              <div>Inventory Management</div>
              <div>Order Processing</div>
              <div>Sponsored Ads</div>
              <div>Product Promotions</div>
              <div>Customer Management</div>
              <div>Sales Growth Strategies</div>

            </div>

            <div className="ecommerce-course-info">

              <div className="info-box">
                <h3>Marketplace Selling</h3>

                <p>
                  Complete seller account setup,
                  product listings and marketplace
                  management.
                </p>
              </div>

              <div className="info-box">
                <h3>Advertising</h3>

                <p>
                  Run sponsored campaigns and
                  promotions to increase product
                  visibility and sales.
                </p>
              </div>

              <div className="info-box">
                <h3>Business Growth</h3>

                <p>
                  Learn analytics, automation and
                  growth strategies to scale your
                  online business.
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

export default Ecommerce;