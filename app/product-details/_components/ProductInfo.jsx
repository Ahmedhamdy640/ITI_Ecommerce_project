"use client";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Example spinner component
function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Loading...</h1>
    </div>
  ); // You can style this or use a spinner from a UI library
}

function ProductInfo({ product }) {
  if (!product) {
    return <Spinner />; // Show loading spinner when product is null
  }

  const { user } = useUser();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      /* logic to add product to cart */
    }
  };

  return (
    <div className="flex flex-col justify-around w-[500px] mr-10">
      <h2 className="mb-2 font-bold text-[30px]">
        {product.attributes?.title}
      </h2>
      <p className="my-2">
        {product.attributes?.description?.[0]?.children?.[0]?.text}
      </p>
      <p className="my-2">
        {product.attributes?.description?.[1]?.children?.[0]?.text}
      </p>
      <p className="my-2">
        {product.attributes?.description?.[2]?.children?.[0]?.text}
      </p>
      <p className="my-2">
        {product.attributes?.description?.[3]?.children?.[0]?.text}
      </p>
      <p className="my-2">
        {product.attributes?.description?.[4]?.children?.[0]?.text}
      </p>
      <p className="my-2">
        {product.attributes?.description?.[5]?.children?.[0]?.text}
      </p>
      <p className="my-2">
        {product.attributes?.description?.[6]?.children?.[0]?.text}
      </p>
      <h4 className="text-teal-400 font-bold text-[20px] mt-3">
        price: {product.attributes?.price} EG
      </h4>

      <div className="inline mt-5">
        <button
          onClick={handleAddToCart}
          className="flex gap-2 bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
        >
          <ShoppingCart />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
