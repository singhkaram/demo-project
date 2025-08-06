import React, { useEffect, useState } from "react";
import Styles from "./styles.module.css";

const Women = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        // Filter for women's clothing
        const womensClothing = data.filter(
          (product) => product.category === "women's clothing"
        );

        setProducts(womensClothing);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className={Styles.main_container}>
      <div className={Styles.filters_container}>filters</div>

      <div className={Styles.main_product_container}>
        <div className={Styles.product_title_container}>
        <h2 className={Styles.product_title}>Women’s Clothing</h2>
        <h2 className={Styles.product_title}>New Recommended</h2>

        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className={Styles.product_container}>
            {products.map((product) => (
              <div key={product.id} className={Styles.product_box}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={Styles.product_image}
                />
                <div className={Styles.main_product_details_box}>
                  <div className={Styles.product_details_box}>
                    <span>
                      {product?.title?.length > 20
                        ? `${product.title.slice(0, 20)}...`
                        : product.title}
                    </span>
                    <p>
                      {product?.brand?.length > 20
                        ? `${product.brand.slice(0, 20)}...`
                        : product.brand}
                    </p>
                  </div>
                  <p>${product?.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Women;
