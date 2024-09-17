import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({ productItem }) => {
  const url = `http://localhost:1337${productItem?.attributes?.images?.data[0]?.attributes?.url}`;
  return (
    <Link
      href={`/product-details/${productItem?.id}`}
      style={{ textDecoration: "none", color: "black" }}
      className="flex flex-row justify-between w-[350px] md:w-[300px] bg-slate-100 mx-10 my-5 px-4 py-3 rounded-lg hover:border p-1 hover:shadow-md border-teal-400 hover:cursor-pointer"
    >
      <div className="flex flex-col justify-between mr-3">
        <h6>{productItem?.attributes?.title}</h6>
        <p>{productItem?.attributes?.price} EG</p>
      </div>
      <div>
        <Image
          src={url}
          alt={"phone"}
          width={200}
          height={200}
          className="min-h-[100px] min-w-[150px] max-w-[155px] max-h-[190px] object-contain"
        />
      </div>
    </Link>
  );
};

export default ProductItem;
