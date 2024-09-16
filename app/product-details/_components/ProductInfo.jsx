"use client";
import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../_utlis/CartApis";
import { data } from "autoprefixer";
import { CartContext } from "@/app/_context/CartContext";
import ProductSkeleton from "./ProductSkeleton";

function ProductInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      /* logic to add product to cart */
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };
      CartApis.addToCard(data)
        .then((res) => {
          console.log("cart created successfully", res.data.data);
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return (
    <div>
      {product?.id ? (
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
      ) : (
        <ProductSkeleton />
      )}
    </div>
  );
}

export default ProductInfo;
