import React, { useState } from "react";


function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 45999,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
    },
    {
      id: 2,
      name: "Gold Bridal Necklace",
      price: 89999,
      qty: 2,
      image:
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h3>Your Cart is Empty</h3>
            <p>Add some beautiful jewellery to continue shopping.</p>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-8">
              {cartItems.map((item) => (
                <div className="cart-card" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-details">
                    <h4>{item.name}</h4>

                    <div className="cart-qty">
                      <button
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </button>

                      <span>{item.qty}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="cart-price">
                    ₹
                    {(item.price * item.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="summary-card">
                <h3>Order Summary</h3>

                <div className="summary-row">
                  <span>Items</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="summary-row total">
                  <span>Total</span>
                  <span>
                    ₹{subtotal.toLocaleString()}
                  </span>
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