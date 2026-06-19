import React, { useState } from "react";
import { useCart } from "../Components/CartContext";
import { useNavigate, Navigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cod",
  });

  if (cart.length === 0) {
    return <Navigate to="/cart" />;
  }

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    if (
      !formData.firstName ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill all required fields");
      return;
    }

    const orderData = {
      customer: formData,
      products: cart,
      total,
      orderDate: new Date(),
    };

    console.log("Order Data:", orderData);

    alert("Order Placed Successfully!");

    clearCart();
    navigate("/");
  };

  return (
    <section className="checkout-page py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="checkout-card">
              <h2 className="section-title mb-4">
                Billing Details
              </h2>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="form-control checkout-input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control checkout-input"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control checkout-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Phone *
                  </label>
                  <input
                    type="text"
                    className="form-control checkout-input"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mb-4">
                  <label className="form-label">
                    Address *
                  </label>
                  <textarea
                    rows="4"
                    className="form-control checkout-input"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h4 className="mb-3">
                Payment Method
              </h4>

              <div className="payment-option mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                />
                <span className="ms-2">
                  Cash On Delivery
                </span>
              </div>

              <div className="payment-option mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={formData.paymentMethod === "upi"}
                  onChange={handleChange}
                />
                <span className="ms-2">
                  UPI Payment
                </span>
              </div>

              <div className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleChange}
                />
                <span className="ms-2">
                  Credit / Debit Card
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="checkout-card">
              <h2 className="section-title mb-4">
                Order Summary
              </h2>

              {cart.map((item) => (
                <div
                  className="d-flex align-items-center justify-content-between mb-3"
                  key={item.id}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={
                        item.images
                          ? item.images[0]
                          : item.image
                      }
                      alt={item.title}
                      width="70"
                      height="70"
                      className="rounded"
                    />

                    <div className="ms-3">
                      <h6 className="mb-1">
                        {item.title}
                      </h6>
                      <small>
                        Qty: {item.quantity}
                      </small>
                    </div>
                  </div>

                  <strong>
                    ₹
                    {(
                      Number(item.price) *
                      item.quantity
                    ).toLocaleString()}
                  </strong>
                </div>
              ))}

              <hr />

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>
                  ₹{subtotal.toLocaleString()}
                </span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span className="text-success">
                  Free
                </span>
              </div>

              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span>
                  ₹{total.toLocaleString()}
                </span>
              </div>

              <button
                className="place-order-btn mt-4 w-100"
                onClick={handleOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;