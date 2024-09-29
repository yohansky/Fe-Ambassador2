import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Products from "./Products";
import axios from "axios";

const ProductsFrontend = () => {
  //Frontend product didn't use the pagination from rest api/backend
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    s: "",
  });

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/products/frontend");

      setAllProducts(data);
      setFilteredProducts(data);
    })();
  }, []);

  useEffect(() => {
    let products = allProducts.filter((p) => p.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 || p.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);

    setFilteredProducts(products);
  }, [filters]);

  return (
    <Layout>
      <Products products={filteredProducts} filters={filters} setFilters={setFilters} />
    </Layout>
  );
};

export default ProductsFrontend;
