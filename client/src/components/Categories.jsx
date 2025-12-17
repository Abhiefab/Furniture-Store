import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

import table from "../assets/icons/table.svg";
import sofa from "../assets/icons/sofa.svg";
import wardrobe from "../assets/icons/wardrobe.svg";
import bed from "../assets/icons/bed.svg";
import chair from "../assets/icons/chair.svg";

export default function Categories() {
  const items = [
    { name: "Table", icon: table },
    { name: "Sofa", icon: sofa },
    { name: "Wardrobe", icon: wardrobe },
    { name: "Bed", icon: bed },
    { name: "Chair", icon: chair },
  ];

  return (
    <section className="categories">
      <div className="categories-inner">
        {items.map((item) => (
          <Link
            key={item.name}
            to={`/shop/${item.name}`}
            className="category-item"
          >
            <div className="icon-wrapper">
              <img src={item.icon} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
