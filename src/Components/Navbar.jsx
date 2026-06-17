import React from "react";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg luxury-navbar">
      <div className="container">

        <a className="navbar-brand luxury-logo" href="/">
          AETERNITAS
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link luxury-link" href="#diamonds">
                Diamonds
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link luxury-link" href="#gold">
                Gold
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link luxury-link" href="#pearls">
                Pearls
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link luxury-link" href="#collections">
                Collections
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link luxury-link" href="#bridal">
                Bridal
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-4 luxury-icons">
            <Link to="/wishlist" className="icon-btn">
              <FaHeart />
            </Link>

            <Link to="/cart" className="icon-btn">
              <FaShoppingBag />
            </Link>

            <Link to="/login" className="icon-btn">
              <FaUser />
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;