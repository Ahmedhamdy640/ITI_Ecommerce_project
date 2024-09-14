"use client";
import BreadCramps from "@/app/_components/BreadCramps";
import ProductApis from "@/app/_utlis/ProductApis";
import React, { useEffect, useState } from "react";
import ProductImage from "../_components/ProductImage";
import ProductInfo from "../_components/ProductInfo";
import { usePathname } from "next/navigation";

const ProductDetails = ({ params }) => {
  const path = usePathname();
  const [productDetails, setProdyctDetails] = useState({});
  useEffect(() => {
    getProductById_();
  }, [params?.productId]);
  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then((res) => {
      console.log(res.data.data);
      setProdyctDetails(res.data.data);
    });
  };
  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCramps path={path} />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 justify-around gap-5 md:gap-0">
        <ProductImage product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
    </div>
  );
};

export default ProductDetails;
