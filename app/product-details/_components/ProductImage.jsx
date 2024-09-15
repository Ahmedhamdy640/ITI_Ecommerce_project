import Image from "next/image";
import React from "react";

// Example spinner component, you can replace it with your custom spinner or library spinner
function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Loading...</h1>
    </div>
  ); // You can style this or use a spinner from a UI library
}

function ProductImage({ product }) {
  if (!product) {
    return <Spinner />; // Show loading spinner when product is null
  }

  const url = product?.attributes?.images?.data?.[0]?.attributes?.url
    ? `http://localhost:1337${product.attributes.images.data[0].attributes.url}`
    : null;

  return (
    <div>
      {url ? (
        <Image src={url} alt="phone" width={400} height={400} />
      ) : (
        <p>Image not available</p>
      )}
    </div>
  );
}

export default ProductImage;
