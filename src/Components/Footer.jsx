import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGem,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <>

      <section className="newsletter-section">
        <div className="newsletter-overlay">
          <h2>Join Our Newsletter</h2>

          <p>
            Be the first to discover exclusive collections, luxury jewellery
            launches and special member offers.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
            />

            <button type="submit">
              <FiSend />
              Subscribe Now
            </button>
          </form>
        </div>
      </section>


      <footer className="luxury-footer">
        <div className="container">
          <div className="row gy-5">


            <div className="col-lg-4 col-md-6">
              <div className="footer-brand">
                <FaGem className="brand-icon" />
                <h2>Aeternitas</h2>
              </div>

              <p className="footer-description">
                Discover timeless elegance crafted with precision and luxury.
                Every piece tells a story of beauty, craftsmanship and heritage.
              </p>
            </div>


            <div className="col-lg-2 col-md-6 col-6">
              <h5 className="footer-title">Service</h5>

              <ul className="footer-links">
                <li><a href="/">Diamond</a></li>
                <li><a href="/">Gold Jewellery</a></li>
                <li><a href="/">Silver Collection</a></li>
                <li><a href="/">New Arrivals</a></li>
              </ul>
            </div>


            <div className="col-lg-2 col-md-6 col-6">
              <h5 className="footer-title">Further Links</h5>

              <ul className="footer-links">
                <li><a href="/">Terms & Conditions</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Support</a></li>
              </ul>
            </div>


            <div className="col-lg-4 col-md-6">
              <h5 className="footer-title">Get In Touch</h5>

              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>

              <div className="contact-item">
                <FaPhoneAlt />
                <span>+91 9876543210</span>
              </div>

              <div className="contact-item">
                <FaEnvelope />
                <span>support@aeternitas.com</span>
              </div>
            </div>

          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p>
              © 2026 AETERNITAS. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;