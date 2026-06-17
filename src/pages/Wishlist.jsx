import React, { useState } from "react";
import { FaHeart, FaShoppingBag, FaTrash } from "react-icons/fa";


function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 45999,
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
    },
    {
      id: 2,
      name: "Royal Gold Necklace",
      price: 89999,
      image:
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500",
    },
    {
      id: 3,
      name: "Pearl Luxury Set",
      price: 32999,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const addToCart = (item) => {
    alert(`${item.name} added to cart`);
  };

  return (
    <div className="wishlist-page">
      <div className="container">
        <h1 className="wishlist-title">
          <FaHeart /> My Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <FaHeart size={60} />
            <h3>Your Wishlist is Empty</h3>
            <p>
              Save your favorite jewellery pieces here.
            </p>
          </div>
        ) : (
          <div className="row g-4">
            {wishlistItems.map((item) => (
              <div
                className="col-lg-4 col-md-6"
                key={item.id}
              >
                <div className="wishlist-card">
                  <div className="wishlist-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="wishlist-img"
                    />

                    <button
                      className="wishlist-remove"
                      onClick={() =>
                        removeFromWishlist(item.id)
                      }
                    >
                      <FaTrash />
                    </button>
                  </div>

                  <div className="wishlist-content">
                    <h4>{item.name}</h4>

                    <p className="wishlist-price">
                      ₹{item.price.toLocaleString()}
                    </p>

                    <button
                      className="wishlist-cart-btn"
                      onClick={() => addToCart(item)}
                    >
                      <FaShoppingBag />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;