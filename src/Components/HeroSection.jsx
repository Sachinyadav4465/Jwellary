import React from "react";

export default function HeroSection() {
    const products = [
  {
    title: "Diamond Necklace",
    subtitle: "Certified Brilliance",
    image:
      "https://i.pinimg.com/736x/0b/af/c9/0bafc9059d3c0905bdb71b65a4da9440.jpg"
  },
  {
    title: "Gold Bridal Set",
    subtitle: "Timeless Heritage",
    image:
      "https://i.pinimg.com/736x/e6/da/c9/e6dac9a737226b98a5f6823308f8b715.jpg"
  },
  {
    title: "Pearl Earrings",
    subtitle: "Luminous Grace",
    image:
      "https://i.pinimg.com/1200x/a8/5d/7e/a85d7e870b6cd6d7527789333284b113.jpg"
  },
  {
    title: "Solitaire Rings",
    subtitle: "Perfect Symbol",
    image:
      "https://i.pinimg.com/1200x/1c/44/86/1c4486450b21e9926c0dbb6e2e4d63f9.jpg"
  }
];
  return (
    <section className="hero-section">
      <div className="container">

        <div className="row gallery-row">

          <div className="col-md-3 mb-3">
            <img
              src="https://doladelight.com/cdn/shop/files/dc56e87bd9a723315bccfd7f03394b58_720x720.jpg?v=1751338631"
              className="gallery-img"
              alt=""
            />
          </div>

          <div className="col-md-6 mb-3">
            <img
              src="https://i.pinimg.com/736x/59/a6/0d/59a60dc249619f48ee06100fe853bb68.jpg"
              className="gallery-main"
              alt=""
            />
          </div>

          <div className="col-md-3 mb-3">
            <img
              src="https://i.pinimg.com/736x/e9/2d/e7/e92de7899e70686fdb2770f33bab4081.jpg"
              className="gallery-img"
              alt=""
            />
          </div>

        </div>

        <div className="hero-content text-center">

          <h1>
            Crafted For Eternity.
            <br />
            Designed For Elegance.
          </h1>

          <p>
            Explore our exclusive collections of certified diamonds,
            pure 22K gold and premium South Sea pearls.
          </p>

          <div className="btn-wrapper d-flex justify-content-center flex-wrap gap-3">

            <button className="btn btn-gold">
              Explore Diamond Collection
            </button>

            <button className="btn btn-outline-dark">
              Shop Gold & Pearl Jewelry
            </button>

          </div>

        </div>

<div className="row g-4 mt-5">
  {products.map((item, index) => (
    <div
      className="col-lg-3 col-md-6"
      key={index}
    >
      <div className="product-card">
        <img
          src={item.image}
          alt={item.title}
          className="product-img"
        />

        <h5>{item.title}</h5>

        <p>{item.subtitle}</p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}