import React from "react";

const collections = [

  {
    title: "ROYAL GOLD",
    image:
      "https://i.pinimg.com/736x/cc/c4/1c/ccc41ccc5c95a0cb9ddbf08faa237c7c.jpg",
  },
  {
    title: "PEARL SIGNATURE",
    image:
      "https://i.pinimg.com/736x/c3/51/70/c35170688beeaf0a97443437adc29d43.jpg",
  },
  {
    title: "MODERN FUSION",
    image:
      "https://i.pinimg.com/736x/72/38/32/723832622cf52e7f034b70ee8fc51a29.jpg",
  },
];

export default function StylesCollections() {
  return (
 <section className="luxury-section py-5">
  <div className="container">
    

    <h2 className="text-center fw-semibold mb-4 section-title py-3">
      LIFESTYLES / MODELSHOWCASE
    </h2>

    <div className="row g-4">
      {collections.map((item, index) => (
        <div className="col-lg-4 col-md-6 col-6" key={index}>
          <div className="card border-0 shadow-sm collection-card">
            <img
              src={item.image}
              alt={item.title}
              className="card-img-top"
            />

            
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}