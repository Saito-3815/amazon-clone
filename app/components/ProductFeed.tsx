import { PRODUCTS } from "@/constants/products";
import ProductCard from "./ProductCard";

export default function ProductFeed() {
  return (
    <section
      className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto"
      aria-label="商品一覧"
    >
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}
