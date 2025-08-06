import React, { useEffect } from "react";
import Styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";

const Women = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  console.log("🚀 ~ Women ~ items:", items)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className={Styles.main_container}>
      <div className={Styles.filters_container}>filters</div>

      <div className={Styles.main_product_container}>
        <div className={Styles.product_title_container}>
          <h2 className={Styles.product_title}>Women’s Clothing</h2>
          <h2 className={Styles.product_title}>New Recommended</h2>
        </div>

        <div className={Styles.product_container}>
          {items.map((product) => (
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
      </div>
    </main>
  );
};

export default Women;
