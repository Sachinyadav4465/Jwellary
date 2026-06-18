import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";

function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();

  const increaseQty = (item) => {
    addToCart(item, 1);
  };

  const decreaseQty = (item) => {
    if (item.quantity > 1) {
      addToCart(item, -1);
    } else {
      removeFromCart(item.id);
    }
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart text-center py-5">
            <h3>Your Cart is Empty</h3>
            <p>Add some beautiful jewellery to continue shopping.</p>
            <Link to="/" className="btn btn-gold mt-3">
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-8">
              {cart.map((item) => (
                <div className="cart-card" key={item.id}>
                  <img
                    src={item.images ? item.images[0] : item.image}
                    alt={item.title}
                    className="cart-image"
                  />

                  <div className="cart-details">
                    <h4>{item.title}</h4>
                    <p className="text-muted small mb-2">{item.subtitle}</p>

                    <div className="cart-qty">
                      <button onClick={() => decreaseQty(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item)}>+</button>
                    </div>

                    <button
                      className="remove-btn mt-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="cart-price">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="summary-card">
                <h3>Order Summary</h3>

                <div className="summary-row">
                  <span>Unique Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span className="text-success fw-bold">Free</span>
                </div>

                <div className="summary-row total">
                  <span>Total</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                <button className="checkout-btn">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;