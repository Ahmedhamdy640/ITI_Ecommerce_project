import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ productList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {productList.map((item) => (
        <ProductItem key={item.id} productItem={item} />
      ))}
    </div>
  );
};

export default ProductList;
