import React from 'react';

const Footer = () => {
  return (
    <footer className="custom-footer py-5">
      <div className="container">
        <div className="row gy-4 align-items-start justify-content-between text-center text-md-start">
          
          <div className="col-12 col-md-4 footer-logo-section text-center">
    
            {/* <svg 
              width="65" 
              height="30" 
              viewBox="0 0 100 50" 
              fill="none" 
              stroke="var(--text-dark)" 
              strokeWidth="4"
            >
              <path d="M30 25C30 35 43 40 50 25C57 10 70 15 70 25C70 35 57 40 50 25C43 10 30 15 30 25Z" />
            </svg> */}
            <h1 className="footer-brand-title">Aeternitas</h1>
          </div>

          <div className="col-12 col-sm-6 col-md-4 ps-md-5">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#about">About Us</a></li>
              <li className="footer-link-item"><a href="#shipping">Shipping & Returns</a></li>
              <li className="footer-link-item"><a href="#previous">Previous Links</a></li>
              <li className="footer-link-item"><a href="#contact">Contact Us</a></li>
            </ul>
          </div>


          <div className="col-12 col-sm-6 col-md-4">
            <h5 className="footer-heading">Customer Care</h5>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#contact-us">Contact Us</a></li>
              <li className="footer-link-item"><a href="#support">Contact Us</a></li> 
    
            </ul>
          </div>

        </div>

    
        <div className="row footer-bottom">
          <div className="col-12 text-center">
            <p className="copyright-text mb-0">
              © 2026 AETERNITAS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;