import React from "react";
import { FaGem, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg luxury-navbar">
      <div className="container">

        <a className="navbar-brand luxury-logo" href="/">
          <FaGem className="brand-icon" />
          Aeternitas
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

            <Link to="/cart" className="icon-btn position-relative">
              <FaShoppingBag />
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.65rem", padding: "0.25em 0.45em" }}>
                  {totalItems}
                </span>
              )}
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