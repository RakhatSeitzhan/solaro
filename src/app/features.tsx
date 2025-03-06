import React from "react";
import Link from "next/link";
import HoverImage from "./components/HoverImage";
const FeaturesAndProducts: React.FC = () => {
  const products = [
    {
      image: "/images/versace/products/product-1.png",
      zoom:  "/images/versace/products/product-1-zoom.png",
      title: "Кресло VERSACE Home",
      link: '/versace'
    },
    {
      image: "/images/dolce/products/product-1.png",
      zoom:  "/images/dolce/products/product-1-zoom.png",
      title: "Кресло DOLCE & GABBANA Casa",
      link: '/dolce'
    },
    {
      image: "/images/bentley/products/product-1.png",
      zoom:  "/images/bentley/products/product-1-zoom.png",
      title: "Кресло BENTLEY Home",
      link: '/bentley'
    },
    {
      image: "/images/bugatti/products/product-1.png",
      zoom:  "/images/bugatti/products/product-1-zoom.png",
      title: "Кресло BUGATTI Home",
      link: '/bugatti'
    },
    {
      image: "/images/trussardi/products/product-1.png",
      zoom:  "/images/trussardi/products/product-1-zoom.png",
      title: "Кресло TRUSSARDI Casa",
      link: '/trussardi'
    },
  ]
  return (
    <section className="w-full md:overflow-scroll mt-10">
      <div className="flex md:flex-row flex-col gap-2">
        {products.map((product, index) => (
          <Link href = {product.link} key={index} className="mx-auto">
              <h3 className="text-lg font-regular">{product.title}</h3>
              <HoverImage
                alt=""
                defaultSrc={product.image}
                hoverSrc={product.zoom}
              />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturesAndProducts;
