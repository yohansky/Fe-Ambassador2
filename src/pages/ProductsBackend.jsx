import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Products from "./Products";
import axios from "axios";

const ProductsBackend = () => {
  //Backend Product using pagination inside the backend/rest api
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    s: "",
    sort: "",
  });

  useEffect(() => {
    (async () => {
      const arr = [];

      if (filters.s) {
        arr.push(`s=${filters.s}`);
      }

      if (filters.sort) {
        arr.push(`sort=${filters.sort}`);
      }

      const { data } = await axios.get(`/products/backend?${arr.join("&")}`);

      setProducts(data.data);
    })();
  }, [filters]);

  return (
    <Layout>
      <Products products={products} filters={filters} setFilters={setFilters} />
    </Layout>
  );
};

export default ProductsBackend;
