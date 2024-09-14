import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ productList }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {productList.map((item) => (
        <ProductItem key={item.id} productItem={item} />
      ))}
    </div>
  );
};

export default ProductList;
