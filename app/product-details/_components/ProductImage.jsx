import Image from "next/image";
import React from "react";

function ProductImage({ product }) {
  const url = product?.attributes?.images?.data?.[0]?.attributes?.url
    ? `http://localhost:1337${product.attributes.images.data[0].attributes.url}`
    : null;

  return (
    <div>
      {url ? (
        <Image src={url} alt="phone" width={400} height={400} />
      ) : (
        <div className="w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
}

export default ProductImage;
