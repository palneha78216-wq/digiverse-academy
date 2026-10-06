import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSearch,
  FaBars,
  FaChevronDown,
  FaPhoneAlt,
} from "react-icons/fa";

import { HiMinus } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}

      <div className="topbar">
        <div className="container topbar-content">

          <div className="topbar-left">
            <span>Follow Us</span>

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaInstagram />
            </a>
          </div>

          <div className="topbar-right">
            <FaPhoneAlt />
            <span>+91 75080 48032</span>
          </div>

        </div>
      </div>

      {/* NAVBAR */}

      <header
        className={`main-navbar ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container navbar-content">

          {/* LOGO */}

          <Link to="/" className="logo">
            <img
              src="/images/logo.png"
              alt="Digiverse Academy"
            />
          </Link>

          {/* MENU */}

          <ul
            className={`nav-links ${
              menuOpen ? "active" : ""
            }`}
          >

            {/* MOBILE HEADER */}

            <div className="mobile-menu-header">

              <img
                src="/images/logo.png"
                alt="Digiverse Academy"
              />

              <button
                className="close-btn"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                <HiMinus />
              </button>

            </div>

            {/* HOME */}

            <li>
              <Link
                to="/"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Home
              </Link>
            </li>

            {/* ABOUT */}

            <li>
              <Link
                to="/about"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                About Us
              </Link>
            </li>

            {/* COURSES */}

            <li className="dropdown">

              <button
                className="dropdown-btn"
                onClick={() =>
                  setCourseOpen(!courseOpen)
                }
              >
                Courses

                <FaChevronDown
                  className={`down-icon ${
                    courseOpen
                      ? "rotate"
                      : ""
                  }`}
                />
              </button>

              <div
                className={`dropdown-menu ${
                  courseOpen
                    ? "show"
                    : ""
                }`}
              >

                <Link
                  to="/digital"
                  onClick={() => {
                    setMenuOpen(false);
                    setCourseOpen(false);
                  }}
                >
                  Digital Marketing
                </Link>

                <Link
                  to="/ai"
                  onClick={() => {
                    setMenuOpen(false);
                    setCourseOpen(false);
                  }}
                >
                  AI Pro Tools Master Class
                </Link>

                <Link
                  to="/web"
                  onClick={() => {
                    setMenuOpen(false);
                    setCourseOpen(false);
                  }}
                >
                  Web Development
                </Link>

                <Link
                  to="/graphic"
                  onClick={() => {
                    setMenuOpen(false);
                    setCourseOpen(false);
                  }}
                >
                  Graphics & Video Editing
                </Link>

                <Link
                  to="/software"
                  onClick={() => {
                    setMenuOpen(false);
                    setCourseOpen(false);
                  }}
                >
                  Software Development
                </Link>

                <Link
                  to="/ecommerce"
                  onClick={() => {
                    setMenuOpen(false);
                    setCourseOpen(false);
                  }}
                >
                  E-Commerce Marketplace
                </Link>

              </div>
            </li>

            {/* CAREER */}

            <li>
              <Link
                to="/career"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Career With Us
              </Link>
            </li>

            {/* CONTACT */}

            <li>
              <Link
                to="/contact"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Contact Us
              </Link>
            </li>

          </ul>

          {/* RIGHT SIDE */}

          <div className="nav-actions">

            <button className="search-btn">
              <FaSearch />
            </button>

            <button
              className="enquiry-btn"
              onClick={() =>
                navigate("/contact")
              }
            >
              Enquiry
            </button>

            <button
              className="mobile-toggle"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >
              {menuOpen ? (
                <HiMinus />
              ) : (
                <FaBars />
              )}
            </button>

          </div>

        </div>
      </header>

      {/* OVERLAY */}

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() =>
            setMenuOpen(false)
          }
        />
      )}
    </>
  );
};

export default Header;