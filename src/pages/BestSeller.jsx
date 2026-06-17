import React from "react";

const BestSeller = () => {
  const products = [
    {
      title: "Diamond Necklace",
      subtitle: "Certified Brilliance",
      price:"500",
      image:
        "https://i.pinimg.com/736x/0b/af/c9/0bafc9059d3c0905bdb71b65a4da9440.jpg",
    },
    {
      title: "Gold Bridal Set",
      subtitle: "Timeless Heritage",
      price:"800",
      image:
        "https://i.pinimg.com/736x/e6/da/c9/e6dac9a737226b98a5f6823308f8b715.jpg",
    },
    {
      title: "Pearl Earrings",
      subtitle: "Luminous Grace",
      price:"900",
      image:
        "https://i.pinimg.com/1200x/a8/5d/7e/a85d7e870b6cd6d7527789333284b113.jpg",
    },
    {
      title: "Solitaire Rings",
      subtitle: "Perfect Symbol",
      price:"300",
      image:
        "https://i.pinimg.com/1200x/1c/44/86/1c4486450b21e9926c0dbb6e2e4d63f9.jpg",
    },
     {
      title: "Diamond Necklace",
      subtitle: "Certified Brilliance",
      price:"1000",
      image:
        "https://i.pinimg.com/736x/0b/af/c9/0bafc9059d3c0905bdb71b65a4da9440.jpg",
    },
    {
      title: "Gold Bridal Set",
      subtitle: "Timeless Heritage",
      price:"200",
      image:
        "https://i.pinimg.com/736x/e6/da/c9/e6dac9a737226b98a5f6823308f8b715.jpg",
    },
    {
      title: "Pearl Earrings",
      subtitle: "Luminous Grace",
      price:"100",
      image:
        "https://i.pinimg.com/1200x/a8/5d/7e/a85d7e870b6cd6d7527789333284b113.jpg",
    },
    {
      title: "Solitaire Rings",
      subtitle: "Perfect Symbol",
      price:"700",
      image:
        "https://i.pinimg.com/1200x/1c/44/86/1c4486450b21e9926c0dbb6e2e4d63f9.jpg",
    },
  ];

  return (
    <section className="container py-3">
      <h2 className="text-center fw-bold mb-5">Best Sellers</h2>

      <div className="row g-4">
        {products.map((item, index) => (
          <div className="col-lg-3 col-md-6 " key={index}>
            <div className="product-card text-center">
              <img
                src={item.image}
                alt={item.title}
                className="product-img img-fluid"
              />

              <h5 className="mt-3 fw-semibold">{item.title}</h5>
              <p className="text-muted mb-0">{item.subtitle}</p>
              <p className="text-muted mb-0"> &#8377;{ item.price}</p>
        <button class="btn btn-gold view-btn">
        View Details
    </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;