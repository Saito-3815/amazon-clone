"use client";

import { Product } from "@/types";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import ProductImage from "./ProductImage";
import RatingStars from "./RatingStars";

// メインのProductCardコンポーネントはサーバーコンポーネントとして実装
export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product) {
  return (
    <Link href={`/products/${id}`} className="block">
      <article className="relative flex flex-col m-5 bg-white z-30 p-10 hover:shadow-lg transition-shadow duration-200">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">
          {category}
        </p>

        <ProductImage src={image} alt={title} />

        <h4 className="my-3 line-clamp-2">{title}</h4>

        <RatingStars rating={rating} />

        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div className="mb-5">
          <p className="text-lg font-bold">¥{price.toLocaleString()}</p>
        </div>

        <AddToCartButton />
      </article>
    </Link>
  );
}
