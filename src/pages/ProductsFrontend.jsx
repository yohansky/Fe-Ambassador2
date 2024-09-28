import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Products from "./Products";
import axios from "axios";

const ProductsFrontend = () => {
  //Frontend product didn't use the pagination from rest api/backend
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/products/frontend");

      setProducts(data);
    })();
  }, []);
  return (
    <Layout>
      <Products products={products} />
    </Layout>
  );
};

export default ProductsFrontend;
