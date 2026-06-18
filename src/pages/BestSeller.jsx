import React from "react";
import { Link } from "react-router-dom";
export const products = [
  {
    id: 1,
    title: "Diamond Necklace",
    subtitle: "Certified Brilliance",
    price: 500,
    images: [
      "https://i.pinimg.com/736x/0b/af/c9/0bafc9059d3c0905bdb71b65a4da9440.jpg",
      "https://i.pinimg.com/736x/0b/af/c9/0bafc9059d3c0905bdb71b65a4da9440.jpg",
      "https://i.pinimg.com/736x/0b/af/c9/0bafc9059d3c0905bdb71b65a4da9440.jpg",
      "https://i.pinimg.com/736x/0b/af/c9/0bafc9059d3c0905bdb71b65a4da9440.jpg",
    ],
  },
  {
    id: 2,
    title: "Gold Bridal Set",
    subtitle: "Timeless Heritage",
    price: 800,
    images: [
      "https://i.pinimg.com/736x/e6/da/c9/e6dac9a737226b98a5f6823308f8b715.jpg",
      "https://i.pinimg.com/736x/e6/da/c9/e6dac9a737226b98a5f6823308f8b715.jpg",
      "https://i.pinimg.com/736x/e6/da/c9/e6dac9a737226b98a5f6823308f8b715.jpg",
      "https://i.pinimg.com/736x/e6/da/c9/e6dac9a737226b98a5f6823308f8b715.jpg",
    ],
  },
  {
    id: 3,
    title: "Pearl Earrings",
    subtitle: "Luminous Grace",
    price: 900,
    images: [
      "https://i.pinimg.com/1200x/a8/5d/7e/a85d7e870b6cd6d7527789333284b113.jpg",
      "https://i.pinimg.com/1200x/a8/5d/7e/a85d7e870b6cd6d7527789333284b113.jpg",
      "https://i.pinimg.com/1200x/a8/5d/7e/a85d7e870b6cd6d7527789333284b113.jpg",
      "https://i.pinimg.com/1200x/a8/5d/7e/a85d7e870b6cd6d7527789333284b113.jpg",
    ],
  },
  {
    id: 4,
    title: "Solitaire Rings",
    subtitle: "Perfect Symbol",
    price: 300,
    images: [
      "https://i.pinimg.com/1200x/1c/44/86/1c4486450b21e9926c0dbb6e2e4d63f9.jpg",
      "https://i.pinimg.com/1200x/1c/44/86/1c4486450b21e9926c0dbb6e2e4d63f9.jpg",
      "https://i.pinimg.com/1200x/1c/44/86/1c4486450b21e9926c0dbb6e2e4d63f9.jpg",
      "https://i.pinimg.com/1200x/1c/44/86/1c4486450b21e9926c0dbb6e2e4d63f9.jpg",
    ],
  }
];

const BestSeller = () => {
  return (
    <section className="container py-3">
      <h2 className="text-center fw-bold mb-5">Best Sellers</h2>

      <div className="row g-4">
        {products.map((item) => (
          <div className="col-lg-3 col-md-6" key={item.id}>
            <div className="product-card text-center">
              <img
                src={item.images[0]} 
                alt={item.title}
                className="product-img img-fluid"
              />

              <h5 className="mt-3 fw-semibold">{item.title}</h5>
              <p className="text-muted mb-0">{item.subtitle}</p>
              <p className="text-muted mb-2"> ₹{item.price}</p>
              <Link to={`/product/${item.id}`} className="btn btn-gold">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;