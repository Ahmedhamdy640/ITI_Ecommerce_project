"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "../_utlis/ProductApis";

const ProductSection = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then((res) => {
      console.log(res.data.data);
      setProductList(res.data.data);
    });
  };
  return (
    <div className="px-10 md:px-20">
      <h2 className="mt-5 ml-10 text-2xl">Our latest products</h2>
      <ProductList productList={productList} />
    </div>
  );
};

export default ProductSection;
