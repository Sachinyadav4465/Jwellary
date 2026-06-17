import React from "react";

import {
  GiDiamondRing,
  GiDiamondHard,
  GiPearlNecklace,
} from "react-icons/gi";
import { FaMedal } from "react-icons/fa";


const features = [
  {
    icon: <GiDiamondHard />,
    title: "HANDCRAFTED",
    sub: "Master Artisans",
  },
  {
    icon: <FaMedal />,
    title: "CERTIFIED DIAMONDS",
    sub: "GIA & IGI Graded",
  },
  {
    icon: <GiDiamondRing />,
    title: "PURE 22K GOLD",
    sub: "Hallmarked Purity",
  },
  {
    icon: <GiPearlNecklace />,
    title: "PREMIUM GRADE PEARLS",
    sub: "Rare & Lustrous",
  },
];

const collections = [
  {
    title: "BRIDAL DIAMONDS",
    image:
      "https://i.pinimg.com/736x/b8/76/f5/b876f5b34bd262ca023e117b1d51104d.jpg",
  },
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

export default function LuxuryCollections() {
  return (
 <section className="luxury-section py-5">
  <div className="container">
    <h2 className="text-center fw-semibold mb-5 section-title">
      CRAFTSMANSHIP & LUXURY
    </h2>

    <div className="row g-4 text-center mb-5">
      {features.map((item, index) => (
        <div className="col-lg-3 col-md-6 col-6" key={index}>
          <div className="p-3 h-100">
            <div className="feature-icon mb-3">
              {item.icon}
            </div>

            <h6 className="fw-bold mb-1">
              {item.title}
            </h6>

            <small>{item.sub}</small>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-center fw-semibold mb-4 section-title py-3">
      SPECIAL COLLECTIONS
    </h2>

    <div className="row g-4">
      {collections.map((item, index) => (
        <div className="col-lg-3 col-md-6 col-6" key={index}>
          <div className="card border-0 shadow-sm collection-card">
            <img
              src={item.image}
              alt={item.title}
              className="card-img-top"
            />

            <div className="card-img-overlay d-flex align-items-end p-0">
              <div className="overlay-bg w-100 text-center py-2">
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}