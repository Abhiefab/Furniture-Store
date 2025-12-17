import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
import PRODUCTS from "../../data/products";
import "./Shop.css";

const categories = ["All Products", "Table", "Sofa", "Decor", "Chair", "Lighting","Bed","Wardrobe"];

export default function Shop() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const ITEMS_PER_PAGE = 8;

  const [filter, setFilter] = useState("All Products");
  const [currentPage, setCurrentPage] = useState(1);

  /* Sync category from URL */
  useEffect(() => {
    if (category) {
      setFilter(category.charAt(0).toUpperCase() + category.slice(1));
    } else {
      setFilter("All Products");
    }
    setCurrentPage(1);
  }, [category, searchQuery]);

  /* Filter products */
  const filtered = PRODUCTS.filter((p) => {
    const matchCategory =
      filter === "All Products" || p.category === filter;

    const matchSearch =
      p.name.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery);

    return matchCategory && matchSearch;
  });

  /* Pagination */
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filtered.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="shop-page">

      {/* HERO */}
      <div className="shop-hero">
        <h1>Latest Collection</h1>
        <p>
          Welcome to our online furniture store with modern & premium products.
        </p>
      </div>

      {/* TOOLBAR */}
      <div className="shop-toolbar container">
        <span>
          Showing {filtered.length} results
          {searchQuery && <> for "<strong>{searchQuery}</strong>"</>}
        </span>

        <select
          className="shop-filter"
          value={filter}
          onChange={(e) => {
            const value = e.target.value;
            setFilter(value);
            setCurrentPage(1);

            if (value === "All Products") {
              navigate(searchQuery ? `/shop?search=${searchQuery}` : "/shop");
            } else {
              navigate(
                `/shop/${value.toLowerCase()}${
                  searchQuery ? `?search=${searchQuery}` : ""
                }`
              );
            }
          }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* PRODUCTS GRID */}
      <div className="shop-grid container">
        {paginatedProducts.length === 0 ? (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            No products found.
          </p>
        ) : (
          paginatedProducts.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="shop-card"
            >
              <div className="shop-img">
                <img src={p.img} alt={p.name} />
              </div>

              <h4>{p.name}</h4>

              <div className="shop-price">
                ₹ {p.priceINR.toLocaleString("en-IN")}
              </div>
            </Link>
          ))
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="shop-pagination">
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage((p) => p - 1)}>
              Previous
            </button>
          )}

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
