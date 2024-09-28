import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Products from "./Products";
import axios from "axios";

const ProductsBackend = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/products/backend");

      setProducts(data.data);
    })();
  }, []);

  return (
    <Layout>
      <Products products={products} />
    </Layout>
  );
};

export default ProductsBackend;
