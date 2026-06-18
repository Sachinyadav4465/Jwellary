import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaHeart, FaStar, FaMinus, FaPlus } from "react-icons/fa";
import { products } from "./BestSeller";
import { useCart } from "../Components/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      setQty(1); 
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product Not Found</h2>
        <Link to="/" className="btn btn-gold mt-3">Back to Home</Link>
      </div>
    );
  }

  const similarProducts = products.filter((item) => item.id !== product.id);

  return (
    <section className="product-details-section py-5">
      <div className="container">
        <div className="row g-5">

          <div className="col-lg-6">
            <div className="product-gallery">
              
              <div className="thumbnail-container">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail-box ${
                      selectedImage === img ? "active-thumb" : ""
                    }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`thumb-${index}`}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>

              <div className="product-image-wrapper">
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="main-product-image img-fluid"
                />
              </div>

            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h1 className="product-title">{product.title}</h1>
              <FaHeart className="wishlist-icon" />
            </div>

            <div className="rating mb-3">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              <span className="ms-2">(24 Reviews)</span>
            </div>

            <h2 className="price mb-3">₹{product.price}</h2>
            <p className="product-description">{product.subtitle}</p>

            <div className="row g-3 mt-3">
              <div className="col-md-6">
                <label className="mb-2">Size</label>
                <select className="form-select luxury-select">
                  <option>Select Size</option>
                  <option>16</option>
                  <option>18</option>
                  <option>20</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="mb-2">Material</label>
                <select className="form-select luxury-select">
                  <option>Gold</option>
                  <option>Rose Gold</option>
                  <option>Silver</option>
                </select>
              </div>
            </div>

            <div className="qty-box mt-4 d-flex align-items-center gap-3">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>
                <FaMinus />
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>
                <FaPlus />
              </button>
            </div>

            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-gold-custom">Buy Now</button>
              <button className="btn btn-dark-custom" onClick={() => addToCart(product, qty)}>Add To Cart</button>
            </div>
          </div>

        </div>

        <div className="description-box mt-5">
          <h3>Description</h3>
          <p>
            Premium handcrafted jewellery created with timeless elegance and
            luxury finishing. Designed for modern lifestyles while preserving
            traditional beauty.
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-center mb-4">Similar Products</h2>
          <div className="row g-4">
            {similarProducts.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6">
                <div className="similar-card text-center">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="img-fluid"
                  />
                  <h5 className="mt-3">{item.title}</h5>
                  <p>₹{item.price}</p>
                  <Link to={`/product/${item.id}`} className="btn btn-gold">
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductDetails;